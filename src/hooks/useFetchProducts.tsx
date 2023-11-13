import { useEffect, useState } from 'react';
import { fetchProducts } from '@utils/axios';
import { IProduct } from '@models/ProductModel';

interface UseFetchProductsProps {
  displayCount?: number;
  showAll?: boolean;
}

export const useFetchProducts = ({ displayCount = 4, showAll = false }: UseFetchProductsProps) => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsData = await fetchProducts();
        setProducts(showAll ? productsData : productsData.slice(0, displayCount));
      } catch (error) {
        console.error("Error setting products:", error);
      }
    };

    fetchData();
  }, [displayCount, showAll]);

  return { products };
};

