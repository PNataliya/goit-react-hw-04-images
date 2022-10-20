import PropTypes from 'prop-types';
import { GalleryImage } from './ImageGallery.staled';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

export default function ImageGallery({ images, onSelect, onModalClick }) {
  return (
    <GalleryImage onClick={() => onModalClick()}>
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          webformatUrl={image.webformatURL}
          alt={image.tags}
          largeImageURL={image.largeImageURL}
          onSelect={onSelect}
        />
      ))}
    </GalleryImage>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      tags: PropTypes.string.isRequired,
      id: PropTypes.number,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ),
};
