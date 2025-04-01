import styles from "./ResponsiveList.module.css"

type Props = {
  children?: React.ReactNode;
};

export const ResponsiveList = (props: Props) => {
  const { children } = props;
  return (
    <div className={styles.listWrapper}>
        {children}
    </div>
  );
}

ResponsiveList.Column = (props: Props) => {
  const { children,
} = props;
  return (
    <div className={styles.listItem}>
      {children}
    </div>
  );
};
