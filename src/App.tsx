import { Navbar } from "./components/navbar/navbar";
import { usePagesStore } from "./zustand";
import { BancaribePage, BdvPage, HomePage } from "./pages";

// interface PageSelector {
//   home: boolean;
//   bdv: boolean;
//   bancaribe: boolean;
// }

function App() {

  const { home, bdv, bancaribe } = usePagesStore();


  const renderCurrentPage = () => {
    if (home) return <HomePage />;
    if (bdv) return <BdvPage />;
    if (bancaribe) return <BancaribePage />;
    return <HomePage />; // Fallback
  };

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <main>
          {renderCurrentPage()}
        </main>
      </main>
    </>
  );
}

export default App;