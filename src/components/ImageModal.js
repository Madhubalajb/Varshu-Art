import React from 'react'
import { Modal } from 'react-bootstrap'

const ImageModal = (props) => {
    return(
        <Modal show={props.show} onHide={props.Close} centered>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
                <img src={props.src} alt="modal"/>
            </Modal.Body>
        </Modal>
    )
}

export default ImageModal