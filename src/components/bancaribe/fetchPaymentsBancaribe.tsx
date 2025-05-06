import { useBancaribeStore, RequestParams, ZustandRequest, Banks } from '../../zustand';

export const FetchPaymentsBancaribe = async (params: RequestParams) => {
    const { setBancaribeLoading, setBancaribeData, setBancaribeError } = useBancaribeStore.getState();
    setBancaribeLoading(true);
    console.log("Parametros FetchPaymentsBDV", params)
    try {
        const response = await ZustandRequest(params, Banks.bancaribe);
        setBancaribeData(response);
    } catch (error) {
        setBancaribeError(error instanceof Error ? error.message : String(error));
        console.log(error)
    } finally {
        setBancaribeLoading(false);
    }
};
