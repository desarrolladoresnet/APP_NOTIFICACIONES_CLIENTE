import React, { useState } from 'react';
import { RequestParams } from '../zustand';

interface RequestParamsFormProps {
    initialValues?: RequestParams;
    onSubmit: (params: RequestParams) => void;
}

export const RequestParamsForm: React.FC<RequestParamsFormProps> = ({
    initialValues = {
        referencia: null,
        fecha: null,
        telefono_cliente: null,
        id_cliente: null,
        pagina: null,
    },
    onSubmit,
}) => {
    const [params, setParams] = useState<RequestParams>(initialValues);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setParams((prev) => ({
            ...prev,
            [name]: value === '' ? null : value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(params);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Referencia:</label>
                <input
                    type="text"
                    name="referencia"
                    value={params.referencia ?? ''}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Fecha:</label>
                <input
                    type="date"
                    name="fecha"
                    value={params.fecha ?? ''}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Teléfono Cliente:</label>
                <input
                    type="text"
                    name="telefono_cliente"
                    value={params.telefono_cliente ?? ''}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>ID Cliente:</label>
                <input
                    type="text"
                    name="id_cliente"
                    value={params.id_cliente ?? ''}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Página:</label>
                <input
                    type="number"
                    name="pagina"
                    value={params.pagina ?? ''}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Enviar</button>
        </form>
    );
};
