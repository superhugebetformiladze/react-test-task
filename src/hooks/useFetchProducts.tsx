import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { fetchProductsAsync } from "@redux/thunks";
import { RootState } from "@redux/rootReducer";

interface UseFetchProductsProps {
  displayCount?: number;
  showAll?: boolean;
}

export const useFetchProducts = ({
  displayCount = 4,
  showAll = false,
}: UseFetchProductsProps) => {
  const dispatch: Dispatch<any> = useDispatch();
  const products = useSelector((state: RootState) => state.products.data);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        await dispatch(fetchProductsAsync(displayCount, showAll));
        setIsLoading(false);
      } catch (error) {
        console.error("Error setting products:", error);
      }
    };

    fetchData();
  }, [displayCount, showAll, dispatch]);

  return {
    products,
    isLoading,
  };
};
