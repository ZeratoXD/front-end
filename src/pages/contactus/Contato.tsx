import React from "react";
import Footer from "../../components/footer/Footer";
import NavBar from "../../components/navbar/NavBar";

function Contato() {
  return (
    <>
      <NavBar />
      <div>
        <div className="mapa p-10 flex">
          <iframe
            className="w-full h-80 justify-self-center"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3657.2137061271683!2d-46.637713!3d-23.560767!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59a5bff1d98b%3A0xba99ce77224a3a99!2sAv.%20da%20Liberdade%2C%20899%20-%20Liberdade%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001503-001!5e0!3m2!1spt-BR!2sbr!4v1701488595521!5m2!1spt-BR!2sbr"
          ></iframe>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="flex self-center justify-center my-16 font-semibold text-6xl w-full text-dark-blue-footer">
          <p>Ficou alguma dúvida? Entre em contato</p>
        </div>
        <div className="flex flex-row">
          {/* <div className="endereco bg-timber-wolf mx-10 size-72 rounded">
            <p>Endereco</p>
          </div> */}
          <div className="flex flex-col rounded items-center justify-center bg-sand-orange w-full max-w-5xl mr-3 mb-9 shadow-xl">
            <p className="text-3xl mt-4 text-dark-blue-footer font-semibold">
              Formulário de Contato
            </p>
            <form className="flex flex-wrap p-10 justify-self-center">
              <input
                type="text"
                className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] mr-[2%]"
                placeholder="Nome"
              />
              <input
                type="email"
                className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] ml-[2%]"
                placeholder="E-mail"
              />
              <input
                type="number"
                className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] mr-[2%]"
                placeholder="Celular"
              />
              <input
                type="date"
                className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] ml-[2%]"
                placeholder="Date of Birth"
              />
              <textarea
                name="message"
                className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-auto md:mb-auto md:w-full md:h-auto md:min-h-[200px] md:max-h-[200px] md:flex-grow md:flex-shrink md:flex-auto focus:bg-gray-md:focus:outline-none:focus:ring-blue-md:focus:border-transparent transition ease-in-out duration-fastest"
                placeholder="Escreva sua mensagem aqui..."
              ></textarea>
            </form>
            <div className="flex flex-row items-center self-center justify-center mb-5">
              <button
                type="submit"
                className=" bg-meddium-green text-white-new font-bold py-2 px-10 rounded-md hover:bg-indigo-600 hover:bg-dark-green transition ease-in-out duration-150 justify-center self-center "
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Contato;
