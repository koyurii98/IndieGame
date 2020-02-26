import React from 'react';
import './base.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Main from './main/js/main';
import Pc from './pc/js/pc';
import Insert from './insert/js/insert';
import Detail from './detail/js/detail';

class Base extends React.Component {
    render() {
        return (
            <div className="base-div">
                <Router>
                    <div className="base-header">
                        <div className="base-lines"></div>
                        <div className="base-headerDiv">
                            <div className="base-login">
                                <Link to="/login" className="base-loginLink">로그인</Link>
                                <Link to="/insert" className="base-loginLink">회원가입</Link>
                                <Link to="/qanda" className="base-loginLink">고객센터</Link>
                            </div>
                            <div className="base-cate">
                                <Link to="/" className="base-logo">INDIEGAME</Link>
                                <Link to="/" className="base-tags">HOME</Link>
                                <Link to="/hot" className="base-tags">HOT</Link>
                                <Link to="/new" className="base-tags">NEW</Link>
                                <Link to="/pc" className="base-tags">PC</Link>
                                <Link to="/mobile" className="base-tags">MOBILE</Link>
                            </div>
                        </div>
                    </div>
                    <div className="base-main">
                        <div className="base-mainDiv">
                            <Route exact path="/">
                                <Main></Main>
                            </Route>
                            <Route path="/pc"> 
                                <Pc></Pc>
                            </Route>
                            <Route path="/insert"> 
                                <Insert></Insert>
                            </Route>
                            <Route path="/gameView"> 
                                <Detail></Detail>
                            </Route>
                        </div>
                    </div>
                    <div className="base-footer">
                        <span>footer</span>
                    </div>
                </Router>
            </div>
        );
    }
}

export default Base;