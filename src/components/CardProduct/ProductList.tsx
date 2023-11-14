import React from "react";
import CardProduct from "./CardProduct";
import { IProduct } from "@models/ProductModel";
import Flex from "@components-common/Styled/Flex";
import useWindowSize from "@hooks/useWindowSize";
import { useFetchProducts } from '@hooks/useFetchProducts';
import { Link } from "react-router-dom";

interface ProductListProps {
    displayCount?: number;
    showAll?: boolean;
}

const ProductList: React.FC<ProductListProps> = ({ displayCount = 4, showAll = false }) => {
    const { products, isLoading } = useFetchProducts({ displayCount, showAll });
    const { width } = useWindowSize();
    const isTablet = width && width <= 768;
    const isMobile = width && width <= 480;

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (!products) {
        return <p>No products found</p>;
    }

    return (
        <Flex flexDirection="row" padding={isTablet ? "2rem 1rem" : "2rem"} width="100%" justifyContent="center">
            {products.map((product : IProduct) => (
                <Link key={product.id} to={`/product/${product.id}`}>
                    <CardProduct key={product.id} product={product} width={isMobile ? "14rem" : "16rem"} margin="1rem" />
                </Link>
            ))}
        </Flex>
    );
};

export default ProductList;
