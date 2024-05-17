import ProductListItem from '../../components/Product/ProductListItem';
import Link from 'next/link';
const ProductsList = () => {
  return (
    <div className='
      grid gap-[1em] 
      grid-cols-[repeat(1,_1fr)] 
      sm:grid-cols-[repeat(2,_1fr)] 
      lg:grid-cols-[repeat(3,_1fr)]
      xl:grid-cols-[repeat(4,_1fr)]
    '>
      <Link
        href="/products/slug-value"
      >
        <ProductListItem />
      </Link>

      <Link
        href="/products/slug-value"
      >
        <ProductListItem />
      </Link>

      <Link
        href="/products/slug-value"
      >
        <ProductListItem />
      </Link>

      <Link
        href="/products/slug-value"
      >
        <ProductListItem />
      </Link>

      <Link
        href="/products/slug-value"
      >
        <ProductListItem />
      </Link>

      <Link
        href="/products/slug-value"
      >
        <ProductListItem />
      </Link>

      <Link
        href="/products/slug-value"
      >
        <ProductListItem />
      </Link>

      <Link
        href="/products/slug-value"
      >
        <ProductListItem />
      </Link>
    </div>
  )
}

export default ProductsList;
