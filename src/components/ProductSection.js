// ProductSection.js
// src/components/ProductSection.js
import React from 'react';
import ProductCard from "../pages/ProductCard"
import productImage from '../images/productImage.jpg';
import categoryImage from '../images/categoryImage.png';
import '../styles/ProductSection.css'; // Обновляем путь
import CategoryCard from '../components/CategoryCard';


// Остальной код компонента ProductSection

const ProductSection = () => {
  return (
    <div className="product-section">
      <div className="section-header">
        <h2>Автомасла</h2>
        <button className="view-all">Все автомасла &rarr;</button>
      </div>

      <div className="product-cards">
        <ProductCard image={productImage} title="Mobil SUPER 3000 X1 5W-40, 1 л." rating={4} price={5690} />
        <ProductCard image={productImage} title="Шины зимние" rating={4} price={5690} />
        <ProductCard image={productImage} title="Тормозные диски" rating={4} price={5690} />
        <ProductCard image={productImage} title="Mobil SUPER 3000 X1 5W-40, 1 л." rating={4} price={5690} />
        <ProductCard image={productImage} title="Шины зимние" rating={4} price={5690} />
   
      </div>

      <div className="category-cards">
        <CategoryCard image={categoryImage} title="Запчасти" buttonText="Перейти" />
        <CategoryCard image={categoryImage} title="Шины зимние дешевле" buttonText="Выбрать" />
        <CategoryCard image={categoryImage} title="Запчасти" buttonText="Смотреть" />
      </div>

        




      <div className="product-section">
      {/* Секция "Рекомендуем" */}
      <div className="section">
        <h2 className="section-title">Рекомендуем</h2>
        <div className="product-cards">
          <ProductCard image={productImage} title="Mobil SUPER 3000 X1 5W-40, 1 л." rating={4} price={1000} />
        <ProductCard image={productImage} title="Тормозные диски" rating={4} price={1000} />
         <ProductCard image={productImage} title="Шины зимние" rating={4} price={1000} />
         <ProductCard image={productImage} title="Автошины" rating={4} price={1000} />   
         <ProductCard image={productImage} title="Автошины" rating={4} price={1000} />   
          </div>
       </div>

   
    </div>



    <div className="section">
         <h2 className="section-title">Часто продаваемые</h2>
        <div className="product-cards">
          <ProductCard image={productImage} title="Тормозные колодки" rating={4} price={1000} />
          <ProductCard image={productImage} title="Моторное масло" rating={4} price={1000} />
          <ProductCard image={productImage} title="Антифриз" rating={4} price={1000} />
          <ProductCard image={productImage} title="Моторное масло" rating={4} price={1000} />
          <ProductCard image={productImage} title="Антифриз" rating={4} price={1000} />
          {/* <ProductCard image={productImage} title="Антифриз" rating={4} price={1000} /> */}
          
       </div>
     </div>

    </div>
  );
};

export default ProductSection;

// src/components/ProductSection.js
// import React from 'react';
// import ProductCard from "../pages/ProductCard";
// import productImage from '../images/productImage.jpg';
// import '../styles/ProductSection.css';

// const ProductSection = () => {
//   return (
//     <div className="product-section">
//       {/* Секция "Рекомендуем" */}
//       <div className="section">
//         <h2 className="section-title">Рекомендуем</h2>
//         <div className="product-cards">
//           <ProductCard image={productImage} title="Mobil SUPER 3000 X1 5W-40, 1 л." rating={4} price={1000} />
//           <ProductCard image={productImage} title="Тормозные диски" rating={4} price={1000} />
//           <ProductCard image={productImage} title="Шины зимние" rating={4} price={1000} />
//           <ProductCard image={productImage} title="Автошины" rating={4} price={1000} />
//         </div>
//       </div>

//       {/* Секция "Часто продаваемые" */}
//       <div className="section">
//         <h2 className="section-title">Часто продаваемые</h2>
//         <div className="product-cards">
//           <ProductCard image={productImage} title="Тормозные колодки" rating={4} price={1000} />
//           <ProductCard image={productImage} title="Моторное масло" rating={4} price={1000} />
//           <ProductCard image={productImage} title="Антифриз" rating={4} price={1000} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductSection;

