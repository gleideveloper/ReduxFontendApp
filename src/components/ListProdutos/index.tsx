import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";

export default function Index() {
    const produto = useSelector((state: RootState) => state.produto);
    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th>Nome</th>
                    <th>Preço</th>
                    <th>Estoque</th>
                </tr>
                </thead>
                <tbody>
                {produto.produtos.map((produto) => {
                    return (
                        <tr>
                            <th>{produto.nome}</th>
                            <th>{produto.preco}</th>
                            <th>{produto.estoque}</th>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
    )
}