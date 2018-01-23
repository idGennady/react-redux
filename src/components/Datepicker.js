import React, {Component} from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

class Picker extends Component {
    constructor (props) {
        super(props);
        this.state = {
            startDate: null
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date) {
        this.setState({
            startDate: date
        });

        this.props.filterFunc()
    }

    focusInput(){
        let button = document.querySelector('button.position-absolute');
        button.style.zIndex = 1;
    }

    clearInput(){
        let button = document.querySelector('button.position-absolute');
        button.style.zIndex = 0;

        this.setState({
            startDate: null
        });
    }

    render() {
        return (
            <div className="position-relative">
                <button type="button" className="close position-absolute"
                        aria-label="Close"
                        onClick={this.clearInput}
                >
                    <span aria-hidden="true">&times;</span>
                </button>
                <DatePicker
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                    onFocus={this.focusInput}
                    className="form-control filter-date"
                />
            </div>
        );
    }
}

export default Picker;