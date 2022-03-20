import axios from 'axios';

import { 
    failedObject, 
    successObject 
} from '../utils/buildResponse';

export const listProducts = async() => {
    try {
        const { data } = await axios.get('https://gist.githubusercontent.com/Gabriel-Mariano/7361b1bc99c5c37cc1ec82d054affe6b/raw/2c84dbf1e39e7bc6998b784d9c5627f73c0f1115/api.json');

        return successObject(data);
    } catch (error) {
        return failedObject(error)
    }
}
