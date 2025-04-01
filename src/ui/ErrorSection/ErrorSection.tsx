import styles from "./ErrorSection.module.css"

interface Props {
  title: string;
  message: string;
}

export const ErrorSection = (props: Props) => {
  const {title, message} = props
  return (
    <div className={styles.flexContainer}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.message}>{message}</p>
      </div>
    </div>
  )
}
