import styles from './navigation.module.css';

const { navigationRoot } = styles;

export const Navigation = () => {
  return (
    <div
      id="navigation"
      className={`flex items-center font-bold text-xl underline ${navigationRoot}`}
    >
      Navigation
    </div>
  );
};
