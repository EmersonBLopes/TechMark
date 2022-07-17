import styles from './../css/PublicationsSection.module.css';
import Publication from './Publication';
import video from './../video/video01.mp4';
import image from './../img/Limpeza.jpg';
import publication from "./../data/UserPublication.json"
export default function PublicationSection(){
    return(
        <section className={styles.PublicationsSection}>
            <h2 className={styles.Tittle}>Publicações</h2>
            <div className={styles.PublicationsArea}>
                <div className={styles.Publications}>
                    {publication.map((publication) => (<Publication {...publication}/>))}
                </div>
            </div>
        </section>
    )
}