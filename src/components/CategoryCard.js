// // CategoryCard.js
// import React from 'react';
// import '../styles/ProductSection.css'; // Если styles находится в src


// const CategoryCard = ({ image, title, buttonText }) => {
//   return (
//     <div className="category-card">
//       <img src={image} alt={title} className="category-image" />
//       <div className="category-content">
//         <h3>{title}</h3>
//         <button className="category-button">
//           {buttonText} <span>&rarr;</span>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CategoryCard;

// src/components/CategoryCard.js
import React from 'react';
import '../styles/CategoryCard.css';

const CategoryCard = ({ image, title, buttonText }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <h3 className="card-title">{title}</h3>
      <button className="custom-button">{buttonText}</button> {/* Кнопка внутри карточки */}
    </div>
  );
};

export default CategoryCard;
