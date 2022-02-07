import PropTypes from 'prop-types';
import { Component } from 'react/cjs/react.production.min';

class Searchbar extends Component {
    state = {
    inputalue: '',
    }
    onInputValue = e => {
        this.setState({inputalue : e.currentTarget.value.toLowerCase().trim() });
    }
    onImagesSubmit = e => {
        const { SubmitForm } = this.props;
        const { inputalue } = this.state;
        e.preventDefault();
      if (inputalue.trim() === '') { return alert('wrong name') };
      SubmitForm(inputalue);
        this.setState({ inputalue: "" });
    }
    render() {
        return (<header class="searchbar">
  <form class="form" onSubmit={this.onImagesSubmit}>
    <button type="submit" class="button">
      <span class="button-label">Search</span>
    </button>

                <input
    onChange={this.onInputValue}
    value={this.state.inputalue}
      class="input"
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
  </form>
</header> );
    }
    
}
 
export default Searchbar;