import React from 'react';
import '../css/insert.css';

class Insert extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            id : "",
            pass : "",
            passck : "",
        }
    }
    clickInserBtn() {
        console.log(this.inputDiv);
    }
    handleInput = (e) => {
        this.setState({
            [e.target.name] : e.target.value,
        })
        console.log(this.state)
    }
    render () {
        return (
            <div className="insert-mainDiv">
                <div className="insert-titleDiv">
                    <div className="insert-titleText">
                        <span className="insert-Text">회원가입</span>
                    </div>
                    <div className="insert-titleLine"></div>
                </div>
                <div className="insert-contentsDiv">
                    <div className="insert-box">
                        <div className="insert-box-content">
                            <span>아이디</span>
                            <input name="id" onChange={this.handleInput.bind(this)} type="text"></input>
                        </div>
                        <div className="insert-box-content">
                            <span>비밀번호</span>
                            <input name="pass" onChange={this.handleInput.bind(this)} type="text"></input>
                        </div>
                        <div className="insert-box-content">
                            <span>비밀번호확인</span>
                            <input name="passck" onChange={this.handleInput.bind(this)} type="text"></input>
                        </div>
                        <div className="insert-box-content">
                            <span>이름</span>
                            <input name="name" onChange={this.handleInput.bind(this)} type="text"></input>
                        </div>
                        <div className="insert-box-content">
                            <span>이메일</span>
                            <input name="email" onChange={this.handleInput.bind(this)} type="text"></input>
                        </div>
                        <div className="insert-box-content">
                            <span>주민번호</span><br/>
                            <input name="num_1" onChange={this.handleInput.bind(this)} type="text"className="insert-input-usernumber"></input>
                            <span className="hipen"> - </span>
                            <input name="num_2" onChange={this.handleInput.bind(this)} type="text"className="insert-input-usernumber"></input>
                        </div>
                        <div className="insert-box-content">
                            <span>휴대폰번호</span>
                            <input name="phone" onChange={this.handleInput.bind(this)} type="text"></input>
                        </div>
                        <div className="insert-box-content">
                            <input type="text"className="insert-input-phoneck"></input>
                            <button className="insert-phonech-btn">인증번호받기</button>
                        </div>
                        <div className="insert-box-content">
                            <button className="insert-btn" onClick={this.clickInserBtn.bind(this)}>가입하기</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Insert;