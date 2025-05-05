import { RequestParamsForm } from "../../components/requestParamsForm";
import { RequestParams } from "../../zustand";
import { FetchPaymentsBDV } from "../../components/bdv/fetchPaymentsBdv"; 

export const BdvPage = () => {
  const handleSubmit = (params: RequestParams) => {
    console.log("Parámetros enviados:", params);
    FetchPaymentsBDV(params);
  };

  return (
    <section>
      <div>
        <h2>BDV</h2>
        <RequestParamsForm onSubmit={handleSubmit} />
      </div>
    </section>
  );
};
