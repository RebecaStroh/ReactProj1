import React from 'react';

const styles = {
    backgroundColor: 'green',
    padding: '10px'
};

export default class SentButton extends React.Component {
    constructor(props) {
        super(props);
        
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        this.props.onSubmit(event.target.value);
    }

    render() {
        return <button style={styles} onClick={this.handleSubmit}> Enviar </button>;
    }
}