import { connect } from 'react-redux'
import React, { Component } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { KeyboardAvoidingView, FlatList } from 'react-native'
import { Header } from 'react-native-elements'
import Todo from './src/components/Todo'
import TodoReducer from './src/reducers'
import AddTodo from './src/components/AddTodo'
import { actionTypes, addTodoAction, deleteTodoAction, toggleTodoAction} from './src/actions'

const mapStateToProps = state => {
  console.log(state)
  return {
    todoList: state.todoList
  }
}

const mapDispatchToProps = dispatch => ({
  [actionTypes.ADD_TODO]: todo => dispatch(addTodoAction(todo)),
  [actionTypes.DELETE_TODO]: id => dispatch(deleteTodoAction(id)),
  [actionTypes.TOGGLE_TODO]: id => dispatch(toggleTodoAction(id))
})
class TodoList extends Component {
  render() {
    return (
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
        <Header centerComponent={{ text: 'TODOリスト', style: { color: '#fff'}}} />
        <FlatList
          style={{flex: 1}}
          data={this.props.todoList}
          keyExtractor={(_, idx) => idx.toString()}
          renderItem={(v) => (
            <Todo item={v.item}
                  onToggle={(id) => this.props[actionTypes.TOGGLE_TODO](id)} 
                  onDelete={(id) => this.props[actionTypes.DELETE_TODO](id)} />
          )}
        />
        <AddTodo onSubmit={(newTodoLabel) => this.props[actionTypes.ADD_TODO](newTodoLabel)} />
      </KeyboardAvoidingView>
    )
  }
}

const ConnectedTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)

export default class App extends Component {
  render() {
    const store = createStore(TodoReducer)
    return (
      <Provider store={store}>
        <ConnectedTodoList />
      </Provider>
    )
  }
}