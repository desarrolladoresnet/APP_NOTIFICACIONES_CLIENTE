import { BancaribePaymentsList } from "../../components/bancaribe/BancaribePaymentsList";
import { FetchPaymentsBancaribe } from "../../components/bancaribe/fetchPaymentsBancaribe";
import { RequestParamsForm } from "../../components/requestParamsForm";
import { RequestParams, useBancaribeStore } from "../../zustand";

export const BancaribePage = () => {
  const { BancaribePayments, pagination, success } = useBancaribeStore()
    const handleSubmit = (params: RequestParams) => {
      console.log("Parámetros enviados:", params);
      FetchPaymentsBancaribe(params);
    };
  
  
    const handlePageChange = (page: number) => {
      FetchPaymentsBancaribe({ pagina: page });
    };
  
    return (
      <section>
        <div>
          <h2>Bancaribe</h2>
          <RequestParamsForm 
                      onSubmit={handleSubmit}
                      onPageChange={handlePageChange}
                      pagination={pagination}
                      initialValues={{ pagina: pagination?.current_page || 1 }}
                  />
          <BancaribePaymentsList 
            payments={BancaribePayments} 
            success={success}
            />
        </div>
      </section>
    );
}