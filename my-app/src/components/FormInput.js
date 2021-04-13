import React from 'react';
import SentButton from './SentButton';
import Input from './Input';

const style = {
    display: 'grid',
    justifyContent: 'center',
    gridGap: '10px',
    padding: '.78571429em .78571429em .78571429em'
};

export default class FormInput extends React.Component {
    constructor(props) {
        super(props);

        this.data = {nome: '', idade: '', numero: ''}
    }

    handleNameChange = (event) => {
        this.data.nome = event;
    }
    handleAgeChange = (event) => {
        this.data.idade = event;
    }
    handleNumberChange = (event) => {
        this.data.numero = event;
    }
    handleSubmit = (event) => {
        this.props.onChange(this.data);
    }

    render() {
        return (
            <div style={style}>  
                <Input name="Nome" onChange={this.handleNameChange}/>
                <Input name="Idade" onChange={this.handleAgeChange}/>
                <Input name="Numero" onChange={this.handleNumberChange}/>
                <SentButton onSubmit={this.handleSubmit}/>
            </div>
        )
    }
}