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
            loginBtn : false,   // 로그인 팝업창 띄우고 없애는 값
            userData : null,    // 로그인한 유저의 아이디 값 저장
            id : "",            // 로그인 시 체크할 id 인풋 값
            pass : "",          // 로그인 시 체크할 pass 인풋 값
        }
    }
    // 상단 로그인/로그아웃 버튼 클릭 시
    clickLoginBtn() {
        const { loginBtn,userData } = this.state;
        // 이미 로그인 한 상태일 경우
        if(userData) {
            // 로컬 스토리지 값 삭제
            localStorage.removeItem("user");
            // 로그인 데이터 초기화
            this.setState({
                userData : null,
            })
            alert("로그아웃 되었습니다.");
        } else {
            // 팝업 창 제어용
            this.setState({
                loginBtn : loginBtn ? false : true,
            })
        }
    }
    // 로그인 버튼 누를 시 처리 할 이벤트
    async loginChecked() {
        const { id,pass } = this.state;
        try {
            // 로그인 하고자 하는 유저의 아이디 비밀번호 조회 및 체크
            const result = await axios.post("http://localhost:5000/users/verify",{
                userId : id,
                userPass : pass,
            });
<<<<<<< HEAD
            // 조회 성공하여 데이터가 있을 경우 -> 토큰 값을 해시 함수로 전달 받음
            if(result.data) {
                // 토큰 값 얻기 위한 api 호출
                const userToken = await axios("http://localhost:5000/tokenVerify",{
                    method : "get",
                    headers : {
                        'content-type' : 'text/json',
                        'x-access-token' : result.data     // 유저 정보 넘겨주기
                    }
                });
                // 토큰 api 호출 결과가 오류가 아닌 경우
                if(userToken.data !== "err") {
                    // 로컬 스토리지에 유저 값 추가 -> 토큰 값
                    localStorage.setItem("user",userToken.data.userId);
                    console.log(userToken.data.userId);
                    // 유저 데이터 스태이트 값에 저장
                    this.setState({
                        userData : userToken.data.userId,
                    })
                    alert("로그인 되었습니다.");
                } else {
                    alert("로그인 과정에서 오류가 발생하여 다시 로그인 하여주세요.");
                }
                // 팝업 창 내리기
=======
            if(result.data){
                console.log(result.data);
                alert("로그인 되었습니다.");
>>>>>>> origin/yuri
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
    // 인풋 값 변경에 따른 체크
    onChangeInputLogin(e) {
        this.setState({
            [e.target.name] : e.target.value,
        })
    }
    render() {
        const { loginBtn,id,pass,userData } = this.state;
        return (
            <div className="base-div">
                <Router>
                    {
                        // 로그인 버튼 누를 시 팝업 창 제어
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
                                {/* 
                                    유저 데이터가 있는지 여부에 따른 로그인/로그아웃 표시
                                    고정 적인 헤더 라인
                                    고정 적인 카테고리 라인
                                */}
                                <a href="#" className="base-loginLink" onClick={this.clickLoginBtn.bind(this)}>{ userData ? "로그아웃" : "로그인"}</a>
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