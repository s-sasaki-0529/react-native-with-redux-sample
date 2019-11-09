import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { View } from 'react-native';
import { Text, Icon, CheckBox } from 'react-native-elements';

export default class Todo extends Component {
    render() {
        const item = this.props.item
        return (
            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                <CheckBox checked={item.done} onPress={() => this.props.onToggle(item.id)}/>
                <Text style={{opacity: item.done ? 0.25 : 1}}>{item.label}</Text>
                <Icon
                    containerStyle={{ marginLeft: 'auto', marginRight: 10}}
                    name='window-close'
                    type='font-awesome'
                    color='red'
                    onPress={() => this.props.onDelete(item.id)}
                />
            </View>
        )
    }
}

Todo.propTypes = {
    item: PropTypes.object.isRequired,
    onToggle: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
}