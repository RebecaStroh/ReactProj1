import React from 'react';
import CompressButton from './CompressButton';
import FormInput from './FormInput';
import FormOutput from './FormOutput';

const style = {
    inside: {
        display: 'grid',
        justifyContent: 'center',
        gridGap: '10px',
        padding: '.78571429em .78571429em .78571429em',
        textAlign: 'center'
    },
    outside: {
        display: 'flex',
        justifyContent: 'center',
        gridGap: '10px',
        border: '1px solid #000000',
        padding: '.78571429em .78571429em .78571429em'
    }
};

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.value = '';
        this.state = {compress: 'false'};
    }

    handleSubmit = (data) => {
        this.value = data;
        this.setState({compress: 'true'});
    }

    handleCompressClick = () => {
        this.state.compress === 'false' ? this.setState({compress: 'true'}) : this.setState({compress: 'false'})
    }

    render() {
        return (
            <div style={style.outside}>
                <div style={style.inside}>
                    <CompressButton onClick={this.handleCompressClick}></CompressButton>
                    {this.state.compress === 'false' ? <FormInput onChange={this.handleSubmit}/> : <></>}
                </div>
                {this.value !== '' ? <FormOutput value={this.value}/>  : <></>}
            </div>
        )
    }
}