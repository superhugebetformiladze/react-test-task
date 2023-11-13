import { useEffect } from 'react';
import { fetchProductById } from '@utils/axios';
import { IProduct } from '@models/ProductModel';

interface UseFetchProductByIdProps {
  id: string | undefined;
  setProduct: (data: IProduct) => void;
}

export const useFetchProductById = ({ id, setProduct }: UseFetchProductByIdProps) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (id) {
          const productData = await fetchProductById(id);
          setProduct(productData);
        }
      } catch (error) {
        console.error("Error setting product:", error);
      }
    };

    fetchData();
  }, [id, setProduct]);
};
