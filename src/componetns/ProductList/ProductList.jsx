

const ProductList = ({products}) => {
  return (
    <ul>

            {Array.isArray(products) && products.map(product => {
                return ( <li key={product.id}>
                    <img width={250} src={product.thumbnail} alt={product.title} />
                    <h2>Title: {product.title}</h2>
                    <p>Description: {product.description}</p>
                    <h3>price: {product.price}</h3>
                    <p>Rating: {product.rating}</p>
                    <p>Brand: {product.brand}</p>
                </li>)
            })}
           
        </ul>
  )
}

export default ProductList