import React from 'react';
import './base.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Main from './main/js/main';
import Pc from './pc/js/pc';
import Insert from './insert/js/insert';
import Detail from './detail/js/detail';
import Baseupload from './game_upload/js/Base_upload';


class Base extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            loginBtn : false,
        }
    }
    clickLoginBtn() {
        const { loginBtn } = this.state;
        if(!loginBtn){
            this.setState({
                loginBtn : true
            })
        } else {
            this.setState({
                loginBtn : false
            })
        }
    }
    render() {
        const { loginBtn } = this.state;
        return (
            <div className="base-div">
                <Router>
                    {
                        loginBtn && 
                        <div className="base-loginBackDiv">
                            <div className="base-loginPop">
                                <div className="base-loginClose"><span className="base-loginCloseText" onClick={this.clickLoginBtn.bind(this)}>X</span></div>
                                <div className="base-loginLogin"><span className="base-loginLoginText">LOGIN</span></div>
                                <div className="base-loginPopMini">
                                    <input type="text" className="login-id" placeholder="아이디"></input>
                                    <input type="password" className="login-pass" placeholder="비밀번호"></input>
                                    <button className="login-btn"><span className="login-btnText">로그인</span></button>
                                    <div className="login-etc">
                                        <div className="login-etc-etc">
                                            <input type="checkbox" className="login-ch"></input>
                                            <span className="login-etcSave">아이디저장</span>
                                        </div>
                                        <Link className="login-etcIdPass">아이디/비밀번호 찾기</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                    <div className="base-header">
                        <div className="base-lines"></div>
                        <div className="base-headerDiv">
                            <div className="base-login">
                                <a href="#" className="base-loginLink" onClick={this.clickLoginBtn.bind(this)}>로그인</a>
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
                                <span className="base-tags-line">|</span>
                                <Link to="/upload" className="base-tags">GAME UPLOAD</Link>
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
                            <Route path="/upload">
                                <Baseupload></Baseupload>
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