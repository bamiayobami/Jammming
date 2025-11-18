import styles from '../styles/track.module.css';

export default function Track({track, sign, onHover, onClick}) {
    return (
        <>
            {track.title} ({track.artist}) <br/>
            album: {track.album}
            <span className={styles.right}
                onMouseOver={onHover}
                onMouseOut={onHover}
                onClick={ () => {
                    let action = sign === '+' ? 'add' : 'remove';
                    onClick(track, action);
                }}
            >{sign}</span>
            <hr/>
        </>
    )
}