interface BtnProps {
    name: string;
    style: React.CSSProperties;
    onClick: () => void;
}


export const ButtonComponent: React.FC<BtnProps> = ({ name, style, onClick }) => {
    return (
        <button 
            style={style} 
            onClick={onClick}
        >
            {name}
        </button>
    );
};
