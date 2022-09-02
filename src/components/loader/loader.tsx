import { FC } from 'react';
import { Oval } from 'react-loader-spinner';
import styles from './loader.module.css';

const Loader: FC = () => {
  return (
    <>
      <div className={styles.container}>
        <Oval
          ariaLabel="loading-indicator"
          height={220}
          width={220}
          strokeWidth={3}
          color="#E96A41"
          secondaryColor="#70bf5d"
          />
      </div>
      <div className={styles.overlay}></div>
    </>
  );
};

export default Loader;
