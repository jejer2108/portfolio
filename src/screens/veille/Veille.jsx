import React, { useState} from 'react';
import './veille.css'
import veilleData from '../../helpers/veilleData';
import  Container  from 'react-bootstrap/Container';
import Row  from 'react-bootstrap/Row';
import  Card  from 'react-bootstrap/Card';
import  Image  from 'react-bootstrap/Image';
import  Modal  from 'react-bootstrap/Modal';
import  Button  from 'react-bootstrap/Button';
import ModalHeader from 'react-bootstrap/esm/ModalHeader';
import ModalBody from 'react-bootstrap/esm/ModalBody';
import ModalTitle from 'react-bootstrap/esm/ModalTitle';
import pearl from '../../images/logo/pearltrees.webp' 
import google from '../../images/logo/googlealert.png'
import twitter from '../../images/logo/twitter.png'






function VEILLE() {
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
                    <a id="veille_modal_link" href={data.link} target="_blank" rel='noreferrer'>Allez au site</a>
                <Modal.Footer>
                    <div>outils:</div>
                    <p style={{ fontSize: '0.7rem', marginRight: 'auto'}}>{data.tech}</p>
                    <Button onClick={() => setModalShow(false)}>fermer</Button>
                </Modal.Footer>





                
            </Modal>
        )

    }

    const mapped =  veilleData.map((e,idx) => {
        return(
            <Card key={idx} id='veille_card_container'>
                <Image className='veille_image'
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
                <div className='veille_click_info'>	&#x1F50E;&#xFE0F;</div>
                {createModal(tempData)}
            </Card>
        )
    })
    


  return (
    <div className='veille_main_container' id='veille'>
        <h1> VEILLE TECHNOLOGIQUE </h1>
        
        <h2> QU'EST-CE QUE LA VEILLE TECHNOLOGIQUE ? </h2>
        <p> 
            La veille technologique, ??l??ment de la veille strat??gique, consiste ?? surveiller les ??volutions techniques, les innovations dans un secteur d???activit?? donn??e. La veille technologique comprend notamment la surveillance, la collecte, le partage et la diffusion d???information permettant d???anticiper ou de s???informer sur des changements en mati??re de recherche, d??veloppement, brevet, lancement de nouveaux produits, mat??riaux, processus, concepts, innovation de fabrication, etc???. Cela a pour but d?????valuer l???impact sur l???environnement et l???organisation.
        </p>
        Les domaines de l???informatiques que je vais cibler sont le D??veloppement et la Cybers??curit?? plus particulierement.
        <p>

        </p>

        <h3> Mes outils de veille technologique :</h3>

        <div>
            <img src={pearl} alt="logo icon"/>
        </div>

        <p>
            Pearltrees est un outil en ligne intuitif et innovant de partage des favoris web.
            un outil de r??seau social par centres d???int??r??ts . Il est ?? la fois int??ressant pour organiser sa navigation ?? titre personnel mais aussi pour partager sa veille professionnelle.

            Il existe plusieurs raisons d???utiliser Pearltrees :

            L???organisation de son web (classifier, ordonner les pages web que l???on consulte).
            Le partage et la diffusion de ses pages pr??f??r??es et pour finir 
            le croisement des cartes : regarder les pages pr??f??r??es des autres et voire m??me les importer dans ses propres classement ; contribuer aux arborescences des autres et m??me cr??er des arborescences en ??quipe.
        </p>

        <div>
            <img src={google} alt="logo icon"/>
        </div>

        <p>
        Google alertes est un outil gratuit fournit par Google. 
        Les alertes Google permetd?????tre averti par e-mail ou par flux RSS des nouvelles publi??es sur le Web. 
        Ces nouvelles peuvent ??tre des pages web, des articles de presse, des blogs, des commentaires sur internet, des sujets sur les forums de discussions,etc???
        </p>

        <div>
            <img src={twitter} alt="logo icon"/>
        </div>

        <p>
        Twitter est parmi l???un des r??seaux sociaux les plus populaires de nos jours. Ce site est class?? parmi les sites les plus populaires avec des milliers de nouveaux utilisateurs chaque jour. 
        En plus de partager du contenu on peut aussi utiliser les tweets pour suivre les autres utilisateurs mais aussi suivre l'actualit??.
        Twitter m'a beaucoup servi pour faire evoluer ma veille.
        J'ai pu recuperer de nombreuses informations sur les nouvelles technologies et etre a jour sur l'actulite en matiere de cybersecurit??.
        </p>

        
        
        <Container fluid='lg' style={{ padding: '2rem 0'}}>
        <Row>
            {mapped}

        </Row>
        </Container>

    </div>
  )
}

export default VEILLE