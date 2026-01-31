import { create } from 'zustand';
import { BASE_2, BASE_10, BASE_16 } from '@shared/constants/base';
import type { NumeralSystemType } from '@shared/types/base';

interface LayoutState {
  systemOrder: NumeralSystemType[];
  setSystemOrder: (order: NumeralSystemType[]) => void;
}

export const DEFAULT_SYSTEM_ORDER: NumeralSystemType[] = [BASE_10, BASE_2, BASE_16];

export const useLayoutStore = create<LayoutState>(set => ({
  systemOrder: DEFAULT_SYSTEM_ORDER,
  setSystemOrder: order => set({ systemOrder: order })
}));
