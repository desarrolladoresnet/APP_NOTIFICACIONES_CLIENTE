import React from 'react';
import { BDVPaymentData } from '../../zustand';

interface BDVPaymentsListProps {
  payments: BDVPaymentData[];
  success: boolean;
}

export const BDVPaymentsList: React.FC<BDVPaymentsListProps> = ({ payments, success }) => {
  if (payments.length === 0) {
    return (
      <div style={{
        padding: '15px',
        margin: '15px 0',
        backgroundColor: '#e8f4f8',
        border: '1px solid #d1e7f0',
        borderRadius: '5px',
        color: '#0c5460',
        textAlign: 'center'
      }}>
        No hay pagos disponibles
      </div>
    );
  }

  return (
    <>
      {success ? (
        <div style={{
          borderRadius: '8px',
          overflow: 'hidden',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
          marginBottom: '20px'
        }}>
          <div style={{
            backgroundColor: '#007bff',
            color: 'white',
            padding: '15px 20px',
            fontSize: '18px',
            fontWeight: 'bold'
          }}>
            Lista de Pagos
          </div>
          <div>
            <div style={{ overflowX: 'auto' }}>
              <table style={{
                width: '100%',
                borderCollapse: 'collapse',
                fontSize: '14px'
              }}>
                <thead style={{ backgroundColor: '#f8f9fa' }}>
                  <tr style={{ borderBottom: '2px solid #dee2e6' }}>
                    <th style={{ padding: '12px 15px', textAlign: 'left', color: '#007bff' }}>Banco Origen</th>
                    <th style={{ padding: '12px 15px', textAlign: 'left', color: '#007bff' }}>Referencia</th>
                    <th style={{ padding: '12px 15px', textAlign: 'left', color: '#007bff' }}>ID Cliente</th>
                    <th style={{ padding: '12px 15px', textAlign: 'left', color: '#007bff' }}>N° Cliente</th>
                    <th style={{ padding: '12px 15px', textAlign: 'left', color: '#007bff' }}>ID Comercio</th>
                    <th style={{ padding: '12px 15px', textAlign: 'left', color: '#007bff' }}>N° Comercio</th>
                    <th style={{ padding: '12px 15px', textAlign: 'left', color: '#007bff' }}>Fecha Banco</th>
                    <th style={{ padding: '12px 15px', textAlign: 'left', color: '#007bff' }}>Hora Banco</th>
                    <th style={{ padding: '12px 15px', textAlign: 'left', color: '#007bff' }}>Monto</th>
                  </tr>
                </thead>
                <tbody>
                  {payments.map((payment, index) => (
                    <tr 
                      key={index} 
                      style={{ 
                        backgroundColor: index % 2 === 0 ? '#f8f9fa' : 'white',
                        borderBottom: '1px solid #dee2e6'
                      }}
                    >
                      <td style={{ padding: '12px 15px' }}>{payment.banco_origen}</td>
                      <td style={{ padding: '12px 15px' }}>{payment.referencia_origen}</td>
                      <td style={{ padding: '12px 15px' }}>{payment.id_cliente}</td>
                      <td style={{ padding: '12px 15px' }}>{payment.numero_cliente}</td>
                      <td style={{ padding: '12px 15px' }}>{payment.id_comercio}</td>
                      <td style={{ padding: '12px 15px' }}>{payment.numero_comercio}</td>
                      <td style={{ padding: '12px 15px' }}>{payment.fecha_banco}</td>
                      <td style={{ padding: '12px 15px' }}>{payment.hora_banco}</td>
                      <td style={{ 
                        padding: '12px 15px', 
                        fontWeight: 'bold', 
                        color: '#28a745' 
                      }}>
                        {typeof payment.monto === 'number' ? payment.monto.toFixed(2) : payment.monto}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : null}

      {!success && success !== null ? (
        <div style={{
          padding: '15px',
          margin: '15px 0',
          backgroundColor: '#f8d7da',
          border: '1px solid #f5c6cb',
          borderRadius: '5px',
          color: '#721c24',
          textAlign: 'center'
        }}>
          No se pudo obtener los pagos
        </div>
      ) : null}
    </>
  );
};