import Link from 'next/link';
import ProductListItem from '../components/Product/ProductListItem';
import { IProduct } from './../interfaces/IProduct';
import { useState } from 'react';

type ProductsListViewProps = {
  products: IProduct[]
}

const ProductsListView = async ({ products }: ProductsListViewProps) => {
  return (
    <div className='
      grid gap-[1em] 
      grid-cols-[repeat(1,_1fr)] 
      sm:grid-cols-[repeat(2,_1fr)] 
      lg:grid-cols-[repeat(3,_1fr)]
      xl:grid-cols-[repeat(4,_1fr)]
    '>

      {
        products.map((product) => {
          return (
            <Link
              key={`product-item-${product.slug}`}
              href={ `/products/${product.slug}` }
            >
              <ProductListItem 
                product={ product }
              />
            </Link>
          )
        })
      }
    </div>
  )
}

export default ProductsListView;