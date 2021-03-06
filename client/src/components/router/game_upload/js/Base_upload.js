import React from 'react';
import '../css/baseupload.css';
import Resource from './Resource';
import { BrowserRouter as Router,Route,Link } from 'react-router-dom';
import Upload from './Upload';
import Info from './Info'
import Lastupload from './Lastupload';

class Basepload extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            titleClassName0 : "upload-game-active",
            titleClassName1 : "upload-game",
            titleClassName2 : "upload-game",
            titleClassName3 : "upload-game",
            clickBtnNum : 0,
        }
    }
    async clickPreNexBtn(num) {
        await this.setState({
            clickBtnNum : num,
        })
        const { clickBtnNum } = this.state;
        switch(clickBtnNum){
            case 0 : this.setState({
                titleClassName0 : "upload-game-active",
                titleClassName1 : "upload-game",
                titleClassName2 : "upload-game",
                titleClassName3 : "upload-game",
            });
            break;
            case 1 : this.setState({
                titleClassName0 : "upload-game",
                titleClassName1 : "upload-game-active",
                titleClassName2 : "upload-game",
                titleClassName3 : "upload-game",
            });
            break;
            case 2 : this.setState({
                titleClassName0 : "upload-game",
                titleClassName1 : "upload-game",
                titleClassName2 : "upload-game-active",
                titleClassName3 : "upload-game",
            });
            break;
            case 3 : this.setState({
                titleClassName0 : "upload-game",
                titleClassName1 : "upload-game",
                titleClassName2 : "upload-game",
                titleClassName3 : "upload-game-active",
            });
            break;
        }
    }
    render () {
        const { titleClassName0,titleClassName1,titleClassName2,titleClassName3, clickBtnNum } = this.state;
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
                        <div className={titleClassName0}>
                            <span className="upload-game-title">게임업로드</span>
                            <span className="upload-next">▶</span>
                        </div>
                        <div className={titleClassName1}>
                            <span className="upload-game-title">게임리소스</span>
                            <span className="upload-next">▶</span>
                        </div>
                        <div className={titleClassName2}>
                            <span className="upload-game-title">게임설명</span>
                            <span className="upload-next">▶</span>
                        </div>
                        <div className={titleClassName3}>
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
                        <Route path="/upload/lastupload">
                            <Lastupload></Lastupload>
                        </Route>
                    </div>
                </div>
                <Route exact path="/upload">
                    <div className="upload-buttons">
                        <div></div>
                        <Link to="/upload/resource"><button className="nextbtn" onClick={this.clickPreNexBtn.bind(this,1)}>다음</button></Link>
                    </div>
                </Route>
                <Route path="/upload/resource">
                    <div className="upload-buttons">
                        <Link to="/upload"><button className="Previousbtn" onClick={this.clickPreNexBtn.bind(this,0)}>이전</button></Link>
                        <Link to="/upload/info"><button className="nextbtn" onClick={this.clickPreNexBtn.bind(this,2)}>다음</button></Link>
                    </div>
                </Route>
                <Route path="/upload/info">
                    <div className="upload-buttons">
                        <Link to="/upload/resource"><button className="Previousbtn" onClick={this.clickPreNexBtn.bind(this,1)}>이전</button></Link>
                        <Link to="/upload/lastupload"><button className="nextbtn" onClick={this.clickPreNexBtn.bind(this,3)}>다음</button></Link>
                    </div>
                </Route>
                <Route path="/upload/lastupload">
                    <div className="upload-buttons">
                        <Link to="/upload/info"><button className="Previousbtn" onClick={this.clickPreNexBtn.bind(this,2)}>이전</button></Link>
                    </div>
                </Route>
            </div>
        )
    }

}

export default Basepload;