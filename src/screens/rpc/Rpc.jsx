import React, { useState} from 'react';
import './rpc.css'
import rpcData from '../../helpers/rpcData';
import  Container  from 'react-bootstrap/Container';
import Row  from 'react-bootstrap/Row';
import  Card  from 'react-bootstrap/Card';
import  Image  from 'react-bootstrap/Image';
import  Modal  from 'react-bootstrap/Modal';
import  Button  from 'react-bootstrap/Button';
import ModalHeader from 'react-bootstrap/esm/ModalHeader';
import ModalBody from 'react-bootstrap/esm/ModalBody';
import ModalTitle from 'react-bootstrap/esm/ModalTitle';
import logo from '../../images/logoGSB.png'






function RPC() {
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
                    
                    { tempData.pdf ? <a href={tempData.pdf} target='_blank' rel="noreferrer"> Telcharger la documentation</a> : null }
                    <Button onClick={() => setModalShow(false)}>fermer</Button>
                </Modal.Footer>





                
            </Modal>
        )

    }

    const mapped =  rpcData.map((e,idx) => {
        return(
            <Card key={idx} id='rpc_card_container'>
                <Image className='rpc_image'
                    onClick={() => {
                        setTempData({
                            image: e.image,
                            link: e.link,
                            desc: e.desc,
                            summary: e.summary,
                            tech: e.tech,
                            pdf: e.pdf,
                        })
                        setModalShow(true)
                    }}
                src={e.image}/>
                <div className='rpc_click_info'>	&#x1F50E;&#xFE0F;</div>
                {createModal(tempData)}
                
            </Card>
        )
    })
    


  return (
    <div className='rpc_main_container' id='rpc'>
        <h1>REALISATIONS PROFESSIONNELLES EN CENTRE</h1>
            
            
            <div>
            <img src={logo} alt="logo icon"/>
            </div>
            
            
        
            <p>
                PRESENTATION GSB
            </p>
            <p>L???industrie pharmaceutique est un secteur tr??s lucratif dans lequel le mouvement de fusion acquisition est tr??s fort. Les regroupements de laboratoires ces derni??res ann??es ont donn?? naissance ?? des entit??s gigantesques au sein desquelles le travail est longtemps rest?? organis?? selon les anciennes structures. Des d??boires divers r??cents autour de m??dicaments ou mol??cules ayant entra??n?? des complications m??dicales ont fait s?????lever des voix contre une partie de l???activit?? des laboratoires : la visite m??dicale, r??put??e ??tre le lieu d???arrangements entre l???industrie et les praticiens, et tout du moins un terrain d???influence opaque.Le laboratoire Galaxy Swiss Bourdin (GSB) est issu de la fusion entre le g??ant am??ricain Galaxy (sp??cialis?? dans le secteur des maladies virales dont le SIDA et les h??patites) et le conglom??rat europ??en Swiss Bourdin (travaillant sur des m??dicaments plus conventionnels), lui-m??me d??j?? union de trois petits laboratoires. En 2009, les deux g??ants pharmaceutiques ont uni leurs forces pour cr??er un leader de ce secteur industriel. L???entit?? Galaxy Swiss Bourdin Europe a ??tabli son si??ge administratif ?? Paris. Le si??ge social de la multinationale est situ?? ?? Philadelphie, Pennsylvanie, aux Etats-Unis.
                Une cons??quence de cette fusion, est la recherche d???une optimisation de l???activit?? du groupe ainsi constitu?? en r??alisant des ??conomies d?????chelle dans la production et la distribution des m??dicaments (en passant par une n??cessaire restructuration et vague de licenciement), tout en prenant le meilleur des deux laboratoires sur les produits concurrents. L???entreprise compte 480 visiteurs m??dicaux en France m??tropolitaine (Corse comprise), et 60 dans les d??partements et territoires d???outre-mer. Les territoires sont r??partis en 6 secteurs g??ographiques(Paris-Centre, Sud, Nord, Ouest, Est, DTOM Cara??bes-Am??riques, DTOM Asie-Afrique).</p>




        <Container fluid='lg' style={{ padding: '2rem 0'}}>
        <Row>
            {mapped}

        </Row>
        </Container>

    </div>
  )
}

export default RPC