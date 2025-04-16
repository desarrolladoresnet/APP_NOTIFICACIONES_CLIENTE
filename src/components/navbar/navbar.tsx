import { BankSelector } from "../../App";
import { ButtonComponent } from "../button-component";
import './navbar.css';

interface NavBarProps {
  bank: BankSelector;
  setBank: React.Dispatch<React.SetStateAction<BankSelector>>;
}

export const NavBar = ({ bank, setBank }: NavBarProps) => {
  const handleBankSelect = (selectedBank: keyof BankSelector) => {
    setBank(prev => {
      const newState = { ...prev };
      Object.keys(newState).forEach(key => {
        newState[key as keyof BankSelector] = false;
      });
      newState[selectedBank] = true;
      return newState;
    });
  };

  return (
    <nav className="navbar">
      {(Object.keys(bank) as Array<keyof BankSelector>).map(bankKey => (
        <ButtonComponent
          key={bankKey}
          name={bankKey.toUpperCase()}
          onClick={() => handleBankSelect(bankKey)}
          style={{
            backgroundColor: bank[bankKey] ? '#2c3e50' : '#ecf0f1',
            color: bank[bankKey] ? 'white' : '#2c3e50'
          }}
        />
      ))}
    </nav>
  );
};