import ProductListItem from '../../components/Product/ProductListItem';
const ProductsList = () => {
  return (
    <div className='
      grid gap-[10px] 
      grid-cols-[repeat(1,_1fr)] 
      sm:grid-cols-[repeat(2,_1fr)] 
      lg:grid-cols-[repeat(3,_1fr)]
      xl:grid-cols-[repeat(4,_1fr)]
    '>
      <ProductListItem />
      <ProductListItem />
      <ProductListItem />
      <ProductListItem />
      <ProductListItem />
      <ProductListItem />
    </div>
  )
}

export default ProductsList;
