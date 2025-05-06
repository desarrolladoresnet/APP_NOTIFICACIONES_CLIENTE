import React, { useState, useEffect } from 'react';
import { RequestParams } from '../zustand';
import { Pagination } from '../zustand/pagination';

interface RequestParamsFormProps {
    initialValues?: RequestParams;
    pagination?: Pagination | null ; // Recibimos los datos de paginación
    onSubmit: (params: RequestParams) => void;
    onPageChange: (page: number) => void; // Nueva prop para cambiar de página
}

export const RequestParamsForm: React.FC<RequestParamsFormProps> = ({
    initialValues = {
        referencia: null,
        fecha: null,
        telefono_cliente: null,
        id_cliente: null,
        pagina: 1, // Página por defecto 1
    },
    pagination,
    onSubmit,
    onPageChange,
}) => {
    const [params, setParams] = useState<RequestParams>(initialValues);

    // Actualizamos el estado cuando cambian los initialValues
    useEffect(() => {
        setParams(initialValues);
    }, [initialValues]);

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

    const handlePageChange = (newPage: number) => {
        if (newPage < 1 || (pagination && newPage > pagination.total_pages)) return;
        setParams(prev => ({ ...prev, pagina: newPage }));
        onPageChange(newPage);
    };

    return (
        <div>
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
                
                <button type="submit">Buscar</button>
            </form>

            {/* Controles de paginación */}
            {pagination && (
                <div className="pagination-controls">
                    <button 
                        disabled={pagination.current_page === 1}
                        onClick={() => handlePageChange(pagination.current_page - 1)}
                    >
                        Anterior
                    </button>
                    
                    <span>
                        Página {pagination.current_page} de {pagination.total_pages}
                    </span>
                    
                    <button 
                        disabled={pagination.current_page >= pagination.total_pages}
                        onClick={() => handlePageChange(pagination.current_page + 1)}
                    >
                        Siguiente
                    </button>

                    <div className="pagination-info">
                        <span>Total de registros encontrados: {pagination.total_items}</span>
                    </div>
                </div>
            )}
        </div>
    );
};