import axios from 'axios';

import { 
    failedObject, 
    successObject 
} from '../utils/buildResponse';

export const listProducts = async() => {
    try {
        const { data } = await axios.get('https://gist.githubusercontent.com/Gabriel-Mariano/7361b1bc99c5c37cc1ec82d054affe6b/raw/db9469c4a489db7c577f8fe09331e9ab0e560191/api.json');

        return successObject(data);
    } catch (error) {
        return failedObject(error)
    }
}
