import React from 'react';
import '../css/baseupload.css';

class Info extends React.Component {
    render () {
        return (
            <div>
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
                                    <span className="check-text">감자</span>
                                    <input type="checkbox" className="checkbox"/>
                                </div>
                                <div className="info-checkbox">
                                    <span className="check-text">감자</span>
                                    <input type="checkbox" className="checkbox"/>
                                </div>
                                <div className="info-checkbox">
                                    <span className="check-text">감자</span>
                                    <input type="checkbox" className="checkbox"/>
                                </div>
                                <div className="info-checkbox">
                                    <span className="check-text">감자</span>
                                    <input type="checkbox" className="checkbox"/>
                                </div>
                                <div className="info-checkbox">
                                    <span className="check-text">감자</span>
                                    <input type="checkbox" className="checkbox"/>
                                </div>
                                <textarea className="info-textarea"></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="uplaod-buttons">
                        <button className="Previousbtn">이전</button>
                        <button className="nextbtn">다음</button>
                    </div>
            </div>
        )
    }

}

export default Info;