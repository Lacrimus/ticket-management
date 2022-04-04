# LSG Ticket management 

This is a hybrid app built upon the cross platform framework [Apache cordova](https://cordova.apache.org/) for deployment on android, ios and electron. 
Also, [svelte](https://svelte.dev/) is used as an UI framework.

## Issues
- internal boolean <-> number conversion due ton indexedDb
- indexedDb objects are overwritten instead of each property being changed individually
- deleting tickets resets ticks (only in js, db is unaffected) (component destroyed?)
- encapsulate dexie.js calls in db.transaction()

## Technologies

### Frontend
+ svelte UI framework
+ svelte material design
+ google fonts icon set
+ dexie.js for indexedDB

### Framework / Wrapper
+ Apache Cordova as a cross platform environment using web technologies

### Backend
[Dedicated backend repository](https://github.com/lsglab/ticket-management-backend)

### Development
+ git for version control
+ package management + build scrips via npm
+ asset bundling with rollup
+ postcss to automate CSS operations (purgecss, cssnano, autoprefixing)

## Deployment
Intended target platforms are the newest versions of
+ android
+ ios
+ electron


## Plugins
This project is largely dependent on external plugins for the used technologies, of which most are used in the development process (see `package.json`)
