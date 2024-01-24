import styles from './Loader.module.css'

/**
 * A styled loader component
 * @returns {JSXInternal.Element}
 * @constructor
 */
export const Loader = () => (
    <h1 className={styles.loader}>
        <span className={styles.let1}>l</span>
        <span className={styles.let2}>o</span>
        <span className={styles.let3}>a</span>
        <span className={styles.let4}>d</span>
        <span className={styles.let5}>i</span>
        <span className={styles.let6}>n</span>
        <span className={styles.let7}>g</span>
    </h1>
)
