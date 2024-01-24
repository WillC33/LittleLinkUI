import { h } from "preact";
import { useErrorBoundary } from "preact/hooks";

/**
 * Preact useErrorBoundary implementation
 * @param props
 * @returns {JSXInternal.Element|*}
 * @constructor
 */
export const ErrorBoundary = (props) => {
    const [error, resetError] = useErrorBoundary();

    if (error) {
        return (
            <>
                <h1>Oh no! We've experienced an error</h1>
                <p>Something went wrong and your action could not be completed</p>
                <p>Here's what happened: {error.message}</p>

                <button onClick={resetError}>Try again</button>
            </>
        );
    }

    return props.children;
};
