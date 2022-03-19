import axios from 'axios';

import { 
    failedObject, 
    successObject 
} from '../utils/buildResponse';

export const listProducts = async() => {
    try {
        const { data } = await axios.get('https://gist.githubusercontent.com/Gabriel-Mariano/7361b1bc99c5c37cc1ec82d054affe6b/raw/b463fbf33839cf7a1c4921f3268265b4b43449bc/api.json');

        return successObject(data);
    } catch (error) {
        return failedObject(error)
    }
}
