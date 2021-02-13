import PropTypes from 'prop-types';

const ImageGalleryItem = ({ url, large, tags }) => {
  return (
    <li className="ImageGalleryItem">
      <img
        src={url}
        alt={tags}
        data-large={large}
        className="ImageGalleryItem-image"
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  url: PropTypes.string.isRequired,
  large: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};

export { ImageGalleryItem };
