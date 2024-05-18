'use client'

import Link from 'next/link';
import ProductListItem from '../components/Product/ProductListItem';
import { IProduct } from './../interfaces/IProduct';
import { useContext, useEffect, useState } from 'react';
import { FilterContext } from '@/contexts/filter';

type ProductsListViewProps = {
  products: IProduct[]
}

const ProductsListView = ({ products }: ProductsListViewProps) => {
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);
  const { search } = useContext(FilterContext);

  useEffect(() => {
    if(search.length == 0) {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter((product) => {
          if(product.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())) {
            return product
          }
        }
      ))
    }

  }, [search, products]);

  return (
    <div className='
      grid gap-[1em] 
      grid-cols-[repeat(1,_1fr)] 
      sm:grid-cols-[repeat(2,_1fr)] 
      lg:grid-cols-[repeat(3,_1fr)]
      xl:grid-cols-[repeat(4,_1fr)]
    '>

      {
        filteredProducts.map((product) => {
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