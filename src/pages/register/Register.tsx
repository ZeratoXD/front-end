import React, { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Usuario from "../../models/User";
import { cadastrarUsuario } from "../../services/Service";
import "./Cadastro.css";
import { toastAlerta } from "../../utils/toastAlerta";
import "./Cadastro.css";

function Cadastro() {
  let navigate = useNavigate();

  const [confirmaSenha, setConfirmaSenha] = useState<string>("");

  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: "",
    email: "",
    foto: "",
    tipo: "",
    senha: "",
  });

  const [usuarioResposta, setUsuarioResposta] = useState<Usuario>({
    id: 0,
    nome: "",
    email: "",
    foto: "",
    tipo: "",
    senha: "",
  });

  useEffect(() => {
    if (usuarioResposta.id !== 0) {
      back();
    }
  }, [usuarioResposta]);

  function back() {
    navigate("/login");
  }

  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
    setConfirmaSenha(e.target.value);
  }

  function handleEscolherTipo(e: ChangeEvent<HTMLSelectElement>) {
    const value = (e.target as HTMLSelectElement).value;
    setUsuario({ ...usuario, tipo: value });
  }

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  }

  async function cadastrarNovoUsuario(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    if (confirmaSenha === usuario.senha && usuario.senha.length >= 0) {
      try {
        await cadastrarUsuario(
          `/usuarios/cadastrar`,
          usuario,
          setUsuarioResposta
        );
        toastAlerta("Usuário cadastrado com sucesso", "sucesso");
      } catch (error) {
        toastAlerta("Erro ao cadastrar usuário", "erro");
      }
    } else {
      toastAlerta(
        "Dados inconsistentes. Verifique as informações de cadastro.",
        "erro"
      );
      setUsuario({ ...usuario, senha: "" });
      setConfirmaSenha("");
    }
  }

  return (
    <>
      <div className="fundo min-h-screen py-20 ">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row w-10/12 lg:w-11/12 bg-white-new rounded-xl mx-auto shadow-lg overflow-hidden">
            <div className="imagem-login w-full lg:w-1/2 flex flex-col items-center justify-center pt-72 p-12 bg-no-repeat bg-cover bg-center ">
              <h1 className="text-white-new text-4xl font-semibold mb-3 bg-meddium-orange p-2 rounded-sm shadow-sm">
                {" "}
                Bem vindo!{" "}
              </h1>
            </div>
            <div className="w-full lg:w-1/2 pb-12 py-24 px-12 flex flex-col">
              <h2 className="text-4xl mb-2">Cadastrar</h2>
              <p className="mb-4">Cadastre uma nova conta</p>
              <form action="#" onSubmit={cadastrarNovoUsuario}>
                <div className="mt-5">
                  <p className="mb-1 font-semibold">Nome</p>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    placeholder="Nome"
                    className="border border-gray-400 py-1 px-2 w-full"
                    value={usuario.nome}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      atualizarEstado(e)
                    }
                  />
                </div>

                <div className="mt-6">
                  <p className="mb-1 font-semibold">Email</p>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Email"
                    className="border border-gray-400 py-1 px-2 w-full"
                    value={usuario.email}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      atualizarEstado(e)
                    }
                  />
                </div>
                <div className="mt-6">
                  <p className="mb-1 font-semibold">Foto</p>
                  <input
                    type="text"
                    id="foto"
                    name="foto"
                    placeholder="Foto"
                    className="border border-gray-400 py-1 px-2 w-full"
                    value={usuario.foto}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      atualizarEstado(e)
                    }
                  />
                </div>
                <div className="mt-6">
                  <p className="mb-1 font-semibold">Senha</p>
                  <input
                    type="password"
                    id="senha"
                    name="senha"
                    placeholder="Senha"
                    className="border border-gray-400 py-1 px-2 w-full"
                    value={usuario.senha}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      atualizarEstado(e)
                    }
                  />
                </div>
                <div className="mt-6">
                  <p className="mb-1 font-semibold">Confirmar Senha</p>
                  <input
                    type="password"
                    id="confirmarSenha"
                    name="confirmarSenha"
                    placeholder="Confirmar Senha"
                    className="border border-gray-400 py-1 px-2 w-full"
                    value={confirmaSenha}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      handleConfirmarSenha(e)
                    }
                  />
                </div>
                <div className="mt-6">
                  <p className="mb-1 font-semibold">Escolha o tipo: </p>
                  <select
                    className="border border-gray-400 py-1 px-2 w-full"
                    value={usuario.tipo}
                    onChange={handleEscolherTipo}
                  >
                    <option value="">Selecione...</option>
                    <option value="cliente">Cliente</option>
                    <option value="vendedor">Vendedor</option>
                  </select>
                </div>
                <div className="mt-8 flex justify-between">
                  <button
                    className="mr-4 rounded bg-dark-orange py-3 text-center text-white-new rounded-sm font-semibold hover:bg-meddium-orange w-1/2 py-2 "
                    onClick={back}
                  >
                    Cancelar
                  </button>
                  <button
                    className="ml-4 rounded bg-meddium-orange py-3 text-center text-white-new rounded-sm font-semibold hover:bg-dark-orange w-1/2 py-2 "
                    type="submit"
                  >
                    Cadastrar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cadastro;
