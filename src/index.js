/**
 * Created by chintan on 12/6/16.
 */

// Import React dependency for the class
import React from "react";
import ReactDOM from "react-dom";

// Create a component with some HTML
const App = () => {
    return <div> Hi! </div>;
};

// Render component and put it in DOM
ReactDOM.render(<App />, document.querySelector(".container"));