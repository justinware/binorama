import { describe, test, expect, beforeEach } from 'vitest';
import { BASE_2, BASE_10, BASE_16 } from '@shared/constants/base';
import { useValueStore } from './value';

const setsSourceSystemTo = (system: string) => `sets sourceSystem to ${system}`;
const setsSourceValueTo = (value: string) => `sets sourceValue to ${value}`;

describe('useValueStore', () => {
  beforeEach(() => {
    useValueStore.setState({ sourceSystem: undefined, sourceValue: undefined });
  });

  test('initial sourceSystem is undefined', () => {

    expect(useValueStore.getState().sourceSystem).toBeUndefined();
  });

  test('initial sourceValue is undefined', () => {

    expect(useValueStore.getState().sourceValue).toBeUndefined();
  });

  describe('updateSourceSystem', () => {
    test(setsSourceSystemTo('BASE_2'), () => {
      useValueStore.getState().updateSourceSystem(BASE_2);

      expect(useValueStore.getState().sourceSystem).toBe(BASE_2);
    });

    test(setsSourceSystemTo('BASE_10'), () => {
      useValueStore.getState().updateSourceSystem(BASE_10);

      expect(useValueStore.getState().sourceSystem).toBe(BASE_10);
    });

    test(setsSourceSystemTo('BASE_16'), () => {
      useValueStore.getState().updateSourceSystem(BASE_16);

      expect(useValueStore.getState().sourceSystem).toBe(BASE_16);
    });

    test(setsSourceSystemTo('undefined'), () => {
      useValueStore.setState({ sourceSystem: BASE_10 });
      useValueStore.getState().updateSourceSystem(undefined);

      expect(useValueStore.getState().sourceSystem).toBeUndefined();
    });
  });

  describe('updateSourceValue', () => {
    test(setsSourceValueTo('101'), () => {
      useValueStore.getState().updateSourceValue('101');

      expect(useValueStore.getState().sourceValue).toBe('101');
    });

    test(setsSourceValueTo('FF'), () => {
      useValueStore.getState().updateSourceValue('FF');

      expect(useValueStore.getState().sourceValue).toBe('FF');
    });

    test(setsSourceValueTo('undefined'), () => {
      useValueStore.setState({ sourceValue: '123' });
      useValueStore.getState().updateSourceValue(undefined);

      expect(useValueStore.getState().sourceValue).toBeUndefined();
    });
  });
});
