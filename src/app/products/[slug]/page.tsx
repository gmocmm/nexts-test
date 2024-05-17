type ProductDetailsProps = {
  params: { 
    slug: string 
  }
}

const ProductDetails = ({params}: ProductDetailsProps) => {
  return (
    <main>
      <h1>Product Details { params.slug }</h1>
    </main>
  )
}

export default ProductDetails;
