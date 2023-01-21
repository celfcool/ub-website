import React from 'react'
import './Gallery.css'
import gallery1 from'../../assets/images/gallery-img-1.jpg'
import gallery2 from'../../assets/images/gallery-img-2.jpg'
import gallery3 from'../../assets/images/gallery-img-3.jpg'
import gallery4 from'../../assets/images/gallery-img-4.jpg'

function Gallery() {
  return (
    <>
        <section class="gallery">
          <div class="container">

            <ul class="gallery-list has-scrollbar">

              <li>
                <figure class="gallery-item">
                  <img src={gallery1} alt="Gallery image" />
                </figure>
              </li>

              <li>
                <figure class="gallery-item">
                  <img src={gallery2} alt="Gallery image" />
                </figure>
              </li>

              <li>
                <figure class="gallery-item">
                  <img src={gallery3} alt="Gallery image" />
                </figure>
              </li>

              <li>
                <figure class="gallery-item">
                  <img src={gallery4} alt="Gallery image" />
                </figure>
              </li>

            </ul>

          </div>
        </section>
    </>
  )
}

export default Gallery