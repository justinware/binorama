import { ArrowLeftRight } from 'lucide-react';
import systems from '@shared/systems';
import { useLayoutStore } from '../store/layout';
import { BaseView } from './baseView';
import { Navigation } from './navigation';
import styles from './shell.module.css';

const { shellRoot, mainLayout, systemDivider, swapColumnsButton, border } = styles;

const SWAP_COLUMN_ICON_SIZE = 24;

export const Shell = () => {
  const systemOrder = useLayoutStore(state => state.systemOrder);
  const updateSystemOrder = useLayoutStore(state => state.updateSystemOrder);

  const sortedSystems = [...systems].sort(
    (a, b) => systemOrder.indexOf(a.type) - systemOrder.indexOf(b.type)
  );

  const swapColumns = (indexA: number, indexB: number) => {
    const newOrder = [...systemOrder];
    [newOrder[indexA], newOrder[indexB]] = [newOrder[indexB], newOrder[indexA]];
    updateSystemOrder(newOrder);
  };

  const getDivider = (index: number) => (
    <div className={systemDivider}>
      <div className={border} />
      <button className={swapColumnsButton} onClick={() => swapColumns(index, index + 1)}>
        <ArrowLeftRight size={SWAP_COLUMN_ICON_SIZE} />
      </button>
      <div className={border} />
    </div>
  );

  return (
    <div id="shell" className={shellRoot}>
      <Navigation />
      <main className={mainLayout}>
        {sortedSystems.map(system => (
          <BaseView key={system.type} {...system} />
        ))}
        {getDivider(0)}
        {getDivider(1)}
      </main>
    </div>
  );
};
