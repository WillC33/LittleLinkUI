import axios from 'axios';
import {fetchCachedLink, writeCachedLink} from "./CachingService.js";
import {consts} from "../utils/consts.js";

/**
 * Writes a link to the storage
 * @param postData
 * @returns {Promise<any>}
 */
export const writeLink = async (postData) => {
    try {
        writeCachedLink(postData);
        const res = await axios.post(`${consts.DB_URL}`, postData);
        return res.data;
    }
    catch (ex) {
        console.error("Error ");
        throw ex;
    }
};

/**
 * Retrieves a link from the storage
 * @param id
 * @returns {Promise<any>}
 */
export const fetchLink = async (id) => {
    try {
        const cached = fetchCachedLink(id)
        console.log(cached);
        if (cached.url !== null) return cached.data;

        const res= await axios.get(`${consts.DB_URL}${id}`);
        return res.data;
    }
    catch  {
       return null
    }
}
