import Footer from "../../components/footer/Footer";
import NavBar from "../../components/navbar/NavBar";
import "./SobreNos.css";

function SobreNos() {
  return (
    <>
      <NavBar />
      <div className="flex self-center justify-center my-10 font-semibold text-6xl w-full text-dark-orange">
        <p>Nossa missão, visão e valores</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-20 pt-20 pb-40 self-center justify-center">
        <div className="max-w-xs bg-white rounded-lg overflow-hidden shadow-lg">
          <div className="primeiroCard bg-cover h-48 flex-none bg-cover rounded-t text-center overflow-hidden"></div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Missão</div>
            <p className="text-gray-700 text-base">
              Empoderar pequenos e médios agricultores, dando-lhes um canal de
              vendas direto para seus clientes. Promover a agricultura
              sustentável, reduzindo o desperdício e fortalecendo comunidades
              rurais. Conectar consumidores a alimentos frescos e de qualidade,
              direto da fonte.
            </p>
          </div>
        </div>

        <div className="max-w-xs bg-white rounded-lg overflow-hidden shadow-lg">
          <div className="segundoCard bg-cover h-48 flex-none bg-cover rounded-t text-center overflow-hidden"></div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Visão</div>
            <p className="text-gray-700 text-base">
              Criar oportunidades de crescimento econômico sustentável para
              famílias de agricultores. Promover práticas agrícolas
              ambientalmente responsáveis e valorizar a biodiversidade.
              Estabelecer uma conexão direta entre produtores e consumidores,
              com transparência e confiança
            </p>
          </div>
        </div>

        <div className="max-w-xs bg-white rounded-lg overflow-hidden shadow-lg">
          <div className="terceiroCard bg-cover h-48 flex-none bg-cover rounded-t text-center overflow-hidden"></div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Valores</div>
            <p className="text-gray-700 text-base">
              Trabalhamos em equipe para alcançar metas comuns e apoiar uns aos
              outros. Agimos com honestidade, ética e transparência em todas as
              nossas ações. Promovemos práticas agrícolas sustentáveis e
              respeitamos o meio ambiente. Adotamos soluções criativas para
              enfrentar os desafios e melhorar continuamente.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SobreNos;
