import { ArrowLeftRight, Bot, Heart } from 'lucide-react';
import { Container, IconButton } from '@radix-ui/themes';
import systems from '@shared/systems';
import { useLayoutStore } from '../store/layout';
import { BaseView } from './baseView';
import { Navigation } from './navigation';
import styles from './shell.module.css';

const { shellRoot, shellContainer, systemDivider, border } = styles;

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
      <IconButton variant="ghost" onClick={() => swapColumns(index, index + 1)}>
        <ArrowLeftRight size={SWAP_COLUMN_ICON_SIZE} />
      </IconButton>
      <div className={border} />
    </div>
  );

  return (
    <div id="shell" className={shellRoot}>
      <Navigation />
      <Container className={shellContainer}>
        <main>
          <BaseView key={sortedSystems[0].type} {...sortedSystems[0]} position={0} />
          {getDivider(0)}
          <BaseView key={sortedSystems[1].type} {...sortedSystems[1]} position={1} />
          {getDivider(1)}
          <BaseView key={sortedSystems[2].type} {...sortedSystems[2]} position={2} />
        </main>
      </Container>
      <footer>
        Made with <Heart size={16} /> and <Bot size={16} /> by Justin
      </footer>
    </div>
  );
};
