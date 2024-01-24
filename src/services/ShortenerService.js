import md5 from 'md5';
import {consts} from "../utils/consts.js";
import {writeLink} from "./PersistenceService.js";

/**
 * Shortens a link using MD5. WARNING: this is not crypto secure!
 * @param url
 * @returns {`lustrous-marzipan-84428a/go/${*}`|null}
 */
export const shorten = (url) => {
    if (!validateUrl(url)) return null;

    const hash = md5(url);
    const id = hash.slice(0, 10);

    url = ensureHttpProtocol(url);
    writeLink({id, url});
    return `${consts.BASE_URL}${id}`;
};

/**
 * validates a url against regex
 * @param url
 * @returns {boolean}
 */
const validateUrl = (url) => {
    const urlPattern = new RegExp(
        /^(https?:\/\/)?([a-z0-9-]+\.)+[a-z]{2,}(:[0-9]+)?(\/.*)?$/i
    );
    return urlPattern.test(url);
};

/**
 * Ensures string starts with http:// or https:// for redirection
 * @param url
 * @returns {string}
 */
const ensureHttpProtocol = (url) => {
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
        url = "https://" + url;
    }
    return url;
}
