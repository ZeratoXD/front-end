import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import "./Login.css";
import Logo from "../../assets/logoEditado.png";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import UsuarioLogin from "../../models/UserLogin";
import { RotatingLines } from "react-loader-spinner";

function Login() {
  let navigate = useNavigate();

  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
    {} as UsuarioLogin
  );

  const { usuario, handleLogin } = useContext(AuthContext);

  const { isLoading } = useContext(AuthContext);

  useEffect(() => {
    if (usuario.token !== "") {
      navigate("/home");
    }
  }, [usuario]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuarioLogin({
      ...usuarioLogin,
      [e.target.name]: e.target.value,
    });
  }

  function login(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    handleLogin(usuarioLogin);
  }
  return (
    <div className="fundo min-h-screen py-20">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row w-10/12 lg:w-11/12 bg-white-new rounded-xl mx-auto shadow-lg overflow-hidden">
          <div className="imagem-login w-full lg:w-1/2 flex flex-col items-center justify-center pt-72 p-12 bg-no-repeat bg-cover bg-center">
            <h1 className="text-white-new text-4xl font-semibold mb-3 bg-meddium-orange py-2 px-20 rounded-sm shadow-sm">
              {" "}
              Bem vindo!{" "}
            </h1>
          </div>
          <div className="w-full lg:w-1/2 pb-12 py-24 px-12 flex flex-col">
            <h2 className="text-4xl mb-2">Entrar</h2>
            <p className="mb-4">Entre na sua conta para continuar</p>
            <form action="#" onSubmit={login}>
              <div className="mt-5">
                <p className="mb-1 font-semibold">E-mail</p>
                <input
                  type="text"
                  placeholder="Email"
                  id="email"
                  name="email"
                  className="border border-gray-400 py-1 px-2 w-full"
                  value={usuarioLogin.email}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    atualizarEstado(e)
                  }
                />
              </div>
              <div className="mt-6">
                <p className="mb-1 font-semibold">Senha</p>
                <input
                  type="password"
                  placeholder="Password"
                  id="senha"
                  name="senha"
                  className="border border-gray-400 py-1 px-2 w-full"
                  value={usuarioLogin.senha}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    atualizarEstado(e)
                  }
                />
              </div>
              <div className="mt-6">
                <input type="checkbox" className="border border-gray-400" />
                <span>
                  <a href="#" className="text-purple-500 font-semibold">
                    {" "}
                    Salvar dados do login
                  </a>
                </span>
              </div>
              <div className="mt-8">
                <button
                  type="submit"
                  className="w-full bg-meddium-orange py-3 text-center text-white-new rounded-sm font-semibold hover:bg-dark-orange flex justify-center"
                >
                  {isLoading ? (
                    <RotatingLines
                      strokeColor="white"
                      strokeWidth="5"
                      animationDuration="0.75"
                      width="24"
                      visible={true}
                    />
                  ) : (
                    <span className="self-center">Entrar</span>
                  )}
                </button>
              </div>
            </form>
            <p className="mt-4 font-bold self-center">
              Ainda não tem uma conta?{" "}
              <Link to="/cadastro" className="text-dark-orange hover:underline">
                Cadastre-se
              </Link>
            </p>
            <div className="mt-8 self-center">
              <Link to="/home">
                <img src={Logo} className="h-28 p-0" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
