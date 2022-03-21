import axios from 'axios';

import { 
    failedObject, 
    successObject 
} from '../utils/buildResponse';

export const listProducts = async() => {
    try {
        const { data } = await axios.get('https://gist.githubusercontent.com/Gabriel-Mariano/7361b1bc99c5c37cc1ec82d054affe6b/raw/50c6256c093c5a12d3896033cd323b16ccdf18f4/api.json');

        return successObject(data);
    } catch (error) {
        return failedObject(error)
    }
}
