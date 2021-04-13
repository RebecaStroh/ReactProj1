import React from 'react';

const style = {
    backgroundColor: '#D3D3D3',
    border: '0px',
    padding: '10px'
};

export default class Input extends React.Component {
    constructor(props) {
        super(props);
        
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onChange(event.target.value);
    }

    render() {
        return <input style={style} type="text" onChange={this.handleChange} placeholder={this.props.name}/>;
    }
}