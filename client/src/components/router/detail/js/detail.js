import React from 'react';
import '../css/detail.css';

class Detail extends React.Component {
    render () {
        return (
            <div className="detail-mainDiv">
                <div className="detail-topDiv">
                    <div className="detail-detailDiv">
                        <div className="detail-shumnailDiv"></div>
                        <div className="detail-detailTextDiv">
                            <div className="detail-gameInfoDiv">
                                <div className="detail-dirInfo"></div>
                                <div className="detail-download"></div>
                            </div>
                            <div className="detail-gameInfo"></div>
                        </div>
                    </div>
                    <div className="detail-slideDiv">
                        <div className="detail-lineDiv"></div>
                        <div className="detail-slideImageDiv">
                            <div className="detail-slideBox"></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>
                <div className="detail-bottomDiv">
                    <div></div>
                    <div></div>
                </div>
            </div>
        )
    }
}

export default Detail;