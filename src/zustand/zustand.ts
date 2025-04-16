import { create } from 'zustand';
import { Pago, BancoType, PagoGenerico } from './pagos';

interface PagoState {
  pagos: Pago[];
  loading: boolean;
  error: string | null;
  fetchPagos: (banco?: BancoType) => Promise<void>;
  addPago: (nuevoPago: Pago) => void;
  getPagosByTipo: <T extends BancoType>(tipo: T) => Pago[];
  getPagosGenericos: () => PagoGenerico[];
}

export const usePagoStore = create<PagoState>((set, get) => ({
  pagos: [],
  loading: false,
  error: null,

  fetchPagos: async (banco) => {
    set({ loading: true, error: null });
    try {
      const endpoint = banco === 'general' ? '/api/pagos/' : `/api/pagos/${banco}`;
      const response = await fetch(endpoint);
      const data = await response.json();
      set({ pagos: data });
    } catch (err) {
      set({ error: err instanceof Error ? err.message : 'Error desconocido' });
    } finally {
      set({ loading: false });
    }
  },


  addPago: (nuevoPago) => {
    set(state => ({ pagos: [...state.pagos, nuevoPago] }));
  },

  getPagosByTipo: (tipo) => {
    return get().pagos.filter(p => p.tipo === tipo) as Array<Extract<Pago, { tipo: typeof tipo }>>;
  },

  getPagosGenericos: () => {
    return get().pagos.filter(p => p.tipo === 'generico') as PagoGenerico[];
  }
}));