import { useEffect, useRef, useState } from 'react';
import styles from '../../styles/GallerySection.module.css';
import gallery1 from '../../assets/img/gallery/gallery-1.jpg';
import gallery2 from '../../assets/img/gallery/gallery-2.jpg';
import gallery3 from '../../assets/img/gallery/gallery-3.jpg';
import gallery4 from '../../assets/img/gallery/gallery-4.jpg';
import gallery5 from '../../assets/img/gallery/gallery-5.jpg';
import gallery6 from '../../assets/img/gallery/gallery-6.jpg';

// Placeholder images
// const gallery1 = 'https://via.placeholder.com/800x600/151515/f36100?text=Gallery+1';
// const gallery2 = 'https://via.placeholder.com/400x600/151515/f36100?text=Gallery+2';
// const gallery3 = 'https://via.placeholder.com/400x600/151515/f36100?text=Gallery+3';
// const gallery4 = 'https://via.placeholder.com/400x600/151515/f36100?text=Gallery+4';
// const gallery5 = 'https://via.placeholder.com/400x600/151515/f36100?text=Gallery+5';
// const gallery6 = 'https://via.placeholder.com/800x600/151515/f36100?text=Gallery+6';

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const galleryRef = useRef(null);

  const galleryItems = [
    { id: 1, image: gallery1, wide: true },
    { id: 2, image: gallery2, wide: false },
    { id: 3, image: gallery3, wide: false },
    { id: 4, image: gallery4, wide: false },
    { id: 5, image: gallery5, wide: false },
    { id: 6, image: gallery6, wide: true }
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className={styles.gallerySection}>
        <div className={styles.gallery} ref={galleryRef}>
          <div className={styles.gridSizer}></div>
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className={`${styles.gsItem} ${item.wide ? styles.gridWide : ''}`}
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <a
                href="#"
                className={styles.thumbIcon}
                onClick={(e) => {
                  e.preventDefault();
                  handleImageClick(item.image);
                }}
              >
                <i className="fa fa-picture-o"></i>
              </a>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className={styles.imageModal} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <span className={styles.close} onClick={closeModal}>&times;</span>
            <img src={selectedImage} alt="Gallery" />
          </div>
        </div>
      )}
    </>
  );
};

export default GallerySection;

