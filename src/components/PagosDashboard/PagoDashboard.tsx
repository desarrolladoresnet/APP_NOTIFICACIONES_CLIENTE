import { useState, useEffect } from 'react';
import { usePagoStore } from '../../zustand/zustand';
import { PagoViewer } from '../PagoViewer/PagoViewer';
import { BancoType, Pago } from '../../zustand/pagos';

export const PagoDashboard = ({ bancoActivo }: { bancoActivo: BancoType }) => {
  const { pagos, loading, error, getPagosByTipo, getPagosGenericos } = usePagoStore();
  const [currentPagos, setCurrentPagos] = useState<Pago[]>([]);

  useEffect(() => {
    if (bancoActivo === 'general') {
      setCurrentPagos(getPagosGenericos());
    } else {
      setCurrentPagos(getPagosByTipo(bancoActivo));
    }
  }, [bancoActivo, pagos]);

  return (
    <div className="pago-dashboard">
      {loading && <div>Cargando pagos...</div>}
      {error && <div className="error">{error}</div>}

      <div className="pago-list">
        {currentPagos.map(pago => (
          <PagoViewer 
            key={getPagoKey(pago)} 
            pago={pago} 
          />
        ))}
      </div>
    </div>
  );
};

function getPagoKey(pago: Pago): string {
  switch(pago.tipo) {
    case 'generico': return pago.referencia;
    case 'banesco': return pago.reference_number;
    case 'bancaribe': return pago.codigo_confirmacion.toString();
    case 'bdv': return pago.reference_number;
    default: return '';
  }
}