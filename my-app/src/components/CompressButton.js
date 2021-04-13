import React from 'react';
import icon from '../images/expandIcon.png';

const style = {
    button: {
        border: '0px',
        backgroundColor: 'white',
        width: '200px',
        height: '50px'
    },
    img: {
        width: '20px'
    }
};

export default class CompressButton extends React.Component {
    handleClick = (event) => {
        this.props.onClick(event.target.value);
        event.preventDefault();
    }

    render() {
        return (
            <button style={style.button} onClick={this.handleClick}> 
            <img src={icon} style={style.img} alt='Compress Icon'/> Mostrar/Esconder
            </button>
        );
    }
}