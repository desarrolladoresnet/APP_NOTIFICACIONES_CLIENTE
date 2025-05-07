import { RequestParamsForm } from "../../components/requestParamsForm";
import { RequestParams, useBdvStore } from "../../zustand";
import { FetchPaymentsBDV } from "../../components/bdv/fetchPaymentsBdv"; 
import { BDVPaymentsList } from "../../components/bdv/BDVPaymentsList";
import { BankLogo } from "../../components/banklogo/BankLogo";
import BDVLOGO from '../../assets/BDV.png'

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
      <BankLogo 
          logo={BDVLOGO} 
          altText="Banco de Venezuela"
          // onClick={() => console.log('Logo clicked')}
        />
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
