import PropTypes from 'prop-types';
import { Component } from 'react/cjs/react.production.min';
import { ThreeDots } from 'react-loader-spinner';

import Button from '../Button/Button';

import Modal from '../Modal/Modal';
import ImageGalleryList from '../ImageGalleryList/ImageGalleryList';

class ImageGallery extends Component {
  state = {
    images: [],
    status: 'idle',
    page: 1,
    showModal: false,
    largeImageURL: '',
  };
  async componentDidUpdate(prevProps, prevState, snapshot) {
    if (
      this.props.image !== prevProps.image ||
      prevState.page !== this.state.page
    ) {
      this.setState({ status: 'pending' });
      try {
        const response = await fetch(
          `https://pixabay.com/api/?q=${this.props.image}&page=${this.state.page}&key=25284590-6d373146c28d5b297cc6c7db9&image_type=photo&orientation=horizontal&per_page=12`,
        );
        const data = await response.json();
        const images = data.hits;
        if (images.length === 0) {
          this.setState({ status: 'idle' });
          return alert('wrong name');
        }
        this.setState(prevState => ({
          images: [...prevState.images, ...images],
          status: 'resolved',
        }));
      } catch (error) {
        this.setState({ status: 'rejected' });
      }
    }
    if (prevState.images !== this.state.images) {
      window.scrollTo({
        top: snapshot,
        behavior: 'smooth',
      });
    }
  }
  getSnapshotBeforeUpdate() {
    return document.body.scrollHeight;
  }
  onLoadMore = () => {
    if (this.state.images) {
      this.setState(prevState => ({ page: prevState.page + 1 }));
    }
  };
  toggleModal = largeImageURL => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
      largeImageURL,
    }));
  };
  render() {
    const { status, images, showModal } = this.state;
    if (status === 'pending') {
      return (
        <ThreeDots heigth="100" width="100" color="blue" ariaLabel="loading" />
      );
    }
    if (status === 'idle') {
      return <></>;
    }

    if (status === 'rejected') {
      return alert('Some issue has occured');
    }
    if (status === 'resolved') {
      return (
        <>
          <ImageGalleryList
            images={images}
            showModal={showModal}
            toggleModal={this.toggleModal}
          />
          <Button onLoadMore={this.onLoadMore} />
          {showModal && (
            <Modal
              largeImageURL={this.state.largeImageURL}
              toggleModal={this.toggleModal}
            />
          )}
        </>
      );
    }
  }
}
ImageGallery.propTypes = {
  image: PropTypes.string.isRequired,
};
export default ImageGallery;
