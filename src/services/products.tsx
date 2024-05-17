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

