import styles from "./LoaderAnimation.module.css"

interface Props {
  text: string;
}

export const LoaderAnimation = (props: Props) => {
  const {text} = props
  return (
    <div className={styles.flexContainer}>
      <div className={styles.loaderAnimationContainer}>
        <p>{text}</p>
        <div className={styles.loaderAnimation}></div>
      </div>
    </div>
  )
}
