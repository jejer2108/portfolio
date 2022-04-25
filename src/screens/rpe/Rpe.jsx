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
            La Vitrine Medical est une entreprise en activité depuis 23 ans. Implantée à OLLIOULES (83190), elle est spécialisée dans le secteur d'activité du commerce de détail d'articles médicaux et orthopédiques en magasin spécialisé. 
            Son effectif est comprend une quinzaine de salariés. Sur l'année 2017 elle réalise un chiffre d'affaires de 2 659 700,00 €. 
            Le total du bilan a augmenté de 14,95 % entre 2016 et 2017. Pour continuer et evoluer son devellopement dans la region, deux nouveaux magasins se sont installes, a la valette-du-var (83160) et la seyne-sur-mer (83500).
            l'emplacement de ses deux nouveaux magasins permet de recouvrir une grande partir de la region toulonnaise mais aussi de toucher une clientele plus eloignee. 

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