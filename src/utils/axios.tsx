import axios, { AxiosInstance } from "axios";

export const fetchProductById = async (productId: string) => {
  try {
    const response = await axios.get(
      `https://fakestoreapi.com/products/${productId}`
    );
    return response.data;
  } catch (error) {
    console.error(`Error fetching product with id ${productId}:`, error);
    throw error;
  }
};

export const fetchProducts = async () => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

// Настройка Axios interceptors
export const createAxiosInstance = (): AxiosInstance => {
  const instance = axios.create();

  instance.interceptors.request.use(
    (config) => {
      // Добавление заголовка к каждому запросу
      config.headers["Content-Type"] = "application/json";
      return config;
    },
    (error) => Promise.reject(error)
  );

  return instance;
};
