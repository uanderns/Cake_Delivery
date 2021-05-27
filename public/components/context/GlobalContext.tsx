import { createContext } from 'react';

export type GlobalContent = {
    totalPrice: number
    setTotalPrice: (p: number) => void
    produtos: number
    setProdutos: (p: number) => void
    alertMsg: string
    setAlertMsg: (a: string) => void
    typeAlert: string
    setTypeAlert: (s: string) => void
    isVisible: boolean
    setIsVisible: (v: boolean) => void
    produtoSelected: boolean
    setProdutoSelected: (p: boolean) => void
    showModalProduto: boolean
    setShowModalProduto: (v: boolean) => void
    showModalEsqueciSenha: boolean
    setShowModalEsqueciSenha: (s: boolean) => void
};

export const MyGlobalContext = createContext<GlobalContent>({
    totalPrice: 0,
    setTotalPrice: () => { },
    produtos: 0,
    setProdutos: () => { },
    alertMsg: "",
    setAlertMsg: () => { },
    typeAlert: '',
    setTypeAlert: () => { },
    isVisible: false,
    setIsVisible: () => { },
    produtoSelected: false,
    setProdutoSelected: () => { },
    showModalProduto: false,
    setShowModalProduto: () => { },
    showModalEsqueciSenha: false,
    setShowModalEsqueciSenha: () => { }
});