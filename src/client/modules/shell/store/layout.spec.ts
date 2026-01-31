import { describe, test, expect, beforeEach } from 'vitest';
import { BASE_2, BASE_10, BASE_16 } from '@shared/constants/base';
import type { NumeralSystemType } from '@shared/types/base';
import { DEFAULT_SYSTEM_ORDER, useLayoutStore } from './layout';

const setsSystemOrderTo = (order: string) => `sets systemOrder to ${order}`;

describe('useLayoutStore', () => {
  beforeEach(() => {
    useLayoutStore.setState({ systemOrder: DEFAULT_SYSTEM_ORDER });
  });

  test('initial systemOrder is [BASE_10, BASE_2, BASE_16]', () => {

    expect(useLayoutStore.getState().systemOrder).toEqual([BASE_10, BASE_2, BASE_16] as NumeralSystemType[]);
  });

  describe('setSystemOrder', () => {
    test(setsSystemOrderTo('[BASE_2, BASE_10, BASE_16]'), () => {
      const newOrder = [BASE_2, BASE_10, BASE_16] as NumeralSystemType[];
      useLayoutStore.getState().setSystemOrder(newOrder);

      expect(useLayoutStore.getState().systemOrder).toEqual(newOrder);
    });

    test(setsSystemOrderTo('[BASE_16, BASE_10, BASE_2]'), () => {
      const newOrder = [BASE_16, BASE_10, BASE_2] as NumeralSystemType[];
      useLayoutStore.getState().setSystemOrder(newOrder);

      expect(useLayoutStore.getState().systemOrder).toEqual(newOrder);
    });
  });
});
