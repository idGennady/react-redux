import React, {Component} from 'react';
import {connect} from 'react-redux';

import TodoItem from './TodoItem'
import NoItem from "./NoItems";

class TodoList extends Component {
    render() {
        const {activeList, filterList} = this.props;
        const list = filterList && filterList.length ? filterList : activeList;

        return (
            <div className="block-two col-9">
                {
                    list.map((item, index) => {
                        return item.hasOwnProperty('id')
                            ? <TodoItem key={item.id} todoItem={item}/>
                            : <NoItem key={index} noItems={item}/>
                    })
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        activeList: state.todoList.activeList,
        filterList: state.todoList.filterList
    }
};

export default connect(mapStateToProps)(TodoList);