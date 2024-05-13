import { useEffect, useState } from "react"
import { reguestProducts } from "../servises/api"
import { reguestProductsByQuery } from "../api/api"


export const useProductsSearch = () => {

    const [products, setProducts] = useState(null)
    const [isLoading, setIsLoding] = useState(false)
    const [isError, setIsError] = useState(null)
    const [query, setQuery] = useState('')
    
    
    useEffect(() => {
        async function fetchProducts () {
    try{
        setIsLoding(true)
        // const {data} = await axios.get('https://dummyjson.com/products')
         const data = await reguestProducts()
    
        setProducts(data.products)
    }catch(error) {
        setIsError(true)
    } finally{
        setIsLoding(false)
    }
    
        }
        fetchProducts()
    }, [])
    
    useEffect(() => {
      if (query === 0) return;
    
      async function fetchProductsByQuery() {
        try {
          setIsLoding(true);
          const data = await reguestProductsByQuery(query);
          setProducts(data.products);
          console.log(data);
        } catch (error) {
          setIsError(true);
        } finally {
          setIsLoding(false);
        }
      }
    
      fetchProductsByQuery();
    }, [query]);
    
    
    const onSearchProduct =(serchTerm) => {
    setQuery(serchTerm)
    }

  return {products, isLoading, isError, onSearchProduct}
}

