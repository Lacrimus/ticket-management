import svelte from 'rollup-plugin-svelte';
import sveltePreprocess from 'svelte-preprocess';
import typescript from 'rollup-plugin-typescript2';
import css from 'rollup-plugin-css-only';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';

const production = !process.env.ROLLUP_WATCH;

export default {
	input: 'src/main.ts',
	output: {
		sourcemap: production,
		format: 'iife',
		name: 'app',
		file: 'www/bundle.js'
	},
	plugins: [
		svelte({
			compilerOptions: {
				// enable run-time checks when not in production
				dev: !production
			},
			//preprocess any styles
			preprocess: sveltePreprocess({ 
				postcss: true,
				sourceMap : production
			}),
			extensions: [".svelte"],
			emitCss: true,
		}),

		// we'll extract any component CSS out into
		// a separate file - better for performance
		css({ output: 'bundle.css' }),

		typescript({
			sourceMap: !production,
			inlineSources: !production
		}),

		commonjs(),

		resolve({ browser: true }),

		// Watch the www/ directory and refresh the
		// browser on changes when not in production
		!production && livereload({ watch: "www/", delay: 100 }),

		// If we're building for production (npm run build
		// instead of npm run dev), minify
		production && terser({
			output: {
				comments: false,
			},
		})
	],
	watch: {
		clearScreen: false
	},
};
