import styles from '@/styles/Code.module.scss'

export default function Introduction() {
    return (
        <div className={styles.code}>
            <p className={styles.comment}>//Introduction</p>
            <p className={styles.object}>Developer: <span className={styles.text}>&#123;</span></p>
            <p className={styles.indent}>First Name: <span className={styles.value}>Adam</span>,</p>
            <p className={styles.indent}>Last Name: <span className={styles.value}>Kui</span>,</p>
            <p className={styles.indent}>Age: <span className={styles.value}>25</span>,</p>
            <p className={styles.indent}>Location: <span className={styles.value}>Budapest</span>,</p>
            <p className={styles.indent}>Experience: <span className={styles.bracket}>&#91;</span></p>
            <p className={styles.double_indent}>Frontend web-development: <span className={styles.value}>1 year, mostly working in React</span>,</p>
            <p className={styles.double_indent}>Robotic Process Automation: <span className={styles.value}>4 years in UiPath</span>,</p>
            <p className={styles.double_indent}>Other: <span className={styles.value}>.NET (C#, VB), ABAP, Java</span></p>

            <p className={styles.indent}><span className={styles.bracket}>&#93;</span></p>
            <p className={styles.text}>&#125;</p>
        </div>
    )
}
