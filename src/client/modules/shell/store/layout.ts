import { create } from 'zustand';
import { BASE_2, BASE_10, BASE_16 } from '@shared/constants/base';
import type { NumeralSystemType } from '@shared/types/base';

interface LayoutState {
  systemOrder: NumeralSystemType[];
  updateSystemOrder: (order: NumeralSystemType[]) => void;
}

export const DEFAULT_SYSTEM_ORDER: NumeralSystemType[] = [BASE_10, BASE_16, BASE_2];

export const useLayoutStore = create<LayoutState>(set => ({
  systemOrder: DEFAULT_SYSTEM_ORDER,
  updateSystemOrder: order => set({ systemOrder: order })
}));
