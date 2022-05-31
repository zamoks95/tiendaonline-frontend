import React from 'react';
import 'react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from 'react-image-gallery';

const ProductSlideshow = ({ gallerySmall, galleryBig }) => {
    const productImages = galleryBig.map((image, index) => ({
        original: image.localFile.publicURL,
        thumbnail: gallerySmall[index].localFile.publicURL,
        originalAlt: `Imagen principal - ${index}`,
        thumbnailAlt: `Imagen secundaria - ${index}`,
        originalWidth: '576px',
        originalHeight: '344px',
        thumbnailWidth: '92px',
        thumbnailHeight: '74px'
    }));

    return (
        <ImageGallery
            items={productImages}
            showNav={false}
            showPlayButton={false}
            slideDuration={150}
            showFullscreenButton={false}
        />
    )

}
export default ProductSlideshow