import React from 'react'
import AnimatePage from './AnimatePage';
import './css/Aprops.css'

export default function Aprops() {
  return (
    <AnimatePage>
    <div className='aprops-container'>

        <div className='aprops-div'>
           <h1 className='aprops-title' >PRESENTATION</h1>
           <p className='aprops-text'> BECOGIS est un bureau d'ingénierie spécialisé dans les études réglementaires et la réalisation 
           des projets qui concernent l'environnement , avecl'appui d'une équipe pluridisciplinaire et d'une 
           expérinece étendue dans la réalisation des études d'impact sur l'environnement  , et des études des 
           dangers des audits environnementaux , des Plans d'intervention PII ,aussi dans les dommaines de la santé 
            et sécurité au travail 
           </p>
        </div>

        <div className='aprops-line'>

        </div>
        <div className='aprops-div'>

            <h1 className='aprops-title' >QUALIFICATIONS</h1>
            <p className='aprops-text'>
                le Bureau d'étude BECOGIS spécialisé dans le domaine de l'environnement et agréé par me minister <br/>
                de l'environnement sous le numéro  79/ME/SG/2022
            </p>
        </div>
        <div className='aprops-line'>

        </div>
        <div className='aprops-div'>
            <h1 className='aprops-title' >DOMAINES D'ACTIVITE :</h1>
            <h3 className='aprops-sous-title' >EXPERTISE BUREAU ETUDE ENVIRONNEMENTALE</h3>
            <p className='aprops-text'>- etudes d'impact sur l'environnement EIE , Etude de Danger ED , Audit Environnementaux AE</p>
            <p className='aprops-text'>- Plans Interne d'Intervention PII , Plan de Sûreté Interne PSI , Mise en place du HACCP</p>
            <p className='aprops-text'>- Conseil ,étude et diagnostic  de sites 'pptentiellement' pollués</p>
            <p className='aprops-text'>- Tous dossiers réglementaires relatifs à l'environnement</p>
             <h3 className='aprops-sous-title' >EXPERTISE DIVERS:</h3>
            <p className='aprops-text'>L'accompagnement à la mise à en place de :<br/>
                - Systeme de management de la qualité ISO 9001 <br/>
                - Système de management de l'environnement ISO 14001 <br/>
                - Santé et sécurité au travail ISO 45001 <br/>
                - Etudes et suivies d'aménagement des espaces verts et traveaux forestiers <br/>
            </p>

             <h3 className='aprops-sous-title' >Evaluation des Risques Industriels et Contrôle Réglementaire</h3>
            <p className='aprops-text'>
                - Elaboration de la procédure d'évaluation , Diagnostic de l'éxistant et identifier la nature de risque ;<br/>
                - Etude des différents scénarios et les impacts suite à un incident , Solutions et moyens de lutte à mettre <br/>
                en ouevre 

            </p>
            <p className='aprops-text'>Mesure et Rapport des nuisances sonores</p>
        </div>


    </div>
    </AnimatePage>
  )
}
