import { ArrowLeftRight } from 'lucide-react';
import systems from '@shared/systems';
import { useLayoutStore } from '../store/layout';
import { BaseView } from './baseView';
import { Navigation } from './navigation';
import styles from './shell.module.css';

const { shellRoot, mainLayout, swapColumnsButton } = styles;

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

  return (
    <div id="shell" className={shellRoot}>
      <Navigation />
      <div className={mainLayout}>
        {sortedSystems.map(system => (
          <BaseView key={system.type} {...system} />
        ))}
        <button className={swapColumnsButton} onClick={() => swapColumns(0, 1)}>
          <ArrowLeftRight size={SWAP_COLUMN_ICON_SIZE} />
        </button>
        <button className={swapColumnsButton} onClick={() => swapColumns(1, 2)}>
          <ArrowLeftRight size={SWAP_COLUMN_ICON_SIZE} />
        </button>
      </div>
    </div>
  );
};
