import { useEffect } from 'preact/hooks';
import {route} from "preact-router";
import {fetchLink} from "../services/";
import {Loader} from "./Loader.jsx";

/**
 * The external route is used for 301 to the retrieved link
 * @returns {null}
 * @constructor
 */
export const ExternalRoute = () => {
    useEffect(async () => {
        const hash = window.location.pathname.split('/go/')[1];

        const res = await fetchLink(hash)
        if (res?.url) {
            window.location.replace(res.url);
        }
        else
            route('/', true);
    }, []);
    return <Loader />
};
