import axios from 'axios';

import { 
    failedObject, 
    successObject 
} from '../utils/buildResponse';

export const listProducts = async() => {
    try {
        const { data } = await axios.get('https://gist.githubusercontent.com/Gabriel-Mariano/7361b1bc99c5c37cc1ec82d054affe6b/raw/92106a26d506efa3fcc52760ee8141ce5fd3eeb4/api.json');

        return successObject(data);
    } catch (error) {
        return failedObject(error)
    }
}
