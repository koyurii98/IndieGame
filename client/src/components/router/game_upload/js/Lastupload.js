import React from 'react';
import '../css/baseupload.css';

class Lastupload extends React.Component {
    render () {
        return (
            <div className="upload-last-content">
                <div className="upload-last-text">
                    <span>축하합니다. 업로드 최종단계에 도착하셨습니다.<br/>
                    마지막으로 빠뜨린 정보가 없는지 확인하시고<br/>
                    아래의 업로드 버튼을 누르면 최종적으로 업로드가 완성됩니다.</span>
                </div>
                <button className="upload-last-btn" type="button">
                    <span className="upload-last-btnText">업로드</span>
                </button>
            </div>
        )
    }

}

export default Lastupload;