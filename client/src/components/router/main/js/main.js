import React from 'react';
import '../css/main.css';
import MainSlider from './mainSlider';

class Main extends React.Component {
    render() {
        return (
            <div className="main-mainDiv">
                <MainSlider></MainSlider>
                <div className="main-bodyDiv">
                    <div className="main-bodylines">
                        <div className="main-bodyText">PC 인기게임</div>
                        <div className="main-bodyline"></div>
                    </div>
                    <div className="main-bodyBoxs">
                        <div className="main-bodyBox"></div>
                        <div className="main-bodyBox"></div>
                        <div className="main-bodyBox"></div>
                        <div className="main-bodyBox"></div>
                        <div className="main-bodyBox"></div>
                    </div>
                    <div className="main-bodylines">
                        <div className="main-bodyText">PC 신작게임</div>
                        <div className="main-bodyline"></div>
                    </div>
                    <div className="main-bodyBoxs">
                        <div className="main-bodyBox"></div>
                        <div className="main-bodyBox"></div>
                        <div className="main-bodyBox"></div>
                        <div className="main-bodyBox"></div>
                        <div className="main-bodyBox"></div>
                    </div>
                    <div className="main-bodylines">
                        <div className="main-bodyText-mobile">MOBILE 인기게임</div>
                        <div className="main-bodyline-mobile"></div>
                    </div>
                    <div className="main-bodyBoxs">
                        <div className="main-bodyBox"></div>
                        <div className="main-bodyBox"></div>
                        <div className="main-bodyBox"></div>
                        <div className="main-bodyBox"></div>
                        <div className="main-bodyBox"></div>
                    </div>
                    <div className="main-bodylines">
                        <div className="main-bodyText-mobile">MOBILE 신작게임</div>
                        <div className="main-bodyline-mobile"></div>
                    </div>
                    <div className="main-bodyBoxs">
                        <div className="main-bodyBox"></div>
                        <div className="main-bodyBox"></div>
                        <div className="main-bodyBox"></div>
                        <div className="main-bodyBox"></div>
                        <div className="main-bodyBox"></div>
                    </div>
                    
                    
                </div>
            </div>
        );
    }
}

export default Main;