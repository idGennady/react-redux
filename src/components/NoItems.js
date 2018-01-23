import React, {Component} from 'react';

class NoItem extends Component {
    render() {
        const {noItems} = this.props;
        return (
            <div className="col-12 text-center">
                {noItems}
            </div>
        );
    }
}

export default NoItem;