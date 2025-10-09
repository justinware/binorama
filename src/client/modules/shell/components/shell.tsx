import base10 from '@shared/systems/base10';
import { BaseView } from './baseView';
import { Navigation } from './navigation';
import styles from './shell.module.css';

import base2 from '@shared/systems/base2';
import base16 from '@shared/systems/base16';

const { shellRoot, mainLayout } = styles;

export const Shell = () => {
  return (
    <div id="shell" className={shellRoot}>
      <Navigation />
      <div className={mainLayout}>
        <BaseView {...base2} position={1} />
        <BaseView {...base10} position={2} />
        <BaseView {...base16} position={3} />
      </div>
    </div>
  );
};
