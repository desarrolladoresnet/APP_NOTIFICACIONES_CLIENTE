import React from 'react';
import { BDVPaymentData } from '../../zustand';

interface BDVPaymentsListProps {
    payments: BDVPaymentData[];
}

export const BDVPaymentsList: React.FC<BDVPaymentsListProps> = ({ payments }) => {
    if (payments.length === 0) {
        return <p>No hay pagos disponibles</p>;
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>Banco Origen</th>
                    <th>Referencia</th>
                    <th>ID Cliente</th>
                    <th>N° Cliente</th>
                    <th>ID Comercio</th>
                    <th>N° Comercio</th>
                    <th>Fecha Banco</th>
                    <th>Hora Banco</th>
                    <th>Monto</th>
                </tr>
            </thead>
            <tbody>
                {payments.map((payment, index) => (
                    <tr key={index}>
                        <td>{payment.banco_origen}</td>
                        <td>{payment.referencia_origen}</td>
                        <td>{payment.id_cliente}</td>
                        <td>{payment.numero_cliente}</td>
                        <td>{payment.id_comercio}</td>
                        <td>{payment.numero_comercio}</td>
                        <td>{payment.fecha_transformada || payment.fecha_banco}</td>
                        <td>{payment.hora_transformada || payment.hora_banco}</td>
                        <td>{payment.monto.toFixed(2)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};
