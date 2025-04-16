import { useState } from 'react'
import './App.css'
import { NavBar } from './components/navbar/navbar'
import { Bancaribe } from './pages/Bancaribe'
import { Banesco } from './pages/Banesco'
import { Tesoro } from './pages/Tesoro'
import { BDV } from './pages/BDV'
import { General } from './pages/General'

export interface BankSelector {
  general: boolean;
  bancaribe: boolean;
  banesco: boolean;
  tesoro: boolean;
  bdv: boolean;
}

function App() {
  const [bank, setBank] = useState<BankSelector>({
    general: true,
    bdv: false,
    bancaribe: false,
    tesoro: false,
    banesco: false,
  });

  return (
    <>
      <NavBar bank={bank} setBank={setBank} />
      {bank.general && <General />}
      {bank.bdv && <BDV />}
      {bank.banesco && <Banesco />}
      {bank.tesoro && <Tesoro />}
      {bank.bancaribe && <Bancaribe />}
    </>
  );
}

export default App;