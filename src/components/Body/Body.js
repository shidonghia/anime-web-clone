import { useState } from "react"

import AnimeCard from "../AnimeCard/AnimeCard"
import Slide from "../Slide/Slide"

import "./Body.css"

function Body() {
    const [animeList, setAnimeList] = useState([
        {
            title: "Hạt giống tiến hóa",
            url: 'http://cdn.animevietsub.tv/data/poster/2021/09/21/animevsub-D3sNW0qCYe.jpg',
            eposide: [1, 2, 3, 4, 5],
            rating: 8.9,
            view: 123456
        },
        {
            title: "Hạt giống tiến hóa",
            url: 'http://cdn.animevietsub.tv/data/poster/2021/09/21/animevsub-D3sNW0qCYe.jpg',
            eposide: [1, 2, 3, 4, 5],
            rating: 8.9,
            view: 123456
        },
        {
            title: "Hạt giống tiến hóa",
            url: 'http://cdn.animevietsub.tv/data/poster/2021/09/21/animevsub-D3sNW0qCYe.jpg',
            eposide: [1, 2, 3, 4, 5],
            rating: 8.9,
            view: 123456
        },
        {
            title: "Hạt giống tiến hóa",
            url: 'http://cdn.animevietsub.tv/data/poster/2021/09/21/animevsub-D3sNW0qCYe.jpg',
            eposide: [1, 2, 3, 4, 5],
            rating: 8.9,
            view: 123456
        },
        {
            title: "Hạt giống tiến hóa",
            url: 'http://cdn.animevietsub.tv/data/poster/2021/09/21/animevsub-D3sNW0qCYe.jpg',
            eposide: [1, 2, 3, 4, 5],
            rating: 8.9,
            view: 123456
        },
        {
            title: "Hạt giống tiến hóa",
            url: 'http://cdn.animevietsub.tv/data/poster/2021/09/21/animevsub-D3sNW0qCYe.jpg',
            eposide: [1, 2, 3, 4, 5],
            rating: 8.9,
            view: 123456
        }
    ])

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="body">
                        <div className="col-12">
                            <div className="new-eposide-anime-container">
                                <div className="container">
                                    <div className="row">

                                        {
                                            animeList.map((anime, index) => {
                                                return (
                                                    <div className="col-2" key={index}>
                                                        <AnimeCard anime={anime} />
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-9">
                            <Slide/>
                        </div>
                        <div className="col-3">

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Body