import React from 'react';
import '../css/baseupload.css';

class Resource extends React.Component {
    render () {
        return (
            <div className="upload-resource-row">
                <div className="upload-resource-content-col">
                    <span className="uplaod-resource-thumbnail-title">썸네일 첨부</span>
                    <div className="upload-resource-thumbnail">
                        <div className="upload-thumbnail-box">
                            <span className="upload-thumbnail-box-result">파일을 끌어다 놓거나 아래의 첨부하기 버튼을 눌러<br/>썸네일 파일을 첨부해주시길 바랍니다.</span>
                            <br/><button className="upload-thumbnail-btn">썸네일첨부</button>                       
                        </div>
                    </div>
                    <span className="upload-resource-video-title">동영상 첨부</span>
                    <div className="upload-resource-video">
                        <div className="upload-video-box">
                            <span className="upload-video-box-result">파일을 끌어다 놓거나 아래의 첨부하기 버튼을 눌러<br/>동영상 파일을 첨부해주시길 바랍니다.</span>
                            <br/><button className="upload-video-btn">동영상첨부</button>                       
                        </div>
                    </div>
                    <span className="upload-resource-img-title">이미지 첨부</span>
                    <div className="upload-resource-img">
                        <div className="upload-img-row">
                            <div className="upload-img-box">
                                <span className="upload-img-box-result">파일을 끌어다 놓거나 아래의 첨부하기 버튼을 눌러<br/>이미지 파일을 첨부해주시길 바랍니다.</span>
                                <br/><button className="upload-img-btn">동영상첨부</button>                    
                            </div>
                        <span className="upload-img-add">+</span>
                    </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default  Resource;