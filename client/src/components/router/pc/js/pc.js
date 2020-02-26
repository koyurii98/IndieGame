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
                    <div className="pc-mainBoxs">
                        <div className="pc-box">
                            <div className="pc-shumnailDiv"></div>
                            <div className="pc-boxTextDiv">
                                <span className="pc-box-title">GAME TITLE</span>
                                <span className="pc-box-score">평점 4.8</span>
                                <span className="pc-box-cate">카테고리:전투,멀티</span>
                            </div>
                        </div>
                        <div className="pc-box">
                            <div className="pc-shumnailDiv"></div>
                            <div className="pc-boxTextDiv">
                                <span className="pc-box-title">GAME TITLE</span>
                                <span className="pc-box-score">평점 4.8</span>
                                <span className="pc-box-cate">카테고리:전투,멀티</span>
                            </div>
                        </div>
                        <div className="pc-box">
                            <div className="pc-shumnailDiv"></div>
                            <div className="pc-boxTextDiv">
                                <span className="pc-box-title">GAME TITLE</span>
                                <span className="pc-box-score">평점 4.8</span>
                                <span className="pc-box-cate">카테고리:전투,멀티</span>
                            </div>
                        </div>
                        <div className="pc-box">
                            <div className="pc-shumnailDiv"></div>
                            <div className="pc-boxTextDiv">
                                <span className="pc-box-title">GAME TITLE</span>
                                <span className="pc-box-score">평점 4.8</span>
                                <span className="pc-box-cate">카테고리:전투,멀티</span>
                            </div>
                        </div>
                        <div className="pc-box">
                            <div className="pc-shumnailDiv"></div>
                            <div className="pc-boxTextDiv">
                                <span className="pc-box-title">GAME TITLE</span>
                                <span className="pc-box-score">평점 4.8</span>
                                <span className="pc-box-cate">카테고리:전투,멀티</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Pc;