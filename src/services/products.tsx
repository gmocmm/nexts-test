import { IProduct } from "../interfaces/IProduct";

export async function getProducts() {
  const res = await fetch('https://burgerhub00.github.io/data/products.json', { 
    cache: 'force-cache' 
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  const result = await res.json();
  return result.products;
}

export async function getProductBySlug(slug: string) {
  const products:IProduct[] = await getProducts();

  const product = products.filter((item) => {
    if(item.slug === slug) {
      return item;
    }
  });

  return product[0];
}