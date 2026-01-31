import systems from '@shared/systems';
import { useLayoutStore } from '../store/layout';
import { BaseView } from './baseView';
import { Navigation } from './navigation';
import styles from './shell.module.css';

const { shellRoot, mainLayout } = styles;

export const Shell = () => {
  const systemOrder = useLayoutStore(state => state.systemOrder);
  const sortedSystems = [...systems].sort(
    (a, b) => systemOrder.indexOf(a.type) - systemOrder.indexOf(b.type)
  );

  return (
    <div id="shell" className={shellRoot}>
      <Navigation />
      <div className={mainLayout}>
        {sortedSystems.map(system => (
          <BaseView key={system.type} {...system} />
        ))}
      </div>
    </div>
  );
};
