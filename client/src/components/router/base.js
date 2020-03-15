import React from 'react';
import './base.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
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
            userData : [],
            id : "",
            pass : "",
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
    async loginChecked() {
        const { id,pass } = this.state;
        try {
            const result = await axios.post("http://localhost:5000/users/verify",{
                userId : id,
                userPass : pass,
            });
            if(result.data){
                alert("로그인 되었습니다.");
                this.setState({
                    loginBtn : false
                })
            } else {
                alert("아이디 또는 비밀번호가 다릅니다.");
            }
        } catch(err) {
            console.log("user login err : " + err);
        }
    }
    onChangeInputLogin(e) {
        this.setState({
            [e.target.name] : e.target.value,
        })
    }
    render() {
        const { loginBtn,id,pass } = this.state;
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
                                <input type="text" name="id" onChange={this.onChangeInputLogin.bind(this)} value={id} className="login-id" placeholder="아이디"></input>
                                    <input type="password" name="pass" onChange={this.onChangeInputLogin.bind(this)} value={pass} className="login-pass" placeholder="비밀번호"></input>
                                    <button className="login-btn" onClick={this.loginChecked.bind(this)}><span className="login-btnText">로그인</span></button>
                                    <div className="login-etc">
                                        <div className="login-etc-etc">
                                            <input type="checkbox" className="login-ch"></input>
                                            <span className="login-etcSave">아이디저장</span>
                                        </div>
                                        <Link to="/user" className="login-etcIdPass">아이디/비밀번호 찾기</Link>
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