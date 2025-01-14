import { useState } from 'react';
import '../../styles/Gallery.css';

const Gallery = () => {
  const [modalImage, setModalImage] = useState(null);

  const galleryImages = [
    {
      src: '/img/gallery/work1.jpg',
      caption: 'MLSA January Meetup 2024 | Microsoft Srilanka'
    },
  ];

  return (
    <section className="gallery_section">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-title center-title">
            <span>Here are some of the events I've attended</span>
            <h2>Photo Gallery</h2>
          </div>
        </div>
      </div>

      <div className="pages">
        <div className="gallery">
          <div className="gallery__page">
            {galleryImages.map((image, index) => (
              <div key={index} className="gallery__item">
                <img 
                  src={image.src}
                  alt={`Gallery item ${index + 1}`}
                  className="zoom"
                  onClick={() => setModalImage(image)}
                  data-caption={image.caption}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {modalImage && (
        <div className="modal" onClick={() => setModalImage(null)}>
          <span className="close">&times;</span>
          <img className="modal-content" src={modalImage.src} />
          <div id="caption">{modalImage.caption}</div>
        </div>
      )}
    </section>
  );
};

export default Gallery;