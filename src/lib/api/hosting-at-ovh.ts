import {API} from "./api.ts";
import {RestAPI} from "./restapi.ts";

const api: API = new RestAPI();

export class HostingAtOvh {
	static getAPI(): API {
		return api;
	}
}
