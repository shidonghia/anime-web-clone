import { useState } from "react"

import AnimeCard from "../AnimeCard/AnimeCard"
import Slide from "../Slide/Slide"
import Sidebar from "../Sidebar/Sidebar"
import NewAnime from "../NewAnime/NewAnime"

import "./Body.css"

function Body() {
    const [animeRecommandList, setAnimeRecommandList] = useState([
        {
            title: "Hạt giống tiến hóa",
            url: 'http://cdn.animevietsub.tv/data/poster/2021/09/21/animevsub-D3sNW0qCYe.jpg',
            lastEposide: 5,
            maxEposide: undefined,
            rating: 8.9,
            view: 123456
        },
        {
            title: "Hạt giống tiến hóa",
            url: 'http://cdn.animevietsub.tv/data/poster/2021/09/21/animevsub-D3sNW0qCYe.jpg',
            lastEposide: 5,
            maxEposide: 5,
            rating: 8.9,
            view: 123456
        },
        {
            title: "Hạt giống tiến hóa",
            url: 'http://cdn.animevietsub.tv/data/poster/2021/09/21/animevsub-D3sNW0qCYe.jpg',
            lastEposide: 5,
            maxEposide: undefined,
            rating: 8.9,
            view: 123456
        },
        {
            title: "Hạt giống tiến hóa",
            url: 'http://cdn.animevietsub.tv/data/poster/2021/09/21/animevsub-D3sNW0qCYe.jpg',
            lastEposide: 5,
            maxEposide: undefined,
            rating: 8.9,
            view: 123456
        },
        {
            title: "Hạt giống tiến hóa",
            url: 'http://cdn.animevietsub.tv/data/poster/2021/09/21/animevsub-D3sNW0qCYe.jpg',
            lastEposide: 5,
            maxEposide: undefined,
            rating: 8.9,
            view: 123456
        },
        {
            title: "Hạt giống tiến hóa",
            url: 'http://cdn.animevietsub.tv/data/poster/2021/09/21/animevsub-D3sNW0qCYe.jpg',
            lastEposide: 5,
            maxEposide: undefined,
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
                            <div className="anime-recommand-container">
                                <div className="container">
                                    <div className="row">
                                        <h3 className="anime-recommand-title">Anime đề xuất</h3>
                                        {
                                            animeRecommandList.map((anime, index) => {
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
                        <div className="row">     
                            <div className="col-9">
                                <Slide />
                                <NewAnime />
                            </div>
                            <div className="col-3">
                                <Sidebar />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Body