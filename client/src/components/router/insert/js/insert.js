import React from 'react';
import '../css/insert.css';

class Insert extends React.Component {
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
                            <input type="text"></input>
                        </div>
                        <div className="insert-box-content">
                            <span>비밀번호</span>
                            <input type="text"></input>
                        </div>
                        <div className="insert-box-content">
                            <span>비밀번호확인</span>
                            <input type="text"></input>
                        </div>
                        <div className="insert-box-content">
                            <span>이름</span>
                            <input type="text"></input>
                        </div>
                        <div className="insert-box-content">
                            <span>이메일</span>
                            <input type="text"></input>
                        </div>
                        <div className="insert-box-content">
                            <span>주민번호</span><br/>
                            <input type="text"className="insert-input-usernumber"></input>
                            <span className="hipen"> - </span>
                            <input type="text"className="insert-input-usernumber"></input>
                        </div>
                        <div className="insert-box-content">
                            <span>휴대폰번호</span>
                            <input type="text"></input>
                        </div>
                        <div className="insert-box-content">
                            <input type="text"className="insert-input-phoneck"></input>
                            <button className="insert-phonech-btn">인증번호받기</button>
                        </div>
                        <div className="insert-box-content">
                            <button className="insert-btn">가입하기</button>
                        </div>
                    </div>
                </div>
            </div>
    )
}
}

export default Insert;