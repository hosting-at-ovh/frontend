import {API} from "./api";
import axios from 'axios';

export class RestAPI extends API {

	async getUpload(id: number): Promise<void> {
		const response = await axios.get(`/api/upload/${id}`);
		return response.data;
	}

	async getRole(username: string): Promise<void> {
		const response = await axios.get(`/auth/role/${username}`);
		return response.data;
	}

}