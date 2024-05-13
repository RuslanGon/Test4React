
import "./App.css";
import Loader from "./componetns/Loader/Loader";
import ErrorMasage from "./componetns/ErrorMesage/ErrorMasage";
import ProductList from "./componetns/ProductList/ProductList";
import SearchProducts from "./componetns/SearchProducts/SearchProducts";
import { useProductsSearch } from "./hooks/useProductsSearch";

const AppHTTPRequest = () => {

const {products, isLoading, isError, onSearchProduct} = useProductsSearch()

  return (
    <div>
      <h1>Product shop</h1>
      <SearchProducts onSearchProduct={onSearchProduct} />
      {isLoading && <Loader />}
      {isError && <ErrorMasage />}
      <ProductList products={products} />
    </div>
  );
}

export default AppHTTPRequest