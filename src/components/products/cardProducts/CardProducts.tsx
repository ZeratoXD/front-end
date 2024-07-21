import React from "react";
import { Link } from "react-router-dom";
import Produto from "../../../models/Product";
import { AuthContext } from "../../../contexts/AuthContext";
import { useContext } from "react";
import { MdAddShoppingCart } from "react-icons/md";
import { toastAlerta } from "../../../utils/toastAlerta";

interface CardProdutoProps {
  produto: Produto;
}

/*export default interface Produto {
  id: number;
  nome: string;
  validade: Date;
  foto: string;
  descricao: string;
  quantidade: number;
  preco: number;
  categoria: Categoria | null;
} */

function CardProduto({ produto }: CardProdutoProps) {
  const { adicionarProduto, removerProduto } = useContext(AuthContext);

  return (
    <div className="border-slate-900 border flex flex-col rounded overflow-hidden justify-between">
      <div>
        <div className="flex w-full bg-indigo-400 py-2 px-4 items-center gap-4"></div>
        <div className="p-4 ">
          <h4 className="text-lg font-semibold uppercase">
            Produto: {produto.nome}
          </h4>
          <p>Sobre o produto: {produto.descricao}</p>
          <span>Foto:</span>
          <img src={produto.foto} className="h-12 rounded-full" alt="" />
          <p>Quantidade: {produto.quantidade}</p>
          <p>Preço: R$:{produto.preco}</p>
          <p>
            Data de validade:{" "}
            {new Intl.DateTimeFormat(undefined, {
              dateStyle: "full",
              timeStyle: "medium",
            }).format(new Date(produto.validade))}
          </p>
          <img
            src={produto.usuario?.foto}
            className="h-12 rounded-full"
            alt=""
          />
          <p>Vendedor: </p>
          <h3 className="text-lg font-bold text-center uppercase ">
            {produto.usuario?.nome}
          </h3>
        </div>
      </div>
      <div className="flex">
        <button
          className="bg-new-green hover:bg-new-dark-green text-white font-semibold py-2 px-4 rounded mr-5 mb-1"
          onClick={() => adicionarProduto(produto)}
        >
          <MdAddShoppingCart size={28} />
        </button>

        <button
          className="bg-red hover:bg-dark-red text-white-new font-semibold py-2 px-4 rounded mr-2 mb-1"
          onClick={() => removerProduto(produto.id)}
        >
          Remover
        </button>
      </div>
    </div>
  );
}

export default CardProduto;
