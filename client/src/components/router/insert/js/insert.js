import React from 'react';
import '../css/insert.css';
import axios from 'axios';

class Insert extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            // input 내용 안의 value 값에 대한 state
            id : "",
            pw : "",
            pwck : "",
            email : "",
            name : "",
            userNum1 : "",
            userNum2 : "",
            phoneNum : "",
            // 내용을 작성하지 않은 value 항목들에 대한 state
            idStyle : "none",
            pwStyle : "none",
            pwckStyle : "none",
            emailStyle : "none",
            nameStyle : "none",
            userNumStyle : "none",
            phoneNumStyle : "none",
        }
    }

    async handleChangeInput(e) {
        await this.setState({
            [e.target.name] : e.target.value, 
        })
    }
    async InsertCheck() {
        const { id,pw,pwck,email,name,userNum1,userNum2,phoneNum } = this.state;
        let count = 0;
        if(!(/^[a-z0-9A-Z]{6,12}$/.test(id))) {
            this.setState({
                idStyle : "flex",
            })
            count = 1;
        } else {
            this.setState({
                idStyle : "none",
            })
        }
        if(!(/^[a-z0-9A-Z~!@#$%<>^&*()\-=+_’]{8,12}$/.test(pw))) {
            this.setState({
                pwStyle : "flex",
            })
            count = 1;
        } else {
            this.setState({
                pwStyle : "none",
            })
        }
        if(!(pw.match(pwck)) || pwck.length < 8) {
            await this.setState({
                pwckStyle : "flex",
            })
            count = 1;
        } else {
            this.setState({
                pwckStyle : "none",
            })
        }
        if(/[~!@#$%<>^&*()\-=+_’0-9]/.test(name) || name.length < 2) {
            this.setState({
                pwckStyle : "none",
                nameStyle : "flex",
            })
            count = 1;
        } else {
            this.setState({
                nameStyle : "none",
            })
        }
        if(!(/([a-z0-9_.-]+)@([/da-z.-]+)\.([a-z]{2,6})/.test(email))) {
            this.setState({
                emailStyle : "flex",
            })
            count = 1;
        } else {
            this.setState({
                emailStyle : "none",
            })
        }
        if(!(/^[0-9]{6}$/.test(userNum1)) || !(/^[0-9]{7}$/.test(userNum2))) {
            this.setState({
                userNumStyle : "flex",
            })
            count = 1;
        } else {
            this.setState({
                userNumStyle : "none",
            })
        }
        if(!(/^[0-9]{9,11}$/.test(phoneNum))) {
            await this.setState({
                phoneNumStyle : "flex",
            })
            count = 1;
        } else {
            this.setState({
                phoneNumStyle : "none",
            })
        }
        if(count > 0) {
            count = 0;
            return;
        }
        try {
            const result = await axios.get(`http://localhost:5000/users/one?userId=${id}`);
            if(result.data){
                alert("이미 존재하는 아이디 입니다.");
                return;
            }
            const userCreate = await axios.post("http://localhost:5000/users/insert", {
                userId : id,
                userPass : pw,
                userEmail : email,
                userPhone : phoneNum,
                userNum : userNum1 + userNum2,
            })
            alert("가입되었습니다.");
            if(userCreate.data){
                console.log("user insert create success : " + id, pw)
            } else {
                console.log("user insert create fail");
            }
        } catch (err) {
            console.log("user insert create err : " + err);
        }
    }
    render (){
        const { 
            idStyle,pwStyle,pwckStyle,
            emailStyle,nameStyle,userNumStyle,
            phoneNumStyle 
        } = this.state;
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
                            <div>
                                <span>아이디</span>
                            </div>
                            <input type="text" name="id"placeholder="6~12 영문+숫자" onChange={this.handleChangeInput.bind(this)}></input>
                            <span style={{
                                display : idStyle,
                                padding : '5px'
                            }} className="insert-regSpan">*아이디는 6~12 영문+숫자로 구성해주세요.</span>
                        </div>
                        <div className="insert-box-content">
                            <div>
                                <span>비밀번호</span>
                            </div>
                            <input type="password" name="pw" className="insert-pw" placeholder="8~12 영문+숫자+특수문자" onChange={this.handleChangeInput.bind(this)}></input>
                            <span style={{
                                display : pwStyle,
                                padding : '5px'
                            }} className="insert-regSpan">*비밀번호는 8~12자리의 영문+숫자+특수문자로 구성해주세요.</span>
                        </div>
                        <div className="insert-box-content">
                            <span>비밀번호 확인</span>
                            <input type="password"  name="pwck" onChange={this.handleChangeInput.bind(this)}></input>
                            <span style={{
                                display : pwckStyle,
                                padding : '5px'
                            
                            }} className="insert-regSpan">*비밀번호를 확인해주세요.</span>
                        </div>
                        <div className="insert-box-content">
                            <span>이름</span>
                            <input type="text" name="name" onChange={this.handleChangeInput.bind(this)}></input>
                            <span style={{
                                display : nameStyle,
                                padding : '5px'
                            }} className="insert-regSpan">*이름을 양식에 맞게 입력하여 주세요.</span>
                        </div>
                        <div className="insert-box-content">
                            <span>이메일</span>
                            <input type="text"  name="email"placeholder="ex)abc@indiegame.com" onChange={this.handleChangeInput.bind(this)}></input>
                            <span style={{
                                display : emailStyle,
                                padding : '5px'
                            }} className="insert-regSpan">*이메일을 양식에 맞게 입력하여 주세요.</span>
                        </div>
                        <div className="insert-box-content">
                            <span>주민번호</span><br/>
                            <input type="text"className="insert-input-usernumber" name="userNum1" onChange={this.handleChangeInput.bind(this)}></input>
                            <span className="hipen"> - </span>
                            <input type="text"className="insert-input-usernumber" name="userNum2" onChange={this.handleChangeInput.bind(this)}></input>
                            <span style={{
                                display : userNumStyle,
                                padding : '5px'
                            }} className="insert-regSpan">*주민번호를 다시 입력하여 주세요.</span>
                        </div>
                        <div className="insert-box-content">
                            <span>휴대폰번호</span>
                            <input type="text"placeholder="ex)01012341234" name="phoneNum"onChange={this.handleChangeInput.bind(this)}></input>
                            <span style={{
                                display : phoneNumStyle,
                                padding : '5px'
                            }} className="insert-regSpan">*휴대폰 번호를 다시 입력하여 주세요.</span>
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