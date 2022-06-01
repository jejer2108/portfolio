import siteVitrine from '../images/projectsicon/rpc/siteVitrine.gif'
import AppliVisiteurs from '../images/projectsicon/rpc/RP2.png'
import AppliFrais from '../images/projectsicon/rpc/RP1.png'
import GSB from '../images/logoGSB.png'
import AppliVisiteurspdf from '../pdf/RP2.pdf'
import GSBpdf from '../pdf/GSB.pdf'
import AppliFraispdf from '../pdf/RP1.pdf'



const competenceData =[
  
  
    {
        image: GSB,
        desc: 'presentation Gsb ',
        summary: " documentation de l'entreprise GSB", 
        tech: '',
        pdf: GSBpdf,
    },
    {
        image: siteVitrine,
        link: '',
        desc: 'site vitrine ',
        summary: "Site vitrine de l'entreprise GALAXY SWISS BOURDIN",
        tech: 'Wordpress',
        pdf: '',
    },
    {
        image: AppliFrais,
        link: 'https://jripert.aristeecampus.org/appliFrais/',
        desc: 'APPLIFRAIS',
        summary: 'Application web  id: superuser mdp: user',
        tech: 'PHP-SQL-PhpMyAdmin',
        pdf: AppliFraispdf,
    },
    {
        image: AppliVisiteurs,
        desc: 'APPLIVISITEURS',
        summary: 'Application metier (client lourd)',
        tech: 'PyQt5-SqlLite-API',
        pdf: AppliVisiteurspdf,
    },
]

export default competenceData