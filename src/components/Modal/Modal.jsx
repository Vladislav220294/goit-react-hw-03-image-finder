import PropTypes from 'prop-types';
import { Component } from 'react/cjs/react.production.min';
import s from '../Modal/Modal.module.css'

class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.onKeyDown )
    }
    componentWillUnmount() {
        window.removeEventListener('keydown', this.onKeyDown)
    }
    onKeyDown = e => {
            if (e.code === 'Space') {
                this.props.toggleModal()
            }
    }
    onOverlayClick = e => {
        if (e.currentTarget === e.target) {
           this.props.toggleModal()
       }
    }
    render(){ return ( <div classname={s.overlay} onClick={this.onOverlayClick}>
        <div className={s.modal}><a>
    <img onClick={this.props.toggleModal} src={this.props.largeImageURL} alt="" /></a>
  </div>
</div> )}
   
}
 
export default Modal;