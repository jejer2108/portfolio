import siteVitrine from '../images/projectsicon/rpc/siteVitrine.gif'
import AppliFraispdf from '../pdf/rp1.pdf'
import AppliVisiteurs from '../images/projectsicon/rpc/AppliVisiteur.png'
import AppliFrais from '../images/projectsicon/rpc/AppliFrais.gif'

const competenceData =[
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
        summary: 'Appli frais ',
        tech: 'PHP-SQL-PhpMyAdmin',
        pdf: AppliFraispdf,
    },
    {
        image: AppliVisiteurs,
        link: '',
        desc: 'APPLIVISITEURS',
        summary: 'Applivisiteurs',
        tech: 'PyQt5-SqlLite-API',
        pdf: '',
    },
]

export default competenceData