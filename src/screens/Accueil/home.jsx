import React from 'react'
import './home.css'
import profil from '../../images/profil.png'
import DevIcon from "devicon-react-svg";
import CV from '../../pdf/cv.pdf' ; 



function home() {
  return (
    <div className="home_container" id="home">
          <div>
          <img src={profil} alt="profil icon"/>
          </div>
          <div className="home_text">
            <h1>A propos de moi </h1>
          <div>

            
              <p>Je m’appelle Ripert jerome, je suis âgé de 19 ans. Je suis actuellement étudiant a la formation d'Aristée  Ecole Supérieure Privée / CFA, en deuxième année de BTS SIO spécialité  Services Informatiques aux Organisations spécialité en Solutions d'Infrastructure, Solutions Logicielles et Applications Métier. Depuis mes jeunes années, j’ai toujours été attiré par l’informatique et les nouvelles technologies. C’est tout naturellement que je me suis tourné vers ces études, en effectuant mes trois années de lycee en BAC Scientifique , et mes deux années d’études en BTS SIO.</p>
          </div>
        <div className='cv_text'>
            <h1>Curriculum vitae</h1>
            <p>
            <a  href={CV} target="_blank" rel="noreferrer"> Mon Curriculum Vitae</a>
            </p>
        </div>
      </div>
    </div>
  )

 
}


export default home 