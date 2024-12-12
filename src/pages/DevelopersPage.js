// import React from 'react';
import '../styles/DevelopersPage.css';


// const DevelopersPage = () => {
//   const developers = [
//     {
//       name: 'Разработчик 1',
//       portfolio: 'https://portfolio-liard-eight-44.vercel.app/projects',
//       image: '/images/developer1.jpg',
//     },
//     {
//       name: 'Разработчик 2',
//       portfolio: 'https://blinchik-r622.vercel.app/',
//       image: '/images/developer2.jpg',
//     },
//   ];

//   return (
//     <div className="developers-page">
//       <h2>Наши разработчики</h2>
//       <div className="developers-list">
//         {developers.map((dev, index) => (
//           <div key={index} className="developer-card">
//             <img
//               src={dev.image}
//               alt={dev.name}
//               className="developer-photo"
//             />
//             <h3>{dev.name}</h3>
//             <a
//               href={dev.portfolio}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="portfolio-link"
//             >
//               Перейти в портфолио
//             </a>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default DevelopersPage;

import React from 'react';
import Rabi from '../images/rabi.jpg';
import Beka from '../images/beka.jpg';
import Nasi from '../images/nasi.jpg';
import Uli from '../images/uli.jpg'

const developers = [
    { name: 'Мисирова Рабига', photo: Rabi, link: 'https://portfolio-liard-eight-44.vercel.app/projects' },
    { name: 'Болотбекова Насикат', photo: Nasi, link: 'https://portfolio-maria.com' },
    { name: 'Насипбеков Бекболсун', photo: Beka, link: 'https://portfolio-alexey.com' },
    { name: 'Монолов Улукбек', photo: Uli, link: 'https://blinchik-r622.vercel.app/' },
];

const DevelopersPage = () => {
    return (
        <div className="developers-page">
            {developers.map((dev, index) => (
                <div className="developer-card" key={index}>
                    <div
                        className="developer-photo"
                        style={{ backgroundImage: `url(${dev.photo})` }}
                    ></div>
                    <div className="developer-info">
                        <h3 className="developer-name">{dev.name}</h3>
                        <a
                            className="developer-link"
                            href={dev.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Перейти на портфолио
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default DevelopersPage;



