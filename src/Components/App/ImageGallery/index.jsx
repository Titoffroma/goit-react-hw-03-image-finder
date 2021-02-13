import PropTypes from 'prop-types';
import { ImageGalleryItem } from './ImageGalleryItem';

const ImageGallery = ({ images, onClick }) => {
  return (
    <ul className="ImageGallery" onClick={onClick}>
      {images &&
        images.map(image => (
          <ImageGalleryItem
            key={image.id}
            url={image.webformatURL}
            large={image.largeImageURL}
            tags={image.tags}
          />
        ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

export { ImageGallery };
