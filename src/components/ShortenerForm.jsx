import {useState} from 'preact/hooks'
import {shorten} from "../services";
import {WarningBoundary} from "./Boundaries/index.js";

/**
 * The form component to generate a shortened link
 * @returns {Element}
 * @constructor
 */
export const ShortenerForm = () => {
  const [link, setLink] = useState("");
  const [url, setUrl] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!isValid) setIsValid(true);
    if (!link)  return setIsValid(false);

    const url = shorten(link);
    if (!url) return setIsValid(false);

    setUrl(url);
    navigator.clipboard.writeText(url);
  };

  return (
      <>
        <h1>little link</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input type="text" value={link} onInput={(e) => setLink(e.target.value)}/>
          <button>Shorten</button>
          {url && <p>Your link is copied to the clipboard: <a href={url}>{url}</a></p>}
          {!isValid && <WarningBoundary warning="A valid URL is required" />}
        </form>
      </>
  )
}
