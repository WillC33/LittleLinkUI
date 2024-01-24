/**
 * Writes a link to the local storage
 * @param postData
 * @returns {Promise<any>}
 */
export const writeCachedLink = (postData) => {
    const {id, url} = postData;
    localStorage.setItem(id, url);
};

/**
 * Retrieves a link from the local storage
 * @param id
 * @returns {{data: {id, url: string}}}
 */
export const fetchCachedLink = (id) => {
    const res =  localStorage.getItem(id);
    //returns a matching structure as the db for easier upstream handling
    return {data: {id, url: res}}
}
