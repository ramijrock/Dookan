import Configs from '../../Configs/config';
import { sendPostData } from '../../utils/requestHelper';


export const register = async (requestObj) => {
	let url = Configs.BASE_URL + "register";
	return sendPostData(url, requestObj);
};

export const login = async (requestObj) => {
	let url = Configs.BASE_URL + "login";
	return sendPostData(url, requestObj);
};