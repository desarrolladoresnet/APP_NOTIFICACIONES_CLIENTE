import { Pago, PagoBancaribe, PagoBanesco, PagoBDV, PagoGenerico } from "../../zustand/pagos";
import './PagoViewer.css';

// Componentes individuales para cada tipo de pago
const PagoBanescoView = ({ pago }: { pago: PagoBanesco }) => (
  <div className="pago-card banesco">
    <h3>Pago Banesco: {pago.reference_number}</h3>
    {/* Detalles específicos de Banesco */}
  </div>
);

const PagoBancaribeView = ({ pago }: { pago: PagoBancaribe }) => (
  <div className="pago-card bancaribe">
    <h3>Pago Bancaribe: {pago.codigo_confirmacion}</h3>
    {/* Detalles específicos de Bancaribe */}
  </div>
);

const PagoBDVView = ({ pago }: { pago: PagoBDV }) => (
  <div className="pago-card bdv">
    <h3>Pago BDV: {pago.reference_number}</h3>
    {/* Detalles específicos de BDV */}
  </div>
);

const PagoGenericoView = ({ pago }: { pago: PagoGenerico }) => (
  <div className="pago-card generico">
    <h3>Pago Genérico: {pago.referencia}</h3>
    {/* Detalles genéricos */}
  </div>
);

export const PagoViewer = ({ pago }: { pago: Pago }) => {
  switch(pago.tipo) {
    case 'banesco':
      return <PagoBanescoView pago={pago} />;
    case 'bancaribe':
      return <PagoBancaribeView pago={pago} />;
    case 'bdv':
      return <PagoBDVView pago={pago} />;
    case 'generico':
      return <PagoGenericoView pago={pago} />;
    default:
      return null;
  }
};