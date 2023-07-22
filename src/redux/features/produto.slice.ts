import {createSlice} from "@reduxjs/toolkit";

interface Produto {
    nome: string;
    preco: number;
    estoque: number;
}

interface ProdutosState {
    produtos: Array<Produto>;
}

const initialState: ProdutosState = {
    produtos: [
        {
            preco: 1.90,
            nome: 'Sabonete',
            estoque: 10,
        },
        {
            preco: 2.90,
            nome: 'Shampoo',
            estoque: 15,
        }
    ]
}

const produtoSlice = createSlice({
    name: 'produtoSlice',
    initialState: initialState,
    reducers: {
        addProduto(state, action) {
            state.produtos.push(action.payload);
        }
    }
});

export const {addProduto} = produtoSlice.actions;
export default produtoSlice.reducer;