import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Cadastro from "./pages/register/Register";
import { AuthProvider } from "./contexts/AuthContext";
import ListarCategorias from "./components/categories/categoriesList/CategoriesList";
import FormularioCategoria from "./components/categories/categoriesForms/FormularioCategoria";
import DeletarCategoria from "./components/categories/categoriesDelete/CategoriesDelete";
import ListarProdutos from "./components/products/productList/ProductList";
import FormularioProduto from "./components/products/productForm/ProductForm";
import DeletarProduto from "./components/products/productDelete/ProductDelete";
import Cart from "./pages/cart/cart";
import Navbar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import CardProduto1 from "./components/products/cardProducts/CardProducts1";
import ExibirProduto from "./components/products/productShow/ProductShow";
import ModalExibirProduto from "./components/products/productShow/ProductShowModal";
import Contato from "./pages/contactus/Contato";
import SobreNos from "./pages/aboutus/AboutUs";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <AuthProvider>''
        <ToastContainer />
        <BrowserRouter>
          <div className="min-h-[80vh]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/contato" element={<Contato />} />
              <Route path="/categorias" element={<ListarCategorias />} />
              <Route path="/login1" element={<Login />} />
              <Route
                path="/cadastroCategoria"
                element={<FormularioCategoria />}
              />
              <Route
                path="/editarCategoria/:id"
                element={<FormularioCategoria />}
              />
              <Route
                path="/deletarCategoria/:id"
                element={<DeletarCategoria />}
              />
              <Route path="/produtos" element={<ListarProdutos />} />
              <Route path="/cadastroProduto" element={<FormularioProduto />} />
              <Route
                path="/editarProduto/:id"
                element={<FormularioProduto />}
              />
              <Route path="/deletarProduto/:id" element={<DeletarProduto />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/sobre" element={<SobreNos />} />
              <Route
                path="/exibirProduto/:id"
                element={<ModalExibirProduto />}
              />
            </Routes>
          </div>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
