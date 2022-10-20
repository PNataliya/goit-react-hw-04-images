import { useState, useEffect } from 'react';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import { addImages } from 'api/fetch';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import Modal from './Modal/';
import { AppCard } from './App.styled';
import Notiflix from 'notiflix';

export const App = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [imageName, setImageName] = useState('');
  const [isLoadingImage, setIsLoadingImage] = useState(false);
  const [showModal, setshowModal] = useState(false);
  const [largeImageURL, setlargeImageURL] = useState('');
  const [totalImages, setTotalImages] = useState('');
  const [error, setError] = useState(false);

  const handleFormSubmit = imageName => {
    setImages([]);
    setPage(1);
    setImageName(imageName);
    setlargeImageURL('');
    setError(false);
  };

  useEffect(() => {
    async function fatchImages() {
      if (imageName === '') {
        return;
      }
      try {
        const images = await addImages(imageName, page);
        if (images.hits.length === 0) {
          return Notiflix.Notify.warning(`${error.message}`);
        }
        setIsLoadingImage(true);
        setImages(state => [...state, ...images.hits]);

        setIsLoadingImage(false);
        setTotalImages(images.totalHits);
      } catch (error) {
        setError(true);
        console.log(error);
      }
    }

    fatchImages();
  }, [imageName, page, error.message]);

  const handleAddPage = page => {
    setPage(page);
  };

  const handleSelectImg = img => {
    setlargeImageURL(img);
  };

  const toggleModal = () => {
    setshowModal(showModal => !showModal);
  };

  let lengthGalleryImg = images.length;

  return (
    <AppCard>
      <SearchBar onSubmit={handleFormSubmit} />
      <ImageGallery
        images={images}
        onSelect={handleSelectImg}
        onModalClick={toggleModal}
      />
      {images.length > 0 && lengthGalleryImg !== totalImages && (
        <Button onClick={handleAddPage} />
      )}

      {isLoadingImage && <Loader />}
      {showModal && <Modal onClose={toggleModal} imageURL={largeImageURL} />}
    </AppCard>
  );
};
