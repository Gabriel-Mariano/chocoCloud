import axios from 'axios';

import { 
    failedObject, 
    successObject 
} from '../utils/buildResponse';

export const listProducts = async() => {
    try {
        const { data } = await axios.get('https://gist.githubusercontent.com/Gabriel-Mariano/7361b1bc99c5c37cc1ec82d054affe6b/raw/af604b8c75e20e780b9827a8f0e633efd5bfc27e/api.json');

        return successObject(data);
    } catch (error) {
        return failedObject(error)
    }
}
