import React from "react";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();

  // Здесь вы можете использовать id для загрузки данных о продукте из API

  return (
    <div>
      <h2>Страница продукта с ID: {id}</h2>
      {/* Вывод данных о продукте */}
    </div>
  );
};

export default ProductPage;
