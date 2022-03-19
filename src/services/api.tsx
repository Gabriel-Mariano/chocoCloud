import axios from 'axios';

import { 
    failedObject, 
    successObject 
} from '../utils/buildResponse';

export const listProducts = async() => {
    try {
        const { data } = await axios.get('https://gist.githubusercontent.com/Gabriel-Mariano/7361b1bc99c5c37cc1ec82d054affe6b/raw/9591ba3dc9dc73fb057322aac5600bb783d2da0a/api.json');

        return successObject(data);
    } catch (error) {
        return failedObject(error)
    }
}
