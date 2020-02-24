import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class Base extends React.Component {
    render() {
        return (
            <div>
                <div className="header">
                    <span>a</span>
                </div>
                <div className="main">
                    <Router>
                        <Route exact path="/"> 
                        </Route>
                    </Router>
                </div>
                <div className="footer">
                    <span>b</span>
                </div>
            </div>
        );
    }
}

export default Base;