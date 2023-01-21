import React, { useState, useEffect }  from 'react'
import './Gallery.css'
import gallery1 from'../../assets/images/gallery-img-1.jpg'
import gallery2 from'../../assets/images/gallery-img-2.jpg'
import gallery3 from'../../assets/images/gallery-img-3.jpg'
import gallery4 from'../../assets/images/gallery-img-4.jpg'

function Gallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const importedImages = [gallery1, gallery2, gallery3, gallery4];
    setImages(importedImages);
  }, [])
  
  return (
    <>
        <section className="gallery">
          <div className="container">

            <ul className="gallery-list has-scrollbar">

              {images.map((image, index) => (
                <li key={index}>
                  <figure className="gallery-item">
                    <img src={image} alt="Gallery image" />
                  </figure>
                </li>
              ))}

            </ul>

          </div>
        </section>
    </>
  )
}

export default Gallery