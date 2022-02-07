import PropTypes from 'prop-types';

const Button = ({onLoadMore}) => {
    return ( <div><button type='button' onClick={onLoadMore}>Load more </button></div> );
}
 
export default Button;