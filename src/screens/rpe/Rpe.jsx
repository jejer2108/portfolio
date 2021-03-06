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
import lvm from '../../images/lvm.png'





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

        <div>
         <img src={lvm}  alt="logo icon"/>
        </div>

        <p>
            La Vitrine Medicale est une entreprise en activit?? depuis 23 ans. Implant??e sur l'aire toulonnaise, elle est sp??cialis??e dans le secteur d'activit?? du commerce de d??tail d'articles m??dicaux , orthop??diques, et d'installation de mat??riels m??dicales pour professionnels et particuliers. 
            Son effectif  comprend une quinzaine de salari??s. Sur l'ann??e 2021 elle r??alise un chiffre d'affaires d'environ 3 900 000,00 ???. 
            Pour continuer et ??voluer son d??veloppement dans la r??gion, deux nouveaux magasins se sont install??s, ?? la Valette-du-var (83160) et la Seyne-sur-mer (83500).
            L'emplacement de ses deux nouveaux magasins permet de recouvrir une grande partir de la r??gion toulonnaise mais aussi de toucher une client??le plus ??loign??e. 

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