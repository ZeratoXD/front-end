import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import Navbar from "../../components/navbar/NavBar";
import CartItem from "./CartItem";
import CartShopping from "./CartShoppingCard";
import Footer1 from "../../components/footer/Footer";

function Carrinho() {
  const { items } = useContext(AuthContext);

  return (
    <>
      <Navbar />
      <div className="h-full flex min-h-96">
        <div className="grid grid-cols-3 m-8 grid-flow-col gap-y-2">
          <div className="col-span-1 p-4 text-new-dark-gray ">
            <div className="text-new-dark-gray absolute top-42 right-12 mr-12">
              <CartShopping />
            </div>
            {items.map((produto) => (
              <CartItem key={produto.id} produto={produto} />
            ))}
          </div>
        </div>
      </div>
      <Footer1 />
    </>
  );
}

export default Carrinho;
