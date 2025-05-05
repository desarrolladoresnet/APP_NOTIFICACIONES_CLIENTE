import { create } from 'zustand'
import { Pagination } from './pagination';

export type BDVPaymentData = {
    banco_origen: string;
    referencia_origen: string;
    id_cliente: string;
    numero_cliente: string;
    id_comercio: string;
    numero_comercio: string;
    fecha_banco: string;
    fecha_transformada: string;
    hora_banco: string;
    hora_transformada: string;
    monto: number;
}

type BDVResponse = {
    data: BDVPaymentData[];
    message: string;
    pagination: Pagination;
    success: boolean;
}

type BdvStore = {
    BDVPayments: BDVPaymentData[];
    pagination: Pagination | null;
    message: string;
    success: boolean;
    loading: boolean;
    error: string | null;
    setBDVData: (response: BDVResponse) => void;
    setLoading: (loading: boolean) => void;
    setError: (error: string | null) => void;
    clearData: () => void;
}


export const useBdvStore = create<BdvStore>((set) => ({
    BDVPayments: [],
    pagination: null,
    message: '',
    success: false,
    loading: false,
    error: null,
    setBDVData: (response) => set({
        BDVPayments: response.data,
        pagination: response.pagination,
        message: response.message,
        success: response.success,
        loading: false,
        error: null,
    }),
    setLoading: (loading) => set({ loading }),
    setError: (error) => set({ error, loading: false }),
    clearData: () => set({
        BDVPayments: [],
        pagination: null,
        message: '',
        success: false,
        error: null,
        loading: false,
    }),
}));