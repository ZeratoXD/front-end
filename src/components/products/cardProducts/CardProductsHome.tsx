import React from "react";
import Popup from "reactjs-popup";
import Produto from "../../../models/Product";
interface CardProdutoProps {
  produto: Produto;
}

function CardProdutoHome(this: any, { produto }: CardProdutoProps) {
  return (
    <>
      <div className="my-10 h-28 flex w-28 max-w-sm flex-col overflow-hidden rounded-lg border border-light-gray-card bg-white-new hover:bg-light-gray-card">
        <a
          className=" mx-0 my-2 flex self-center h-full overflow-hidden rounded-xl"
          href="#"
        >
          <img
            className="object-cover"
            src={produto.foto}
            alt="product image"
          />
          {/* <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">39% OFF</span> */}
        </a>
        <div className="mt-4 px-5 pb-5">
          <a href="#">
            <h5 className="text-2xl font-semibold tracking-tight text-slate-900">
              {produto.nome}
            </h5>
          </a>
          <div className="mt-2 mb-5 flex items-center justify-between">
            <p>
              <span className="text-3xl font-bold text-black-new">
                R${produto.preco}
              </span>
              {/* <span className="text-sm text-slate-900 line-through">$699</span> */}
              <span className="text-xl font-bold text-dark-gray">
                {" "}
                / unidade
              </span>
            </p>
          </div>

          <div className="descricao mb-5">
            <p>{produto.descricao}</p>
          </div>
          <div className="vendedor mb-5 flex flex-row items-center">
            <i
              className="fa fa-user px-2 text-dark-orange"
              aria-hidden="true"
            ></i>
            <p>
              <b>Vendido por:</b> <span>{produto.usuario?.nome}</span>
            </p>
          </div>
          <div className="grid grid-cols-2 gap-5">
            {/* <ModalExibirProduto/> */}
            {/* <Link to={`/exibirProduto`}>
                            <button className="flex items-center justify-center rounded-md bg-meddium-orange px-2 py-2.5 text-center text-sm font-bold text-white-new hover:bg-dark-orange focus:outline-none focus:ring-4 focus:ring-blue-300">
                                <i className="fa fa-eye mr-2 -ml-7 w-6 p-0" aria-hidden="true"></i>
                                Ver mais</button>
                        </Link> */}
            <div>
              <Popup
                trigger={
                  <button className="border w-full border-meddium-orange rounded px-4 bg-meddium-orange py-2.5 text-center text-sm items-center font-bold text-white-new hover:bg-dark-orange">
                    Ver mais
                  </button>
                }
                modal
              >
                <div className="grid grid-cols-2 gap-1 w-full h-full items-center px-6 py-2 my-4">
                  <div>
                    <div className="relative max-w-fit mx-3 mt-3 flex self-center h-60 overflow-hidden rounded-xl">
                      <img
                        className="object-cover size-max"
                        src={produto.foto}
                        alt="product image"
                      />
                      {/* <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">39% OFF</span> */}
                    </div>
                  </div>
                  <div>
                    <div className="mt-4 px-5 pb-5">
                      <a href="#">
                        <h5 className="text-3xl font-semibold tracking-tight text-slate-900">
                          {produto.nome}
                        </h5>
                      </a>
                      <div className="mt-2 mb-5 flex items-center justify-between">
                        <p>
                          <span className="text-3xl font-bold text-black-new">
                            R${produto.preco}
                          </span>
                          {/* <span className="text-sm text-slate-900 line-through">$699</span> */}
                          <span className="text-xl font-bold text-dark-gray">
                            {" "}
                            / unidade
                          </span>
                        </p>
                      </div>
                      <div className="descricao mb-5">
                        <h2 className="text-2xl font-semibold mb-4">
                          Sobre o produto
                        </h2>
                        <p>{produto.descricao}</p>
                      </div>
                      <div className="mb-5 flex flex-row items-center">
                        <i
                          className="fa fa-calendar-o px-2 text-dark-orange"
                          aria-hidden="true"
                        ></i>
                        <p>
                          <b>Validade:</b>{" "}
                          <span>
                            {" "}
                            {new Intl.DateTimeFormat(undefined, {
                              dateStyle: "long",
                            }).format(new Date(produto.validade))}
                          </span>
                        </p>
                      </div>
                      <div className="vendedor mb-5 flex flex-row">
                        <i
                          className="fa fa-user px-2 text-dark-orange self-center"
                          aria-hidden="true"
                        ></i>
                        <p className="self-center">
                          <b>Vendedor:</b> <span>{produto.usuario?.nome}</span>
                        </p>
                      </div>
                      <div className="vendedor mb-5 flex flex-row items-center justify-center">
                        <img
                          className="rounded-full h-12"
                          src={produto.usuario?.foto}
                        />
                      </div>
                      <div className="grid grid-cols-1 gap-5">
                        {/* <button className="flex items-center justify-center rounded-md bg-light-gray-footer px-2 py-2.5 text-center text-sm font-bold text-black-new hover:bg-timber-wolf focus:outline-none focus:ring-4 focus:ring-blue-300">
                                                    Voltar</button> */}
                        <a
                          href="#"
                          className="flex items-center justify-center rounded-md bg-meddium-green px-2 py-2.5 text-center text-sm font-bold text-white-new hover:bg-dark-green-login focus:outline-none focus:ring-4 focus:ring-blue-300"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="mr-2 h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                            />
                          </svg>
                          Add Carrinho
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <ExibirProduto produto={this.produto} /> */}
              </Popup>
            </div>
            <a
              href="#"
              className="flex items-center justify-center rounded-md bg-meddium-green px-2 py-2.5 text-center text-sm font-bold text-white-new hover:bg-dark-green-login focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              Add Carrinho
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardProdutoHome;
