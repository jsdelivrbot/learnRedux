import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'sample_key';

// Function based component.
// Used when you just take some data and spit some JSX out
// Can have class based component

const App = () => {
    return (
        <div>
            <SearchBar/>
        </div>
    );
};

ReactDOM.render(<App/>, document.querySelector('.container'));
