import React from 'react';
import 'react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from 'react-image-gallery';

const ProductSlideshow = ({ gallerySmall, galleryBig }) => {
    const productImages = galleryBig.map((image, index) => ({
        original: image.localFile.publicURL,
        thumbnail: gallerySmall[index].localFile.publicURL
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