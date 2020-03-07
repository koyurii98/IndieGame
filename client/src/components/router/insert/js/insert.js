import React from 'react';
import '../css/insert.css';

class Insert extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            idReg : "none",
            id : '',
            pw : '',
            pwck : '',
            email : '',
            name : '',
            userNum1 : '',
            userNum2 : '',
            phoneNum : ''
        }
    }

    async handleChangeInput(e) {
        await this.setState({
            [e.target.name] : e.target.value, 
        })
        console.log(this.state)
    }
    async InsertCheck() {
        const { id,pw,pwck,email,name,userNum1,userNum2,phoneNum } = this.state;
        if(id.length < 6) {
            await this.setState({
                idReg : "flex",
            })
            return;
        }
    }
    render (){
        const { idReg } = this.state;
        const spanstyle = {
            color : "red",
            fontSize : "12px", 
            display : idReg,
        }
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
                            <input type="text" name="id" onChange={this.handleChangeInput.bind(this)}></input>
                            <span style={spanstyle}>*아이디를 입력해주세요.</span>
                        </div>
                        <div className="insert-box-content">
                            <span>비밀번호</span>
                            <input type="text" name="pw" onChange={this.handleChangeInput.bind(this)}></input>
                            <span style={spanstyle}>*비밀번호를 입력해주세요.</span>
                        </div>
                        <div className="insert-box-content">
                            <span>비밀번호확인</span>
                            <input type="text"  name="pwck" onChange={this.handleChangeInput.bind(this)}></input>
                            <span style={spanstyle}>*비밀번호를 확인해주세요.</span>
                        </div>
                        <div className="insert-box-content">
                            <span>이름</span>
                            <input type="text" name="name" onChange={this.handleChangeInput.bind(this)}></input>
                            <span style={spanstyle}>*이름을 입력해주세요.</span>
                        </div>
                        <div className="insert-box-content">
                            <span>이메일</span>
                            <input type="text"  name="email" onChange={this.handleChangeInput.bind(this)}></input>
                            <span style={spanstyle}>*이메일을 입력해주세요.</span>
                        </div>
                        <div className="insert-box-content">
                            <span>주민번호</span><br/>
                            <input type="text"className="insert-input-usernumber" name="userNum1" onChange={this.handleChangeInput.bind(this)}></input>
                            <span className="hipen"> - </span>
                            <input type="text"className="insert-input-usernumber" name="userNum2" onChange={this.handleChangeInput.bind(this)}></input>
                            <span style={spanstyle}>*주민번호를 입력해주세요.</span>
                        </div>
                        <div className="insert-box-content">
                            <span>휴대폰번호</span>
                            <input type="text" name="phoneNum"onChange={this.handleChangeInput.bind(this)}></input>
                            <span style={spanstyle}>*휴대폰 번호를 입력해주세요.</span>
                        </div>
                        <div className="insert-box-content">
                            <input type="text"className="insert-input-phoneck"></input>
                            <button className="insert-phonech-btn">인증번호받기</button>
                        </div>
                        <div className="insert-box-content">
                            <button className="insert-btn" onClick={this.InsertCheck.bind(this)}>가입하기</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Insert;