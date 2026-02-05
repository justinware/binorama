import styles from './navigation.module.css';

const { navigationRoot } = styles;

export const Navigation = () => {
  return (
    <div id="navigation" className={navigationRoot}>
      <h1>Binorama</h1>
    </div>
  );
};
