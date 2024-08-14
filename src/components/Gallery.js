import React, { useState } from 'react';
import './Gallery.css'; 

const Gallery = () => {
  // State to manage the selected year
  const [selectedYear, setSelectedYear] = useState('2022');

  const years = ['2022', '2021', '2020', '2019', '2018', '2017', '2016', '2015'];
  
  // Data for the gallery images
  const galleryData = {
    '2022': [
      { title: 'Halloween Celebrations', imageUrl: '../assets/gallery1.jpeg' },
      { title: 'Student of the Week', imageUrl: '../assets/gallery2.jpeg' },
      { title: 'NLC Practice', imageUrl: '../assets/gallery3.jpeg' },
      { title: 'NLC Practice', imageUrl: '../assets/gallery4.jpg' },
      { title: 'NLC Practice', imageUrl: '../assets/gallery5.jpg' },
      { title: 'NLC Practice', imageUrl: '../assets/gallery6.jpeg' }
    ],
    '2021': [
      { title: 'Halloween Celebrations', imageUrl: '../assets/gallery7.jpeg' },
      { title: 'Student of the Week', imageUrl: '../assets/gallery08.jpeg' },
      { title: 'NLC Practice', imageUrl: '../assets/gallery9.jpg' },
      { title: 'NLC Practice', imageUrl: '../assets/gallery10.jpeg' },
      { title: 'NLC Practice', imageUrl: '../assets/gallery11.jpg' },
      { title: 'NLC Practice', imageUrl: '../assets/gallery12.webp' }
    ]
  };

  return (
    <div className="gallery-container" style={{marginTop:'75px'}} >
      <h1>Photo Gallery</h1>
      <div className="year-selector">
        {years.map(year => (
          <button 
            key={year} 
            className={`year-button ${selectedYear === year ? 'active' : ''}`}
            onClick={() => setSelectedYear(year)}
          >
            {year}
          </button>
        ))}
      </div>
      <div className="image-grid">
        {galleryData[selectedYear]?.map((item, index) => (
          <div key={index} className="image-card">
            <img src={item.imageUrl} alt={item.title} />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;