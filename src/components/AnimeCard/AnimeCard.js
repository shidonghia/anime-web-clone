
import './AnimeCard.css'

function AnimeCard({ anime }) {
    return (
        <>
            <div className="anime-wrapper">
                <a href="/" className="anime-link">
                    <img src={anime.url} alt={anime.title} className="anime-img" />
                    <span className="anime-eposide">{anime.lastEposide === anime.maxEposide ? "Hoàn tất" : `Tập ${anime.lastEposide}`}</span>
                    <div className="anime-rating">
                        <i className="fa-solid fa-star"></i>
                        <span>{anime.rating}</span>
                    </div>
                    <h5 className="anime-title">
                        {anime.title}
                    </h5>
                    <span className="anime-view">
                        Lượt xem: {anime.view}
                    </span>
                </a>
                <span className="anime-play-button">
                    <i className="fa-solid fa-circle-play"></i>
                </span>
                <div className="anime-extra-detail">
                    <h3 className="anime-extra-detail-title">{anime.title}</h3>
                    <span className="anime-extra-detail-summary">{anime.summary}</span>
                </div>
            </div>
        </>
    )
}

export default AnimeCard;