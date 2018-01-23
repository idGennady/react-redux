import React, {Component} from 'react';
import date from 'date-and-time';

class TodoItem extends Component {
    render() {
        const {todoItem} = this.props;

        return (
            <div className="col-4 d-flex align-items-stretch">
                <div className="info-block">
                    <button type="button" className="close" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <div className="info">
                        <h6 className="title">{todoItem.title}</h6>
                        <div className="description">{todoItem.description}</div>
                        <div>
                            <strong>Added: </strong>
                            {
                                date.format(todoItem.create_at, 'MM/DD/YYYY')
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TodoItem;