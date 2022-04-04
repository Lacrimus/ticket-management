export default class Change {	
	id: number;
	properties: any[];
	timestamp: Date;

	constructor(id:number, properties:any[]) {
		this.id = id;
		this.properties = properties;
		this.timestamp = new Date();
	}
}