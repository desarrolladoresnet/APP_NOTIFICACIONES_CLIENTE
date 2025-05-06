import { create } from 'zustand';
import { Pagination } from './pagination';

export type BancaribePaymentData = {
    id: number;
    amount: number;
    bank_name: string;
    client_phone: string;
    commerce_phone: string;
    creditor_account: string;
    currency_code: string;
    date_bancaribe: string;
    date: string;
    debtor_id: string;
    destiny_bank_reference: string;
    origin_bank_code: string;
    origin_bank_reference: string;
    payment_type: string;
    time_bancaribe: string;
    time: string;
}

type BancaribeResponse = {
    data: BancaribePaymentData[];
    message: string;
    pagination: Pagination;
    success: boolean;
}

type BancaribeStore = {
    BancaribePayments: BancaribePaymentData[];
    pagination: Pagination | null;
    message: string;
    success: boolean;
    loading: boolean;
    error: string | null;
    setBancaribeData: (response: BancaribeResponse) => void;
    setBancaribeLoading: (loading: boolean) => void;
    setBancaribeError: (error: string | null) => void;
    clearBancaribeData: () => void;
}

export const useBancaribeStore = create<BancaribeStore>((set) => ({
    BancaribePayments: [],
    pagination: null,
    message: '',
    success: false,
    loading: false,
    error: null,
    setBancaribeData: (response) => set({
        BancaribePayments: response.data,
        pagination: response.pagination,
        message: response.message,
        success: response.success,
        loading: false,
        error: null,
    }),
    setBancaribeLoading: (loading) => set({ loading }),
    setBancaribeError: (error) => set({ error, loading: false }),
    clearBancaribeData: () => set({
        BancaribePayments: [],
        pagination: null,
        message: '',
        success: false,
        error: null,
        loading: false,
    }),
}));