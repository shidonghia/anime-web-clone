import { useState } from 'react'

import './Rank.css'

function Rank() {
    const [animeRank, setAnimeRank] = useState({
        weekly: [
            {
                backgroundUrl: 'https://lh5.googleusercontent.com/vpZ2_qF3OnuNF-H3UZiRkyED0vuktypo0btszX--kSTydwOBud-FW_Ppe6mko0q_HgU=s0',
                name: 'One Piece',
                rating: 9.1,
                lastEposide: 1091,
                maxEposide: undefined,
                year: 1999,
                view: 67890
            },
            {
                backgroundUrl: 'https://lh3.googleusercontent.com/AUWZpJS76sooOT65FmaLp_NZFm-UdP_RjXf5M4KbEzTgcBA5Rb7HMas6TNbAxomZYQI=s0',
                name: 'Black Clover',
                rating: 9.5,
                lastEposide: 170,
                maxEposide: 170,
                year: 2017,
                view: 56789
            },
            {
                backgroundUrl: 'https://lh5.googleusercontent.com/SneQD9m90tllmGIQDy9MDMPZ9KJRtJ5FESIMbJT1jiT_50sH6ZVt89DIUEKnSiZtsKc=s0',
                name: 'Conan',
                rating: 9.6,
                lastEposide: 1091,
                maxEposide: undefined,
                year: 1999,
                view: 45678
            },
            {
                backgroundUrl: 'https://lh4.googleusercontent.com/yyxSoyd8CoK9IyWuWPL0tofnQs4rJ4tFURRs5WQZRgvdjWhm9PdRWFYOr_fCdenf16Y=s0',
                name: 'Thanh gươm diệt quỷ: Phố đèn đỏ',
                rating: 9.7,
                lastEposide: 2,
                maxEposide: undefined,
                year: 2021,
                view: 34567
            },
            {
                backgroundUrl: 'http://cdn.animevietsub.tv/data/poster/2021/08/25/animevsub-Upr82r3dzI.jpg',
                name: 'Komi không thể giao tiếp',
                rating: 9.4,
                lastEposide: 11,
                maxEposide: undefined,
                year: 2021,
                view: 23456
            }
        ],
        monthly: [
            {
                backgroundUrl: 'https://lh5.googleusercontent.com/vpZ2_qF3OnuNF-H3UZiRkyED0vuktypo0btszX--kSTydwOBud-FW_Ppe6mko0q_HgU=s0',
                name: 'One Piece',
                rating: 9.1,
                lastEposide: 1091,
                maxEposide: undefined,
                year: 1999,
                view: 567890
            },
            {
                backgroundUrl: 'https://lh3.googleusercontent.com/AUWZpJS76sooOT65FmaLp_NZFm-UdP_RjXf5M4KbEzTgcBA5Rb7HMas6TNbAxomZYQI=s0',
                name: 'Black Clover',
                rating: 9.5,
                lastEposide: 170,
                maxEposide: 170,
                year: 2017,
                view: 456789
            },
            {
                backgroundUrl: 'https://lh5.googleusercontent.com/SneQD9m90tllmGIQDy9MDMPZ9KJRtJ5FESIMbJT1jiT_50sH6ZVt89DIUEKnSiZtsKc=s0',
                name: 'Conan',
                rating: 9.6,
                lastEposide: 1091,
                maxEposide: undefined,
                year: 1999,
                view: 345678
            },
            {
                backgroundUrl: 'https://lh4.googleusercontent.com/yyxSoyd8CoK9IyWuWPL0tofnQs4rJ4tFURRs5WQZRgvdjWhm9PdRWFYOr_fCdenf16Y=s0',
                name: 'Thanh gươm diệt quỷ: Phố đèn đỏ',
                rating: 9.7,
                lastEposide: 2,
                maxEposide: undefined,
                year: 2021,
                view: 234567
            },
            {
                backgroundUrl: 'http://cdn.animevietsub.tv/data/poster/2021/08/25/animevsub-Upr82r3dzI.jpg',
                name: 'Komi không thể giao tiếp',
                rating: 9.4,
                lastEposide: 11,
                maxEposide: undefined,
                year: 2021,
                view: 123456
            }
        ],
        yearly: [
            {
                backgroundUrl: 'https://lh5.googleusercontent.com/vpZ2_qF3OnuNF-H3UZiRkyED0vuktypo0btszX--kSTydwOBud-FW_Ppe6mko0q_HgU=s0',
                name: 'One Piece',
                rating: 9.1,
                lastEposide: 1091,
                maxEposide: undefined,
                year: 1999,
                view: 4567890
            },
            {
                backgroundUrl: 'https://lh3.googleusercontent.com/AUWZpJS76sooOT65FmaLp_NZFm-UdP_RjXf5M4KbEzTgcBA5Rb7HMas6TNbAxomZYQI=s0',
                name: 'Black Clover',
                rating: 9.5,
                lastEposide: 170,
                maxEposide: 170,
                year: 2017,
                view: 3456789
            },
            {
                backgroundUrl: 'https://lh5.googleusercontent.com/SneQD9m90tllmGIQDy9MDMPZ9KJRtJ5FESIMbJT1jiT_50sH6ZVt89DIUEKnSiZtsKc=s0',
                name: 'Conan',
                rating: 9.6,
                lastEposide: 1091,
                maxEposide: undefined,
                year: 1999,
                view: 2345678
            },
            {
                backgroundUrl: 'https://lh4.googleusercontent.com/yyxSoyd8CoK9IyWuWPL0tofnQs4rJ4tFURRs5WQZRgvdjWhm9PdRWFYOr_fCdenf16Y=s0',
                name: 'Thanh gươm diệt quỷ: Phố đèn đỏ',
                rating: 9.7,
                lastEposide: 2,
                maxEposide: undefined,
                year: 2021,
                view: 1234567
            },
            {
                backgroundUrl: 'http://cdn.animevietsub.tv/data/poster/2021/08/25/animevsub-Upr82r3dzI.jpg',
                name: 'Komi không thể giao tiếp',
                rating: 9.4,
                lastEposide: 11,
                maxEposide: undefined,
                year: 2021,
                view: 1023456
            }
        ]
    })

    const [activeTypeRank, setActiveTypeRank] = useState('weekly')

    return (
        <>
            <div className="anime-rank-type">
                <button className={`anime-rank-type-button ${activeTypeRank === "weekly" ? "anime-rank-type-button--active" : ""}`} value='weekly' onClick={() => setActiveTypeRank('weekly')}>Tuần</button>
                <button className={`anime-rank-type-button ${activeTypeRank === "monthly" ? "anime-rank-type-button--active" : ""}`} value='monthly' onClick={() => setActiveTypeRank('monthly')}>Tháng</button>
                <button className={`anime-rank-type-button ${activeTypeRank === "yearly" ? "anime-rank-type-button--active" : ""}`} value='yearly' onClick={() => setActiveTypeRank('yearly')}>Năm</button>
            </div>

            <ul className="anime-rank-list">
                {
                    animeRank[activeTypeRank].map((anime, index) => {
                        return (
                            <li className='anime-rank-item' key={`${index}${Math.floor(Math.random() * 1000 + 1)}`}>
                                <div className="anime-rank-item-wrapper">

                                    <span className="anime-rank-item-no">#{index + 1}<i></i></span>
                                    <img src={anime.backgroundUrl} alt={anime.name} className="anime-rank-item-img" />
                                    <div className="anime-rank-item-detail">
                                        <h5 className="anime-rank-item-title">{anime.name}</h5>
                                        <span className="anime-rank-item-rating">
                                            <i className="fa-solid fa-star me-1"></i>
                                            {anime.rating}
                                        </span>
                                        <span className="anime-rank-item-eposide">
                                            <i className="fa-solid fa-clock me-1"></i>
                                            {anime.lastEposide}/{anime.maxEposide || '??'}
                                        </span>

                                        <span className="anime-rank-item-year">
                                            <i className="fa-solid fa-calendar me-1"></i>
                                            {anime.year}
                                        </span>
                                        <span className="anime-rank-item-quality">
                                            HD
                                        </span>
                                        <p className="anime-rank-item-view">Lượt xem: {anime.view}</p>
                                    </div>
                                    <i className="fa-solid fa-circle-play anime-rank-play-icon"></i>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default Rank