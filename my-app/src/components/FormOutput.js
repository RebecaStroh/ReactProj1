import React from 'react';

const style = {
    padding: '30px',
    width: '200px',
    overflowWrap: 'break-word',
    textAlign: 'left',
    borderLeft: '1px solid #000000'
};

export default class FormOutput extends React.Component {
    render() {
        return (
        <div style={style}>
            <p> Nome: {this.props.value.nome}</p>
            <p> Idade: {this.props.value.idade}</p>
            <p> Numero: {this.props.value.numero}</p>
        </div>
        );
    }
}