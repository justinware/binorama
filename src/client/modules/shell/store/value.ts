import { create } from 'zustand';
import type { NumeralSystemType } from '@shared/types/base';

interface ValueState {
  sourceSystem: NumeralSystemType | undefined;
  sourceValue: string | undefined;
  updateSourceSystem: (system: NumeralSystemType | undefined) => void;
  updateSourceValue: (value: string | undefined) => void;
}

export const useValueStore = create<ValueState>((set) => ({
  sourceSystem: undefined,
  sourceValue: undefined,
  updateSourceSystem: (system) => set({ sourceSystem: system }),
  updateSourceValue: (value) => set({ sourceValue: value })
}));
