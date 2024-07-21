import React from "react";
import { Link } from "react-router-dom";
import Categoria from "../../../models/Category";

interface CardCategoriaProps {
  categoria: Categoria;
}

function CardCategoria({ categoria }: CardCategoriaProps) {
  return (
    <div className="border flex flex-col rounded-1xl overflow-hidden justify-between">
      <header className="p-6 bg-blue-200 text-center font-bold text-4xl">
        {categoria.nome}
      </header>
      <p className="p-8 text-3xl bg-slate-200 h-full">
        <span className="font-bold"> Descrição : </span>
        {categoria.descricao}
      </p>
      <div className="flex">
        <Link
          to={`/editarCategoria/${categoria.id}`}
          className="text-slate-100 bg-dark-orange hover:bg-meddium-orange w-full flex items-center justify-center"
        >
          <button>Editar</button>
        </Link>

        <Link
          to={`/deletarCategoria/${categoria.id}`}
          className="text-slate-100 bg-dark-orange hover:bg-meddium-orange w-full flex items-center justify-center"
        >
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  );
}

export default CardCategoria;
