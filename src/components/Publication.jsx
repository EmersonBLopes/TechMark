import styles from './../css/Publication.module.css'
import PublicationMedia from './PublicationMedia';


export default function Publication(PublicationData) {
    return (
        <div className={styles.Publication}>
            <img src={PublicationData.ProfilePicture} className={styles.ProfilePicture} alt='' />
            <div className={styles.Content}>
                <h2>{PublicationData.Tittle}</h2>
                <p>{PublicationData.Description}</p>
                <PublicationMedia {...PublicationData}/>
            </div>
        </div>
    );
}
