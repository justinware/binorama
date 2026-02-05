import { describe, test, expect, beforeEach } from 'vitest';
import { BASE_2, BASE_10, BASE_16 } from '@shared/constants/base';
import type { NumeralSystemType } from '@shared/types/base';
import { DEFAULT_SYSTEM_ORDER, useLayoutStore } from './layout';

const BASE_2_TEXT = 'BASE_2';
const BASE_10_TEXT = 'BASE_10';
const BASE_16_TEXT ='BASE_16';

const setsSystemOrderTo = (order: string) => `sets systemOrder to ${order}`;

describe('useLayoutStore', () => {
  beforeEach(() => {
    useLayoutStore.setState({ systemOrder: DEFAULT_SYSTEM_ORDER });
  });

  test(`initial systemOrder is [${BASE_10_TEXT}, ${BASE_16_TEXT}, ${BASE_2_TEXT}]`, () => {

    expect(useLayoutStore.getState().systemOrder).toEqual([BASE_10, BASE_16, BASE_2] as NumeralSystemType[]);
  });

  describe('updateSystemOrder', () => {
    test(setsSystemOrderTo(`[${BASE_2_TEXT}, ${BASE_10_TEXT}, ${BASE_16_TEXT}]`), () => {
      const newOrder = [BASE_2, BASE_10, BASE_16] as NumeralSystemType[];
      useLayoutStore.getState().updateSystemOrder(newOrder);

      expect(useLayoutStore.getState().systemOrder).toEqual(newOrder);
    });

    test(setsSystemOrderTo(`[${BASE_16_TEXT}, ${BASE_10_TEXT}, ${BASE_2_TEXT}]`), () => {
      const newOrder = [BASE_16, BASE_10, BASE_2] as NumeralSystemType[];
      useLayoutStore.getState().updateSystemOrder(newOrder);

      expect(useLayoutStore.getState().systemOrder).toEqual(newOrder);
    });
  });
});
