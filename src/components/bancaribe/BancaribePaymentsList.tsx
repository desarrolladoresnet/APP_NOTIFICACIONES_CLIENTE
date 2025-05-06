import React from 'react';
import { BancaribePaymentData } from '../../zustand';

interface BancaribePaymentsListProps {
    payments: BancaribePaymentData[];
    success: boolean;
}

export const BancaribePaymentsList: React.FC<BancaribePaymentsListProps> = ({ payments, success }) => {
    if (payments.length === 0) {
        return <p>No hay pagos disponibles</p>;
    }

    return (
        <>
            {success ?
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Banco Origen</th>
                            <th>Referencia Origen</th>
                            <th>Teléfono Cliente</th>
                            <th>Teléfono Comercio</th>
                            <th>Cuenta Acreedor</th>
                            <th>Monto</th>
                            <th>Moneda</th>
                            <th>Fecha Bancaribe</th>
                            <th>Hora Bancaribe</th>
                            <th>Tipo de Pago</th>
                        </tr>
                    </thead>
                    <tbody>
                        {payments.map((payment) => (
                            <tr key={payment.id}>
                                <td>{payment.id}</td>
                                <td>{payment.origin_bank_code} - {payment.bank_name}</td>
                                <td>{payment.origin_bank_reference}</td>
                                <td>{payment.client_phone}</td>
                                <td>{payment.commerce_phone}</td>
                                <td>{payment.creditor_account}</td>
                                <td>{payment.amount.toFixed(2)}</td>
                                <td>{payment.currency_code}</td>
                                <td>{payment.date_bancaribe || payment.date}</td>
                                <td>{payment.time_bancaribe || payment.time}</td>
                                <td>{payment.payment_type}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                :
                null
            }

            {!success && success !== null &&
                <h2>No se pudo obtener los pagos</h2>
            }
        </>
    );
};