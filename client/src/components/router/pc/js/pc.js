import React from 'react';
import '../css/pc.css';

class Pc extends React.Component {
    render () {
        return (
            <div className="pc-mainDiv">
                <div className="pc-titleDiv">
                    <div className="pc-titleText">
                        <span className="pc-pcText">PC</span>
                        <span className="pc-cateText">카테고리</span>
                    </div>
                    <div className="pc-titleLine"></div>
                </div>
                <div className="pc-contentsDiv">
                    <div className="pc-topBoxs">
                        <div className="pc-box">
                            <div className="pc-shumnailDiv"></div>
                            <div className="pc-boxTextDiv">
                                <span>GAME TITLE</span>
                                <span>평점 4.8</span>
                                <span>카테고리:전투,멀티</span>
                            </div>
                        </div>
                        <div className="pc-box">
                            <div className="pc-shumnailDiv"></div>
                            <div className="pc-boxTextDiv">
                                <span>GAME TITLE</span>
                                <span>평점 4.8</span>
                                <span>카테고리:전투,멀티</span>
                            </div>
                        </div>
                        <div className="pc-box">
                            <div className="pc-shumnailDiv"></div>
                            <div className="pc-boxTextDiv">
                                <span>GAME TITLE</span>
                                <span>평점 4.8</span>
                                <span>카테고리:전투,멀티</span>
                            </div>
                        </div>
                    </div>
                    <div className="pc-bottomBoxs">
                    <div className="pc-box">
                            <div className="pc-shumnailDiv"></div>
                            <div className="pc-boxTextDiv">
                                <span>GAME TITLE</span>
                                <span>평점 4.8</span>
                                <span>카테고리:전투,멀티</span>
                            </div>
                        </div>
                        <div className="pc-box">
                            <div className="pc-shumnailDiv"></div>
                            <div className="pc-boxTextDiv">
                                <span>GAME TITLE</span>
                                <span>평점 4.8</span>
                                <span>카테고리:전투,멀티</span>
                            </div>
                        </div>
                        <div className="pc-box">
                            <div className="pc-shumnailDiv"></div>
                            <div className="pc-boxTextDiv">
                                <span>GAME TITLE</span>
                                <span>평점 4.8</span>
                                <span>카테고리:전투,멀티</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Pc;