import React, { createRef } from 'react';
import '../css/baseupload.css';
import Resource from './Resource';
import { BrowserRouter as Router,Route,Link } from 'react-router-dom';
import Upload from './Upload';
import Info from './Info'

class Basepload extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            titleClassName : "upload-game",
        }
    }
    async componentDidMount(){
        let urls = new URL(window.location.href)
        console.log(urls.pathname)
    }
    clickPreNexBtn() {
        this.componentDidMount()
    }
    render () {
        const { titleClassName } = this.state;
        return (
            <div className="upload-mainDiv">
                <div className="upload-titleDiv">
                    <div className="upload-titleText">
                        <span className="upload-Text">게임업로드</span>
                    </div>
                    <div className="upload-titleLine"></div>
                </div>
                <div className="upload-contentsDiv">
                    <div className="upload-content-title">
                        <div className={titleClassName}>
                            <span className="upload-game-title">게임업로드</span>
                            <span className="upload-next">▶</span>
                        </div>
                        <div className={titleClassName}>
                            <span className="upload-game-title">게임리소스</span>
                            <span className="upload-next">▶</span>
                        </div>
                        <div className={titleClassName}>
                            <span className="upload-game-title">게임설명</span>
                            <span className="upload-next">▶</span>
                        </div>
                        <div className={titleClassName}>
                            <span className="upload-game-title">최종 업로드</span>
                        </div>
                    </div>
                </div>
                <div className="base-upload">
                    <div className="base-uploadDiv">
                        <Route exact path="/upload">  
                            <Upload></Upload>
                        </Route>
                        <Route path="/upload/resource">
                            <Resource></Resource>
                        </Route>
                        <Route path="/upload/info">
                            <Info></Info>
                        </Route>
                    </div>
                </div>
                <Route exact path="/upload">
                    <div className="upload-buttons">
                        <div></div>
                        <Link to="/upload/resource"><button className="nextbtn" onClick={this.clickPreNexBtn.bind(this)}>다음</button></Link>
                    </div>
                </Route>
                <Route path="/upload/resource">
                    <div className="upload-buttons">
                        <Link to="/upload"><button className="Previousbtn" onClick={this.clickPreNexBtn.bind(this)}>이전</button></Link>
                        <Link to="/upload/info"><button className="nextbtn" onClick={this.clickPreNexBtn.bind(this)}>다음</button></Link>
                    </div>
                </Route>
                <Route path="/upload/info">
                    <div className="upload-buttons">
                        <Link to="/upload/resource"><button className="Previousbtn" onClick={this.clickPreNexBtn.bind(this)}>이전</button></Link>
                    </div>
                </Route>
            </div>
        )
    }

}

export default Basepload;