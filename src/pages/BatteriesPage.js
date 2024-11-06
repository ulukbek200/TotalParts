import React from 'react';
import '../styles/BatteriesPage.css';

const brands = ['Bosch', 'Varta', 'Acdelco', 'Berga', 'Energizer'];

const BatteriesPage = () => {
    return (
        <div className="batteries-container">
            <aside className="filters">
                             <h2>Фильтр</h2>

               {/* Бренд */}
                <div className="filter-section">
                    <h3>Бренд</h3>
                 <input type="text" placeholder="Быстрый поиск" className="search-input" />
<div className="checkbox-group">
<label><input type="checkbox" /> Bosch (1450)</label>
                        <label><input type="checkbox" /> Varta</label>
                         <label><input type="checkbox" /> Ac Delco</label>
                         <label><input type="checkbox" /> Banner</label>
                         <label><input type="checkbox" /> Berga</label>
                         <span className="show-more">Показать все</span>
                     </div>
                 </div>

                 {/* Емкость батареи */}
                 <div className="filter-section">
                     <h3>Емкость батареи, А/ч</h3>
                     <div className="range-inputs">
                         <input type="number" placeholder="от 30" />
                        <input type="number" placeholder="до 430" />
                    </div>
                </div>

                {/* Клеммы */}
                <div className="filter-section">
                    <h3>Клеммы</h3>
                     <div className="checkbox-group">
                        <label><input type="checkbox" /> 1</label>
                        <label><input type="checkbox" /> 1/3</label>
                       <label><input type="checkbox" /> 21 (234)</label>
                        <label><input type="checkbox" /> 3 (JIS)</label>
                        <label><input type="checkbox" /> 8</label>
                         <span className="show-more">Показать все</span>
              </div>
                 </div>

              {/* Крепление аккумулятора */}
                 <div className="filter-section">
                    <h3>Крепление аккумулятора</h3>
                     <div className="checkbox-group">
                         <label><input type="checkbox" /> B00</label>
                         <label><input type="checkbox" /> B03</label>
                        <label><input type="checkbox" /> B06</label>
                        <label><input type="checkbox" /> B09</label>
                         <label><input type="checkbox" /> B13</label>
                       <span className="show-more">Показать все</span>
                   </div>                </div>
            </aside>

            <main className="products">
                <h2>Каталог аккумуляторов</h2>
                <div className="products-grid">
                    {[...Array(12)].map((_, index) => (
                        <div key={index} className="product-card">
                            <img src="/path/to/image" alt="Battery" />
                            <h3>Bosch</h3>
                            <p>Батарея аккумуляторная "S3 Silver", 60 Ач</p>
                            <p className="price">7000 сом</p>
                        </div>
                    ))}
                </div>
                {/* Пагинация */}
                <div className="pagination">
                    <button>1</button>
                    <button className="active">2</button>
                    <button>3</button>
                    {/* Добавьте остальные кнопки */}
                </div>
            </main>
        </div>
    );
};

export default BatteriesPage;




//                 <h2>Фильтр</h2>

//                 {/* Бренд */}
//                 <div className="filter-section">
//                     <h3>Бренд</h3>
//                     <input type="text" placeholder="Быстрый поиск" className="search-input" />
//                     <div className="checkbox-group">
//                         <label><input type="checkbox" /> Bosch (1450)</label>
//                         <label><input type="checkbox" /> Varta</label>
//                         <label><input type="checkbox" /> Ac Delco</label>
//                         <label><input type="checkbox" /> Banner</label>
//                         <label><input type="checkbox" /> Berga</label>
//                         <span className="show-more">Показать все</span>
//                     </div>
//                 </div>

//                 {/* Емкость батареи */}
//                 <div className="filter-section">
//                     <h3>Емкость батареи, А/ч</h3>
//                     <div className="range-inputs">
//                         <input type="number" placeholder="от 30" />
//                         <input type="number" placeholder="до 430" />
//                     </div>
//                 </div>

//                 {/* Клеммы */}
//                 <div className="filter-section">
//                     <h3>Клеммы</h3>
//                     <div className="checkbox-group">
//                         <label><input type="checkbox" /> 1</label>
//                         <label><input type="checkbox" /> 1/3</label>
//                         <label><input type="checkbox" /> 21 (234)</label>
//                         <label><input type="checkbox" /> 3 (JIS)</label>
//                         <label><input type="checkbox" /> 8</label>
//                         <span className="show-more">Показать все</span>
//                     </div>
//                 </div>

//                 {/* Крепление аккумулятора */}
//                 <div className="filter-section">
//                     <h3>Крепление аккумулятора</h3>
//                     <div className="checkbox-group">
//                         <label><input type="checkbox" /> B00</label>
//                         <label><input type="checkbox" /> B03</label>
//                         <label><input type="checkbox" /> B06</label>
//                         <label><input type="checkbox" /> B09</label>
//                         <label><input type="checkbox" /> B13</label>
//                         <span className="show-more">Показать все</span>
//                     </div>
//                 </div>

//                 {/* Другие фильтры аналогично */}

//             </aside>
