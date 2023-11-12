import React, { useEffect, useState } from "react";
import axios from "axios";
import CardProduct from "./CardProduct";
import { IProduct } from "../../models";
import Flex from "../common/Styled/Flex";
import useWindowSize from "../../hooks/useWindowSize";

interface ProductListProps {
    displayCount?: number;
    showAll?: boolean;
}

const fetchProducts = async () => {
    try {
        const response = await axios.get("https://fakestoreapi.com/products");
        return response.data;
    } catch (error) {
        console.error("Error fetching products:", error);
        throw error;
    }
};

// Настройка Axios interceptors
axios.interceptors.request.use(config => {
    // Добавление заголовка к каждому запросу
    config.headers['Content-Type'] = 'application/json';
        return config;
    },
    error => {
        Promise.reject(error)
});

const ProductList: React.FC<ProductListProps> = ({ displayCount = 4, showAll = false }) => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const { width } = useWindowSize();
    const isTablet = width && width <= 768;
    const isMobile = width && width <= 480;

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

    return (
        <Flex flexDirection="row" padding={isTablet ? "2rem 1rem" : "2rem"} width="100%" justifyContent="center">
            {products.map((product) => (
                <CardProduct key={product.id} product={product} width={isMobile ? "14rem" : "16rem"} margin="1rem" />
            ))}
        </Flex>
    );
};

export default ProductList;
