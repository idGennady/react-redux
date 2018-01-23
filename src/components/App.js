import React, {Component} from 'react';

import Filter from './Filter';
import TodoList from './TodoList';

class App extends Component {
    render() {
        return (
            <div className="container">
                <main className="row">
                    <Filter/>
                    <TodoList/>
                </main>
            </div>
        );
    }
}

export default App;