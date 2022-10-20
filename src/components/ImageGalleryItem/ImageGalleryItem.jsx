import PropTypes from 'prop-types';
import { GalleryItem, GalleryItemImage } from './ImageGalleryItem.styled';

export default function ImageGalleryItem({
  webformatUrl,
  alt,
  largeImageURL,
  onSelect,
}) {
  return (
    <GalleryItem onClick={() => onSelect(largeImageURL)}>
      <GalleryItemImage
        src={webformatUrl}
        alt={alt}
        data-source={largeImageURL}
      />
    </GalleryItem>
  );
}
ImageGalleryItem.propTypes = {
  webformatUrl: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};
