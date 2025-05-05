import { create } from 'zustand'

type PagesStore = {
    // Estados de páginas
    home: boolean;
    bdv: boolean;
    bancaribe: boolean;
    
    // Métodos para cambiar los estados
    setHome: (value: boolean) => void;
    setBdv: (value: boolean) => void;
    setBancaribe: (value: boolean) => void;
    
    // Método para seleccionar una página (desactivando las demás)
    pageSelection: (page: 'home' | 'bdv' | 'bancaribe') => void;
}


export const usePagesStore = create<PagesStore>((set) => ({
    // Estados iniciales
    home: true,
    bdv: false,
    bancaribe: false,
    
    // Métodos para cambiar estados individuales
    setHome: (value: boolean) => set({ home: value }),
    setBdv: (value: boolean) => set({ bdv: value }),
    setBancaribe: (value: boolean) => set({ bancaribe: value }),
    
    // Método para activar solo una página y desactivar las demás
    pageSelection: (page: 'home' | 'bdv' | 'bancaribe') => set({
        home: page === 'home',
        bdv: page === 'bdv',
        bancaribe: page === 'bancaribe'
    })
}))