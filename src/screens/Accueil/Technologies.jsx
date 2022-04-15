import React from 'react'
import technologies from './technologies.css'
import DevIcon from "devicon-react-svg";
import {techs} from '../../helpers/techs'



function Technologies() {
    return (
      <div className='tech_container' id='tech'>
        <div>
            <h1 style={{textAlign: 'center'}}>Langages et outils</h1>
        </div>
        <div className="tech_cards_container">
          {techs.map((e, idx) => {
            return(
              <div key={idx} className="tech_card">
                <DevIcon className="tech_icons" icon={e.iconName}/>
                <span style={{margin: '5px', fontsize: '1,5rem'}}>{e.name}</span>
              </div>
            )
          })}

        </div>
            
      </div>
    )
  }


export default Technologies