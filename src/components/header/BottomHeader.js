import React from 'react'
import './bottomheader.css'
import { ListAlt, InfoOutlined } from '@material-ui/icons';
const BottomHeader = () => {
    return (
        <div className="bottomheader">
            <button className="boo">
                Mi unidad
            </button>
            <div className="botones">
                <ListAlt className="icono"/>
                <InfoOutlined className="icono"/>
            </div>
        </div>
    )
}

export default BottomHeader
