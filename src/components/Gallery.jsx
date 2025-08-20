import React from 'react'
import './Gallery.css'

const Gallery = () => {
  const galleryItems = [
    { type: 'photo', title: 'Photo 1', placeholder: 'Add your photo here' },
    { type: 'artwork', title: 'Artwork 1', placeholder: 'Add your artwork here' },
    { type: 'photo', title: 'Photo 2', placeholder: 'Add your photo here' },
    { type: 'artwork', title: 'Artwork 2', placeholder: 'Add your artwork here' },
    { type: 'photo', title: 'Photo 3', placeholder: 'Add your photo here' },
    { type: 'artwork', title: 'Artwork 3', placeholder: 'Add your artwork here' },
  ]

  return (
    <section id="gallery" className="gallery-section">
      <h2>Photos & Artworks</h2>
      <div className="grid grid-3">
        {galleryItems.map((item, index) => (
          <div key={index} className="gallery-item">
            <div className={`gallery-placeholder ${item.type}`}>
              <span>{item.placeholder}</span>
            </div>
            <h4>{item.title}</h4>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Gallery