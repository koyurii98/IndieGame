import React from 'react';
import '../css/baseupload.css';

class Info extends React.Component {
    render () {
        return (
            <div className="upload-info-content">
                <div className="upload-info-box">
                    <div className="info-title">
                        <span className="info-title-text">게임이름</span>
                        <span className="info-title-text">게임키워드</span>
                        <span className="info-title-text">게임설명</span>
                    </div>
                </div>
                <div className="upload-info-write">
                    <input type="text" className="info-input"></input>
                    <div className="info-checkbox-all">
                        <div className="info-checkbox">
                            <input type="checkbox" className="checkbox"/>
                            <span className="check-text">감자</span>
                        </div>
                        <div className="info-checkbox">
                            <input type="checkbox" className="checkbox"/>
                            <span className="check-text">감자</span>
                        </div>
                        <div className="info-checkbox">
                            <input type="checkbox" className="checkbox"/>
                            <span className="check-text">감자</span>
                        </div>
                        <div className="info-checkbox">
                            <input type="checkbox" className="checkbox"/>
                            <span className="check-text">감자</span>
                        </div>
                        <div className="info-checkbox">
                            <input type="checkbox" className="checkbox"/>
                            <span className="check-text">감자</span>
                        </div>
                    </div>
                    <textarea className="info-textarea"></textarea>
                </div>
            </div>
        )
    }

}

export default Info;