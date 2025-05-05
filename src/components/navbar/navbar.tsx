import { usePagesStore } from "../../zustand";

export const Navbar = () => {

  // Usamos el pageStore para la navegación
  const { home, bdv, bancaribe, pageSelection } = usePagesStore();

  return (
    <nav className="navigation">
      <ul>
        <li>
          <button 
            className={home ? 'active' : ''}
            onClick={() => pageSelection('home')}
          >
            Home
          </button>
        </li>
        <li>
          <button 
            className={bdv ? 'active' : ''}
            onClick={() => pageSelection('bdv')}
          >
            BDV
          </button>
        </li>
        <li>
          <button 
            className={bancaribe ? 'active' : ''}
            onClick={() => pageSelection('bancaribe')}
          >
            Bancaribe
          </button>
        </li>
      </ul>
    </nav>
  )
}
