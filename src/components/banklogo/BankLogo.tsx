import React from 'react';

interface BankLogoProps {
  logo: string; // URL o path de la imagen
  altText: string; // Texto alternativo para accesibilidad
  width?: number; // Ancho fijo en píxeles (opcional)
  height?: number; // Alto fijo en píxeles (opcional)
  className?: string; // Clases CSS adicionales
}

export const BankLogo: React.FC<BankLogoProps> = ({ 
  logo, 
  altText, 
  width = 120, 
  height = 40, 
  className = '' 
}) => {
  return (
    <div 
      className={className}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: `${width}px`,
        height: `${height}px`,
        overflow: 'hidden',
        backgroundColor: '#f5f5f5', // Fondo neutro para logos transparentes
      }}
    >
      <img
        src={logo}
        alt={altText}
        style={{
          maxWidth: '100%',
          maxHeight: '100%',
          width: 'auto',
          height: 'auto',
          objectFit: 'contain', // Mantiene aspect ratio sin distorsión
          display: 'block'
        }}
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.onerror = null;
          target.src = `https://via.placeholder.com/${width}x${height}?text=${encodeURIComponent(altText)}`;
          target.style.objectFit = 'cover'; // Mejor ajuste para placeholder
        }}
      />
    </div>
  );
};

// Ejemplo de uso:
/*
<BankLogo 
  logo="/path/to/bank-logo.png" 
  altText="Banco Ejemplo"
  width={150} // Opcional (default: 120)
  height={50} // Opcional (default: 40)
/>
*/