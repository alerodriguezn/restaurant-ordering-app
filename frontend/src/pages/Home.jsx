import Navbar from "../components/Navbar.jsx";
import ProductList from "../components/ProductList.jsx";
const Home = () => {
  return (
    <>
      <Navbar/>
      <main className="p-2">
        <ProductList />
      </main>
    </>
  );
};

export default Home;
