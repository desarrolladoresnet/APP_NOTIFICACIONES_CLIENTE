import { RequestParamsForm } from "../../components/requestParamsForm";
import { RequestParams, useBdvStore } from "../../zustand";
import { FetchPaymentsBDV } from "../../components/bdv/fetchPaymentsBdv"; 
import { BDVPaymentsList } from "../../components/bdv/BDVPaymentsList";

export const BdvPage = () => {
  const { BDVPayments } = useBdvStore()
  const handleSubmit = (params: RequestParams) => {
    console.log("Parámetros enviados:", params);
    FetchPaymentsBDV(params);
  };

  return (
    <section>
      <div>
        <h2>BDV</h2>
        <RequestParamsForm onSubmit={handleSubmit} />
        <BDVPaymentsList payments={BDVPayments} />
      </div>
    </section>
  );
};
