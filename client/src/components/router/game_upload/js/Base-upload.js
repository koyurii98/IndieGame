import React from 'react';
import '../css/baseupload.css';
import Resource from './Resource';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Upload from './Upload';
import Info from './Info'

class Basepload extends React.Component {
    render () {
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
                        <div className="upload-game">
                            <span className="upload-game-title">게임업로드</span>
                            <span className="upload-next">▶</span>
                        </div>
                        <div className="upload-resource" onClick="resource">
                            <span className="upload-resource-title">게임리소스</span>
                            <span className="upload-next">▶</span>
                        </div>
                        <div className="upload-info">
                            <span className="upload-game-title">게임설명</span>
                            <span className="upload-next">▶</span>
                        </div>
                            <div className="upload-upload">
                            <span className="upload-game-title">최종 업로드</span>
                        </div>
                    </div>
                </div>
                <div className="base-upload">
                    <div className="base-uploadDiv">
                        <Route exact path="/upload">  
                            <Upload></Upload>
                        </Route>
                        <Route path="/upload/re">
                            <Resource></Resource>
                        </Route>
                        <Route path="/upload/info">
                            <Info></Info>
                        </Route>
                    </div>
                </div>
            </div>
        )
    }

}

export default Basepload;