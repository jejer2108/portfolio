import React, { useState} from 'react';
import './rpe.css'
import rpeData from '../../helpers/rpeData';
import  Container  from 'react-bootstrap/Container';
import Row  from 'react-bootstrap/Row';
import  Card  from 'react-bootstrap/Card';
import  Image  from 'react-bootstrap/Image';
import  Modal  from 'react-bootstrap/Modal';
import  Button  from 'react-bootstrap/Button';
import ModalHeader from 'react-bootstrap/esm/ModalHeader';
import ModalBody from 'react-bootstrap/esm/ModalBody';
import ModalTitle from 'react-bootstrap/esm/ModalTitle';






function RPE() {
    const [modalShow, setModalShow] = useState(false);
    const [tempData, setTempData] = useState({});

    function createModal(data) {
        return(
            <Modal show={modalShow} 
            onHide={() => setModalShow(false)} 
            size="lg"
            arial-labelledby="contained-modal-title-vcenter"
            centered
            >
                <ModalHeader>
                    <ModalTitle id='contained-modal-title-vcenter'>
                        {data.desc}
                    </ModalTitle>
                </ModalHeader>
                <ModalBody>
                    <p>{data.summary}</p>
                    <Image src={data.image} style={{width: '200px'}} />   
                </ModalBody>
                    <a id="rpc_modal_link" href={data.link} target="_blank" rel='noreferrer'>Allez au site</a>
                <Modal.Footer>
                    <div>outils:</div>
                    <p style={{ fontSize: '0.7rem', marginRight: 'auto'}}>{data.tech}</p>
                    <Button onClick={() => setModalShow(false)}>fermer</Button>
                </Modal.Footer>





                
            </Modal>
        )

    }

    const mapped =  rpeData.map((e,idx) => {
        return(
            <Card key={idx} id='rpe_card_container'>
                <Image className='rpe_image'
                    onClick={() => {
                        setTempData({
                            image: e.image,
                            link: e.link,
                            desc: e.desc,
                            summary: e.summary,
                            tech: e.tech,
                        })
                        setModalShow(true)
                    }}
                src={e.image}/>
                <div className='rpe_click_info'>	&#x1F50E;&#xFE0F;</div>
                {createModal(tempData)}
            </Card>
        )
    })
    


  return (
    <div className='rpe_main_container' id='rpe'>
        <h1>REALISATIONS PROFESSIONNELLES EN ENTREPRISE</h1>
        <p>
            La Vitrine Medical est une entreprise de vente et de location materiel medicale dans le Var.
        </p>

        
        <Container fluid='lg' style={{ padding: '2rem 0'}}>
        <Row>
            {mapped}

        </Row>
        </Container>

    </div>
  )
}

export default RPE