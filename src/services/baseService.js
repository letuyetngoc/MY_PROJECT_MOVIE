import { ACCESS_TOKEN, DOMAIN, TOKEN } from "../util/settings/config"
import axios from 'axios';
export class baseService {
    put = (url, model) => {
        return axios({
            url: `${DOMAIN}/${url}`,
            method: 'PUT',
            data: model,
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem(ACCESS_TOKEN),
                'TokenCybersoft': TOKEN
            }
        })
    };
    post = (url, model) => {
        return axios({
            url: `${DOMAIN}/${url}`,
            method: 'POST',
            data: model,
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem(ACCESS_TOKEN),
                'TokenCybersoft': TOKEN
            }

        })
    };
    get = (url) => {
        return axios({
            url: `${DOMAIN}/${url}`,
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem(ACCESS_TOKEN),
                'TokenCybersoft': TOKEN
            }
        })
    };
    delete = (url) => {
        return axios({
            url: `${DOMAIN}/${url}`,
            method: 'DELETE',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem(ACCESS_TOKEN),
                'TokenCybersoft': TOKEN
            }
        })
    }
}

