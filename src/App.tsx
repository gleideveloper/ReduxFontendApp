import './App.css';
import ListProdutos from "./components/ListProdutos";
import FormProduto from "./components/FormProduto";

function App() {
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
