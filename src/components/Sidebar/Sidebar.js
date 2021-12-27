import { useState } from 'react'

import './Sidebar.css'
import Rank from '../Rank/Rank'

function Sidebar() {
    const [listAnimeNew, setListAnimeNew] = useState([
        {
            name: 'Pokemon 2019',
            lastEposide: 91
        },
        {
            name: 'Thám tử lừng danh conan',
            lastEposide: 1090
        },
        {
            name: 'Spy x Family',
            lastEposide: 'PV'
        },
        {
            name: 'Taishou Otome Otogibanashi',
            lastEposide: 11
        },
        {
            name: 'Yuuki Yuuna là anh hùng - Chương Hoa nở rộ',
            lastEposide: 'Full'
        },
        {
            name: 'Dự Án Tuyển Chọn',
            lastEposide: 12
        },
        {
            name: 'Platinum End',
            lastEposide: 11
        },
        {
            name: 'Bảng Xếp Hạng Quốc Vương',
            lastEposide: 10
        },
        {
            name: 'Scarlet Nexus',
            lastEposide: 25
        },
        {
            name: 'Cát trắng Aquatope',
            lastEposide: 'Full'
        }
    ])

    return (
        <div className='sidebar'>
            <div className="random-anime-wrapper">
                <h4 className="random-anime-title">Hôm nay xem gì</h4>
                <p>Nếu bạn buồn phiền không biết xem gì hôm nay. Hãy để chúng tôi chọn cho bạn</p>
                <a href="/" className="random-anime-button">Xem anime ngẫu nhiên</a>
            </div>

            <div className="list-anime-new-wrapper">
                <h4 className="list-anime-new-title">Anime mới cập nhật</h4>
                <ul className="list-anime-new">
                    {
                        listAnimeNew.map((animeNew, index) => {
                            return (
                                <li className="list-anime-new-item" key={`${animeNew.name}${index}`}>
                                    <a href="/" className="list-anime-new-link">
                                        <span className="anime-new-title">{animeNew.name}</span>
                                        <span className="anime-new-eposide">{typeof animeNew.lastEposide === 'number' ? `Tập ${animeNew.lastEposide}` : animeNew.lastEposide}</span>
                                    </a>
                                </li> 
                            )
                        })
                    }
                    <li className="list-anime-new-view-more">
                        <a href="/">Xem thêm...</a>
                    </li>
                </ul>
            </div>

            <div className="anime-rank">
                <Rank />
            </div>
        </div>
    )
}

export default Sidebar