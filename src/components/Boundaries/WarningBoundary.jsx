import styles from './WarningBoundary.module.css'

/**
 * Custom warning boundary for misuse warnings that do not require exceptions
 * @param warning
 * @returns {Element}
 * @constructor
 */
export const WarningBoundary = ({warning}) => {
    return(
        <div className={styles.warning}>
            <h4>Don't be a dipstick...</h4>
            <p>{warning}</p>
        </div>
    );
}
