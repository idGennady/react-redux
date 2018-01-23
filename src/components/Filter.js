import React, {Component} from 'react';
import {connect} from 'react-redux';
import dateTime from 'date-and-time';

import Picker from './Datepicker'

class Filter extends Component {

    filterFunc() {
        let input = document.querySelector('input.filter-title'),
            date = document.querySelector('input.filter-date'),
            filerTodoList,
            {activeList, filters} = this.props
        ;
        console.log(date);
        console.log(date.value);

        if(input.value.length && date.value){
            filerTodoList = activeList.filter(item => {
                return item.title.toLowerCase().indexOf(input.value.toLowerCase()) !== -1
                    && dateTime.format(item.create_at, 'MM/DD/YYYY') === date.value;
            });
        }

        else if(date.value){
            filerTodoList = activeList.filter(item => {
                return dateTime.format(item.create_at, 'MM/DD/YYYY') === date.value;
            });
        }

        else {
            filerTodoList= activeList.filter(item => {
                return item.title.toLowerCase().indexOf(input.value.toLowerCase()) !== -1;
            });
        }

        filters(filerTodoList);
    }

    render() {
        return (
            <div className="block-one col-3">
                <h5>Filter by</h5>
                <form>
                    <div className="form-group">
                        <label>Title: </label>
                        <input type="text" className="form-control filter-title"
                               onChange={() => this.filterFunc()}
                        />
                    </div>
                    <div className="form-group">
                        <label>Date: </label>
                        <Picker filterFunc={() => this.filterFunc()} />
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        activeList: state.todoList.activeList
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        filters: (filterItems) => dispatch({type: 'FILTER', filterItems})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);