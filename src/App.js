import { Component } from 'react/cjs/react.production.min';
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import './App.css';
import Searchbar from './components/Searchbar/Searchbar.jsx';
import ImageGallery from './components/ImageGallery/ImageGallery.jsx';
// import Loader from './components/Loader/Loader.jsx';
// import Button from './components/Button/Button.jsx';
// import Modal from './components/Modal/Modal.jsx';

class App extends Component {
  state = {
    inputalue: '',
  };

  SubmitForm = inputalue => {
    this.setState({ inputalue });
  };
  render() {
    const { inputalue } = this.state;
    return (
      <div className="App">
        <Searchbar SubmitForm={this.SubmitForm} />
        <ImageGallery image={inputalue} />
      </div>
    );
  }
}

export default App;
