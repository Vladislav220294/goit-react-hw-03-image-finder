import PropTypes from 'prop-types';
import Modal from '../Modal/Modal'
import s from './/ImageGalleryItem.module.css'

const ImageGalleryItem = ({toggleModal, showModal, id, webformatURL, largeImageURL}) => {
    return ( <><li key={id} className={s.imageGalleryItem}>
  <img src={webformatURL} alt="" className={s.imageGalleryItemimage} /> 
</li> {showModal && <Modal largeImageURL={largeImageURL} toggleModal={toggleModal} />} </>);
}
 
export default ImageGalleryItem;