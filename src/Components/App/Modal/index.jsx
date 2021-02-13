import PropTypes from 'prop-types';

const Modal = ({ image, tag }) => {
  return (
    <div className="Overlay">
      <div className="Modal">
        <img src={image} alt={tag} />
      </div>
    </div>
  );
};

Modal.propTypes = {
  image: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
};

export { Modal };
