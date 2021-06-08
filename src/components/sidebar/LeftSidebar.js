import React from 'react'
import './leftsidebar.css'
import { Devices, PeopleAltOutlined,AccessTimeOutlined, 
        StarBorderOutlined, DeleteOutline,Storage,CloudQueue, FolderShared, 
        CreateNewFolder } from '@material-ui/icons';
const LeftSidebar = () => {
    return (
        <div className="leftsidebar">
            <button className="boton"> Nuevo </button>
            <div className="left">
                <div className="items" id="active">
                    <Storage className="icon"/>
                    <p>Mi unidad</p>
                </div>
                <div className="items">
                    <Devices className="icon"/>
                    <p>Ordenadores</p>
                </div>
                <div className="items">
                    <PeopleAltOutlined className="icon"/>
                    <p>Compartido Conmigo</p>
                </div>
                <div className="items">
                    <AccessTimeOutlined className="icon"/>
                    <p>Reciente</p>
                </div>
                <div className="items">
                    <StarBorderOutlined className="icon"/>
                    <p>Destacados</p>
                </div>
                <div className="items">
                   <DeleteOutline className="icon"/>
                   <p>Papelera</p>
                </div>
            </div>
            <div className="leftbutton">
                <br/>
                <div className="items">
                    <CloudQueue className="icon"/>
                    <p>Almacenamiento</p>
                </div>
                <div className="b">
                  <button className="cuadro">Comprar espacio</button>
                </div>
            </div>
        </div>
    )
}

export default LeftSidebar
