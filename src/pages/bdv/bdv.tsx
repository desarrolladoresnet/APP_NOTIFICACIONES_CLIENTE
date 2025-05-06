import { RequestParamsForm } from "../../components/requestParamsForm";
import { RequestParams, useBdvStore } from "../../zustand";
import { FetchPaymentsBDV } from "../../components/bdv/fetchPaymentsBdv"; 
import { BDVPaymentsList } from "../../components/bdv/BDVPaymentsList";

export const BdvPage = () => {
  const { BDVPayments, pagination, success } = useBdvStore()
  const handleSubmit = (params: RequestParams) => {
    console.log("Parámetros enviados:", params);
    FetchPaymentsBDV(params);
  };


  const handlePageChange = (page: number) => {
      FetchPaymentsBDV({ pagina: page });
  };

  return (
    <section>
      <div>
        <h2>BDV</h2>
        <RequestParamsForm 
                    onSubmit={handleSubmit}
                    onPageChange={handlePageChange}
                    pagination={pagination}
                    initialValues={{ pagina: pagination?.current_page || 1 }}
                />
        <BDVPaymentsList 
          payments={BDVPayments} 
          success={success}
          />
      </div>
    </section>
  );
};
