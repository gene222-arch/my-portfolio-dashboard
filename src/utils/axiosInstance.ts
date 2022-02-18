import Axios, { AxiosInstance } from 'axios'
import * as Cookies from './cookies';

type AxiosHeaderConfig = {
    Authorization: string
};

const axiosInstance = (): AxiosInstance => 
{
    const headers: AxiosHeaderConfig = {
        Authorization: ''
    };

    if (Cookies.has('accessToken')) 
    {
        const accessToken = Cookies.get('accessToken');
        
        if (accessToken) {
            headers.Authorization = accessToken;
        }
    }

    const axiosInstance = Axios.create({
        baseURL: process.env.REACT_APP_LARAVEL_APP_API_URL,
        headers
    });

    axiosInstance
        .interceptors
        .response
        .use(
            response => response, // Promise.resolve(response)
            error => {
                switch (error.response.status) 
                {
                    case 401:
                        alert('Unauthorized access');
                        break;

                    case 403:
                        alert('FORBIDDEN')
                        break;

                    case 500:
                        alert('Something went wrong in the server');
                        break;            
                }

                return Promise.reject(error);
            }
        );

    return axiosInstance;
}

export default axiosInstance;