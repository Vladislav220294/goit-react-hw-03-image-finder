import { Component } from 'react/cjs/react.production.min';
import './App.css';
import Searchbar from './components/Searchbar/Searchbar.jsx';
import ImageGallery from './components/ImageGallery/ImageGallery.jsx';
import Loader from './components/Loader/Loader.jsx';
import Button from './components/Button/Button.jsx';
import Modal from './components/Modal/Modal.jsx';

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <Searchbar />
        <ImageGallery />
        <Loader />
        <Button />
        <Modal />
      </div>
    );
  }
}

export default App;
