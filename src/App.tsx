import './App.css';
import ListProdutos from "./components/ListProdutos";
import FormProduto from "./components/FormProduto";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {AppDispatch} from "./redux/store";
import {fetchProdutos} from "./redux/features/produto.slice";

function App() {
    const dispatch = useDispatch<AppDispatch>();
    useEffect(()=>{
        dispatch(fetchProdutos());
    })
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                justifyItems: "center",
            }}
        >
            <div>
                <FormProduto/>
            </div>
            <div style={{width: "50%"}}>
                <ListProdutos/>
            </div>
        </div>
    )
}

export default App;
