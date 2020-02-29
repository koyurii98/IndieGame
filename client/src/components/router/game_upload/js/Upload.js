import React from 'react';
import '../css/baseupload.css';


class Upload extends React.Component {
    render () {
        return (
            <div>
                <div className="upload-contentsDiv">
                <div className="upload-game-content">
                    <div className="upload-game-box">
                        <span className="upload-game-box-result">파일을 끌어다 놓거나 아래의 첨부하기 버튼을 눌러<br/>게임 파일을 첨부해주시길 바랍니다.</span>
                        <br/><button className="upload-game-btn">게임첨부</button>                       
                    </div>
                </div>
                </div>
                <div className="upload-buttons">
                    <button className="upload-nextbtn">다음</button>
                </div>
            </div>
        )
    }

}

export default Upload;