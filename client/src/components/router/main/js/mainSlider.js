 import React from 'react';
import '../css/mainSlider.css';

class MainSlider extends React.Component {
    slider(){
        
    }
    render() {
        return (
            <div className="main-mainDiv">
                <div className="main-SliderDiv">
                    <div className="main-SliderboxDiv">
                        <div className="Slider-leftBox">a</div>
                        <div className="Slider-centerBox">b</div>
                        <div className="Slider-rightBox">c</div>
                    </div>
                    <div className="Slider-ulDiv">
                        <ul className="Slider-ul">
                            <li> </li>
                            <li> </li>
                            <li> </li>
                            <li> </li>
                            <li> </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainSlider;