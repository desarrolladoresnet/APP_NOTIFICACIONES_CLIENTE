import { useBdvStore, RequestParams, ZustandRequest, Banks } from '../../zustand';

export const FetchPaymentsBDV = async (params: RequestParams) => {
    const { setLoading, setBDVData, setError } = useBdvStore.getState();
    setLoading(true);
    console.log("Parametros FetchPaymentsBDV", params )
    try {
        const response = await ZustandRequest(params, Banks.bdv);
        setBDVData(response);
    } catch (error) {
        setError(error instanceof Error ? error.message : String(error));
        console.log(error)
    } finally {
        setLoading(false);
    }
};
