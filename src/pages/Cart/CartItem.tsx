import Produto from "../../models/Product";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";
import { IoIosAdd } from "react-icons/io";
import { IoRemoveOutline } from "react-icons/io5";

interface CardProdutoProps {
  produto: Produto;
}

function CartItem({ produto }: CardProdutoProps) {
  const { adicionarProduto, removerProduto } = useContext(AuthContext);

  return (
    <div className="border-slate-900 shadow-md bg-white-gray border-solid border flex flex-col rounded overflow-hidden justify-between w-screen max-w-xl">
      <div>
        <div className="flex w-full items-center gap-4"></div>
        <div className="">
          <h4 className="text-lg font-bold text-new-dark-gray uppercase pt-2 pr-2 pb-0 pl-2">
            {produto.nome}
          </h4>
          <div className="pt-0 pr-2 pb-0 pl-2 text-new-dark-gray">
            Vendido por {produto.usuario?.nome}
            <hr className="text-gray" />
            <p className="text-battleship-gray text-base">
              {" "}
              {produto.descricao}{" "}
            </p>
            <img src={produto.foto} className="h-12 rounded-full" alt="" />
            <div className=" flex font-semibold text-lg h-1/4 flex right-0 pb-0 mb-0 bottom-0 align-center pl-1 text-new-dark-gray">
              R$: {produto.preco},00
            </div>
          </div>
        </div>
      </div>
      <div className="border-slate-900 border text-lg right-0 flex w-1/5 m-0 h-full align-center justify-center text-white-new rounded ml-1 bg-new-dark-gray">
        <button className="pr-2" onClick={() => removerProduto(produto.id)}>
          <IoRemoveOutline size={20} />
        </button>

        <button className="pl-2" onClick={() => adicionarProduto(produto)}>
          <IoIosAdd size={20} />
        </button>
      </div>
      <p className="mb-1 text-new-dark-gray ml-5 p-0 text-xs font-thin">
        {" "}
        +{produto.quantidade} disponíveis
      </p>
    </div>
  );
}
export default CartItem;
