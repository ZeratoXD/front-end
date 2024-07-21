import React, { useContext } from "react";
import FormularioProduto from "../productForm/ProductForm";
import Popup from 'reactjs-popup';
import "reactjs-popup/dist/index.css";


import "./ModalProduto.css";
import { AuthContext } from "../../../contexts/AuthContext";

function ModalProduto() {
  const { usuario } = useContext(AuthContext);

  let modalProdutoComponent;

  if (usuario.token !== "" && usuario.tipo === "cliente") {
    modalProdutoComponent = <></>;
  } else if (usuario.token !== "" && usuario.tipo === "vendedor") {
    modalProdutoComponent = (
      <>
        <Popup
          trigger={
            <button className="border rounded px-4 hover:bg-white hover:text-indigo-800">
              Novo Produto
            </button>
          }
          modal
        >
          <div>
            <FormularioProduto />
          </div>
        </Popup>
      </>
    );
  }

  return <>{modalProdutoComponent}</>;
}

export default ModalProduto;
