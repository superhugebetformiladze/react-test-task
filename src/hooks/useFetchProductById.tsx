import { Dispatch, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductByIdAsync } from "@redux/thunks";
import { RootState } from "@redux/rootReducer";

interface UseFetchProductByIdProps {
  id: string | undefined;
}

export const useFetchProductById = ({ id }: UseFetchProductByIdProps) => {
  const dispatch: Dispatch<any> = useDispatch();
  const product = useSelector((state: RootState) => state.product.data);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (id) {
          setIsLoading(true);
          await dispatch(fetchProductByIdAsync(id));
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Error setting product:", error);
      }
    };

    fetchData();
  }, [id, dispatch]);

  return {
    product,
    isLoading,
  };
};
