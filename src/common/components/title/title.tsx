import { Typography } from 'antd';
import styles from './title.module.css';

interface TitleProps {
  level: 2 | 1 | 5 | 3 | 4;
  children: React.ReactNode;
}

const Title = ({ children, level }: TitleProps) => {
  return (
    <div className={styles.titleBlock}>
      <Typography.Title level={level} className={styles.title}>
        {children}
      </Typography.Title>
    </div>
  )
}

export default Title
