import styles from '../styles/track.module.css';

export default function Track({song, sign, onHover}) {
    return (
        <>
            {song} title (artistName) <br/>
            Album Name
            <span className={styles.right}
                onMouseOver={onHover}
                onMouseOut={onHover}
            >{sign}</span>
            <hr/>
        </>
    )
}