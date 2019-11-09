import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Input } from 'react-native-elements';

export default class AddTodo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ''
        }
    }
    submit() {
        this.props.onSubmit(this.state.value)
        this.setState({value: ''})
    }
    render() {
        return (
            <Input
                containerStyle={{flex: 1, justifyContent: 'flex-end'}}
                label="TODOを追加する"
                onChangeText={v => this.setState({value: v})}
                onSubmitEditing={() => this.submit()}
                value={this.state.value}
            />
        )
    }
}
AddTodo.propTypes = {
    onSubmit: PropTypes.func.isRequired
}