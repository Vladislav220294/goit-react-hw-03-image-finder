import PropTypes from 'prop-types';
import { Component } from 'react/cjs/react.production.min';
import { ThreeDots } from  'react-loader-spinner'
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Button from '../Button/Button'
import s from '../ImageGallery/ImageGallery.module.css'
// import Modal from '../Modal/Modal'

class ImageGallery extends Component {
  state = {
    images: [],
      status: 'idle',
      page: 1,
    showModal: false,
  };
    async componentDidUpdate(prevProps, prevState) {
        if (this.props.image !== prevProps.image) 
            this.setState({ status: 'pending' })
            try {
                const response = await fetch(
                    `https://pixabay.com/api/?q=${this.props.image}&page=${this.state.page}&key=25284590-6d373146c28d5b297cc6c7db9&image_type=photo&orientation=horizontal&per_page=12`,
                );
                const data = await response.json();
                const images = data.hits;
                this.setState({ images, status: 'resolved' })
            } catch (error) { this.setState({ status: 'rejected' }); console.log(error.message); }
        
    }
    onLoadMore = () => {
        if (this.state.images) { this.setState((prevState) => ({ page: prevState.page + 1, images: [ ...prevState.images, this.state.images] })) }
    }
    toggleModal = () => {
    this.setState((prevState) => ({showModal: !prevState.showModal})  );
    }
  render() {
      const { status, images, showModal } = this.state;
      if(status === 'idle') {return <div></div>}
            if (status === 'pending') { return <ThreeDots
        heigth="100"
        width="100"
        color='blue'
        ariaLabel='loading'
      /> }
      if (status === 'resolved') {
          return (
              <>
                  <ul className={s.gallery}>
         
                      {images.map(image => (
                          <ImageGalleryItem
            showModal={showModal}
            toggleModal={this.toggleModal}
              id={image.id}
              webformatURL={image.webformatURL}
              largeImageURL={image.largeImageURL}
                          />
                          
          ))}
                  </ul>
                  <Button onLoadMore={this.onLoadMore} />
                  
              </>
              
          );
      }
      if (status === 'rejected') {return alert('Some issue has occured')}
  }
}

export default ImageGallery;
