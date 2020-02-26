import React from 'react';
import '../css/main.css';

class Main extends React.Component {
    render() {
        return (
            <div className="main-mainDiv">
                <div className="main-titleDiv">
                    <div className="main-boxDiv">
                        <div className="main-leftBox">a</div>
                        <div className="main-centerBox">b</div>
                        <div className="main-rightBox">c</div>
                    </div>
                    <div className="main-ulDiv">
                        <ul className="main-ul">
                            <li> </li>
                            <li> </li>
                            <li> </li>
                            <li> </li>
                            <li> </li>
                        </ul>
                    </div>
                </div>
                <div className="main-bodyDiv">
                    <div className="main-bodylines">
                        <div className="main-bodyText">모바일 인기게임</div>
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
                        <div className="main-bodyText">모바일 신작게임</div>
                        <div className="main-bodyline"></div>
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