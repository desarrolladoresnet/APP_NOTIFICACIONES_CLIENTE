import React, { useState, useEffect } from 'react';
import { RequestParams } from '../zustand';
import { Pagination } from '../zustand/pagination';
import './requestParamForm.css';

interface RequestParamsFormProps {
    initialValues?: RequestParams;
    pagination?: Pagination | null;
    onSubmit: (params: RequestParams) => void;
    onPageChange: (page: number) => void;
    bankTheme?: 'default' | 'bdv' | 'bancaribe'; // Nueva prop para el tema del banco
}

export const RequestParamsForm: React.FC<RequestParamsFormProps> = ({
    initialValues = {
        referencia: null,
        fecha: null,
        telefono_cliente: null,
        id_cliente: null,
        pagina: 1,
    },
    pagination,
    onSubmit,
    onPageChange,
    bankTheme = 'default', // Tema por defecto
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
            [name]: value === '' ? null : value.trim(),
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

    // Determinar la clase del tema basado en el banco
    const themeClass = bankTheme === 'default' ? '' : `${bankTheme}-theme`;

    return (
        <div className={`form-container ${themeClass}`}>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Referencia:</label>
                    <input
                        type="text"
                        name="referencia"
                        value={params.referencia ?? ''}
                        onChange={handleChange}
                        placeholder="Número de referencia"
                    />
                </div>
                <div className="form-group">
                    <label>Fecha:</label>
                    <input
                        type="date"
                        name="fecha"
                        value={params.fecha ?? ''}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Teléfono Cliente:</label>
                    <input
                        type="text"
                        name="telefono_cliente"
                        value={params.telefono_cliente ?? ''}
                        onChange={handleChange}
                        placeholder="Ej: 04141234567"
                    />
                </div>
                <div className="form-group">
                    <label>ID Cliente:</label>
                    <input
                        type="text"
                        name="id_cliente"
                        value={params.id_cliente ?? ''}
                        onChange={handleChange}
                        placeholder="Cédula o RIF"
                    />
                </div>
                
                <button className="search-button" type="submit">
                    <span className="icon">🔍</span> Buscar
                </button>
            </form>

            {/* Controles de paginación */}
            {pagination && (
                <div className="pagination-controls">
                    <button 
                        className="pagination-button"
                        disabled={pagination.current_page === 1}
                        onClick={() => handlePageChange(pagination.current_page - 1)}
                    >
                        ← Anterior
                    </button>
                    
                    <span className="page-indicator">
                        Página {pagination.current_page} de {pagination.total_pages}
                    </span>
                    
                    <button 
                        className="pagination-button"
                        disabled={pagination.current_page >= pagination.total_pages}
                        onClick={() => handlePageChange(pagination.current_page + 1)}
                    >
                        Siguiente →
                    </button>

                    <div className="pagination-info">
                        <span>Total de registros encontrados: {pagination.total_items}</span>
                    </div>
                </div>
            )}
        </div>
    );
};