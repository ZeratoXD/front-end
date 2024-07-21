import React, { useContext, useEffect, useState } from "react";
import { Dna } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import Produto from "../../../models/Product";
import { buscar } from "../../../services/Service";
import CardProduto from "../cardProducts/CardProduto1";
import ModalProduto from "../productModal/ProductModal";
import { toastAlerta } from "../../../utils/toastAlerta";
import Footer from "../../footer/Footer";
import NavBar from "../../navbar/NavBar";

function ListarProdutos() {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  let navigate = useNavigate();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  useEffect(() => {
    if (token === "") {
      toastAlerta("Você precisa estar logado", "info");
      navigate("/");
    }
  }, [token]);

  async function buscarProdutos() {
    try {
      await buscar("/produtos", setProdutos, {
        headers: {
          Authorization: token,
        },
      });
    } catch (error: any) {
      if (error.toString().includes("403")) {
        toastAlerta("O token expirou, favor logar novamente", "info");
        handleLogout();
      }
    }
  }

  useEffect(() => {
    buscarProdutos();
  }, [produtos.length]);

  let listarProdutoComponent;

  if (usuario.token !== "" && usuario.tipo === "vendedor") {
    listarProdutoComponent = (
      <>
        <NavBar />
        <div className="flex self-center justify-center my-16 font-semibold text-6xl w-full text-dark-orange">
          <p>Produtos</p>
        </div>
        <div className="flex flex-col w-full p-5 justify-center items-center bg-timber-wolf">
          <div>
            <p className="self-center justify-center font-semibold text-2xl text-black-new">
              Você é vendedor? Cadastre um produto agora mesmo
            </p>
          </div>
          <div className="mt-4 bg-meddium-green text-xl shadow-xl hover:bg-dark-green-login">
            <ModalProduto />
          </div>
        </div>
        {produtos.length === 0 && (
          <Dna
            visible={true}
            height="200"
            width="200"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper mx-auto"
          />
        )}
        <div className="container mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {produtos.map((produto) => (
            <CardProduto key={produto.id} produto={produto} />
          ))}
        </div>

        <Footer />
      </>
    );
  } else {
    listarProdutoComponent = (
      <>
        <NavBar />
        <div className="flex self-center justify-center my-16 font-semibold text-6xl w-full text-dark-orange">
          <p>Produtos</p>
        </div>
        <div className="flex flex-col w-full p-5 justify-center items-center bg-timber-wolf">
          <div className="mt-4 bg-meddium-green text-xl shadow-xl hover:bg-dark-green-login">
            <ModalProduto />
          </div>
        </div>
        {produtos.length === 0 && (
          <Dna
            visible={true}
            height="200"
            width="200"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper mx-auto"
          />
        )}
        <div className="container mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {produtos.map((produto) => (
            <CardProduto key={produto.id} produto={produto} />
          ))}
        </div>

        <Footer />
      </>
    );
  }

  return <>{listarProdutoComponent}</>;
}

export default ListarProdutos;
