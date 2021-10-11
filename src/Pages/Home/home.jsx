import ProductCart from "../../components/cart";
import Header from "../../components/header";
import ProductComponent from "../../components/products";

const Home = () => {
  return (
    <div>
      <Header />
      <div style={{ display: "flex" }}>
        <ProductComponent />
        <ProductCart />
      </div>
    </div>
  );
};
export default Home;
