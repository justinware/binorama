import styles from './navigation.module.css';

const { navigationRoot } = styles;

export const Navigation = () => {
  return (
    <header id="navigation" className={navigationRoot}>
      <h1>Binorama</h1>
    </header>
  );
};
