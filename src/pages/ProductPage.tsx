import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useWindowSize from "@hooks/useWindowSize";
import Flex from "@components-common/Styled/Flex";
import Image from "@components-common/Styled/Image";
import Text from "@components-common/Styled/Text";
import { useFetchProductById } from '@hooks/useFetchProductById';
import { IProduct } from "@models/ProductModel";
import { theme } from "@/index";

export function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const { width } = useWindowSize();
  const isTablet = width && width <= 768;
  const [product, setProduct] = useState<IProduct | null>(null);

  useFetchProductById({ id: id, setProduct });

  if (!product) {
    return null;
  }

  return (
    <>
      {isTablet ?
        (<Flex flexDirection="column" alignItems="center" justifyContent="center" flexWrap="nowrap" margin="2rem">
          <Image height="60vh" width="70vw" src={product.image} alt="product" padding="2rem" 
          backgroundColor={theme.colors.white} borderRadius="24px" margin="0 0 2rem 0" objectFit="scale-down" />
          <Flex flexDirection="column" flexGrow="1" padding="1rem 0 0 0">
            <Text fontWeight="600" fontSize="1.5rem" margin="0 0 1.5rem 0">{product.title}</Text>
            <Text fontWeight="600" fontSize="2rem" margin="0 0 2rem 0">{product.price}$</Text>
            <Text>{product.description}</Text>
          </Flex>
        </Flex>) :
        (<Flex flexDirection="row" alignItems="flex-start" justifyContent="center" flexWrap="nowrap" margin="2rem">
          <Image height="30rem" width="22rem" src={product.image} alt="product" padding="2rem" 
          backgroundColor={theme.colors.white} borderRadius="24px" margin="0 2rem 0 0" objectFit="scale-down" />
          <Flex flexDirection="column" flexGrow="1" padding="1rem 0 0 0">
            <Text fontWeight="600" fontSize="1.5rem" margin="0 0 1.5rem 0">{product.title}</Text>
            <Text fontWeight="600" fontSize="2rem" margin="0 0 2rem 0">{product.price}$</Text>
            <Text>{product.description}</Text>
          </Flex>
        </Flex>)
      }
    </>
  )
}

