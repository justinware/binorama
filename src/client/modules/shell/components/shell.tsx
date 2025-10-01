import { BaseView } from './baseView';
import { Navigation } from './navigation';
import styles from './shell.module.css';

const { shellRoot, mainLayout } = styles;

export const Shell = () => {
  return (
    <div id="shell" className={shellRoot}>
      <Navigation />
      <div className={mainLayout}>{/* <BaseView /> */}</div>
    </div>
  );
};
