import { BaseView } from './baseView';
import { Navigation } from './navigation';
import styles from './shell.module.css';

const { shellRoot, shellLayout, contextLayout } = styles;

export const Shell = () => {

  return (
    <div id="shell" className={shellRoot}>
      <div className={shellLayout}>
        <Navigation />
        <div className={contextLayout}>
          <BaseView />
        </div>
      </div>
    </div>
  );
}
