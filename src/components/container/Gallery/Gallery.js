import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import cx from 'classnames';

import Image from 'components/presentational/Image';
import Loader from 'components/presentational/Loader';

import { fetchImages } from 'api/galleryApi';

import styles from './gallery.module.scss';

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(-1);

  const selectedImage = images[selectedImageIndex];

  useEffect(() => {
    setLoading(true);
    fetchImages().then((fetchedImages) => {
      setImages(fetchedImages);
      setLoading(false);
    }).catch(() => {
      setLoading(false);
    });
  }, []);

  return (
    <Container className="justify-content-center d-flex flex-wrap w-75 h-100 align-items-center">
      <Loader isLoading={isLoading} />
      {images.map((image, index) => (
        <Image
          src={image.thumbnailUrl}
          onClick={() => {
            setSelectedImageIndex(index);
            setShowModal(true);
          }}
          key={image.id}
          className={cx(styles.imageWrapper, 'mx-1 my-1')}
        />
      ))}
      <Modal
        show={showModal}
        onHide={() => {
          setShowModal(false);
          setSelectedImageIndex(-1);
        }}
      >
        <Modal.Header closeButton />
        <Modal.Body>
          {selectedImage && (
          <Image
            className="h-100 w-100"
            src={selectedImage.url}
          />
          )}
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default Gallery;
