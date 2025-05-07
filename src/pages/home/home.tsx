import React from 'react';
import './home.css'; // Asegúrate de importar el archivo CSS que contiene los estilos

export const HomePage: React.FC = () => {
  return (
    <section className="home-container">
      <header className="home-header">
        <h1 className="home-title">Notificaciones Bancarias - Netcom Plus</h1>
        <p className="home-subtitle">Sistema de consulta de pagos y transacciones bancarias</p>
      </header>

      <div className="home-content">
        <div className="home-section">
          <h2 className="section-title">
            <span className="icon">📋</span> Índice
          </h2>
          <nav className="index-nav">
            <ul className="index-list">
              <li className="index-item">
                <a href="#bancos-disponibles" className="index-link">
                  <span className="icon">🏦</span> Bancos Disponibles
                </a>
              </li>
              <li className="index-item">
                <a href="#instrucciones" className="index-link">
                  <span className="icon">📝</span> Instrucciones
                </a>
              </li>
              <li className="index-item">
                <a href="#busquedas" className="index-link">
                  <span className="icon">🔍</span> Tipos de Búsqueda
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div id="bancos-disponibles" className="home-section">
          <h2 className="section-title">
            <span className="icon">🏦</span> Bancos Disponibles
          </h2>
          <div className="banks-grid">
            <div className="bank-card">
              <h3 className="bank-name">Bancaribe</h3>
              <p className="bank-description">Consulta pagos y transferencias</p>
              <a href="/bancaribe" className="bank-link">Acceder →</a>
            </div>
            <div className="bank-card">
              <h3 className="bank-name">Banco de Venezuela (BDV)</h3>
              <p className="bank-description">Consulta pagos Pago Móvil y transferencias</p>
              <a href="/bdv" className="bank-link">Acceder →</a>
            </div>
          </div>
        </div>

        <div id="instrucciones" className="home-section">
          <h2 className="section-title">
            <span className="icon">📝</span> Instrucciones Generales
          </h2>
          <div className="instructions-container">
            <div className="instruction-card">
              <h3 className="instruction-title">Navegación</h3>
              <p>Seleccione el banco que desea consultar desde la sección de Bancos Disponibles.</p>
            </div>
            <div className="instruction-card">
              <h3 className="instruction-title">Visualización</h3>
              <p>Los resultados se muestran en formato de tabla con los campos más relevantes.</p>
            </div>
          </div>
        </div>

        <div id="busquedas" className="home-section">
          <h2 className="section-title">
            <span className="icon">🔍</span> Búsquedas Avanzadas
          </h2>
          <div className="search-info">
            <h3 className="search-subtitle">Características del sistema:</h3>
            <ul className="feature-list">
              <li>Paginación automática (100 registros por página)</li>
              <li>Ordenado desde la transacción más antigua a la más reciente</li>
              <li>Indicador de página actual y total de páginas</li>
            </ul>

            <h3 className="search-subtitle">Filtros disponibles:</h3>
            <div className="filters-grid">
              <div className="filter-card">
                <h4>Fecha exacta</h4>
                <p>Formato: DD/MM/AAAA</p>
              </div>
              <div className="filter-card">
                <h4>Referencia (aproximada)</h4>
                <p>Coincidencias parciales</p>
              </div>
              <div className="filter-card">
                <h4>Cédula (aproximada)</h4>
                <p>Coincidencias parciales</p>
              </div>
              <div className="filter-card">
                <h4>Teléfono (aproximado)</h4>
                <p>Coincidencias parciales</p>
              </div>
            </div>

            <div className="search-tip">
              <p>
                <strong>Tip:</strong> Puedes combinar múltiples filtros para afinar tu búsqueda.
                Las búsquedas marcadas como "aproximadas" no requieren coincidencia exacta.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
