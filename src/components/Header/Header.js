import { useState } from "react"

import "./Header.css"

function Header() {
    const [animeType, setAnimeType] = useState(['TV/Series', 'Movie/OVA', 'HH Trung Quốc', 'Anime sắp chiếu', 'Anime đang chiếu', 'Anime trọn bộ'])
    const [topAnime, setTopAnime] = useState(['Yêu thích', 'Theo ngày', 'Theo tháng', 'Theo mùa', 'Theo năm'])
    const [categoryAnime, setCategoryAnime] = useState(['Action', 'Adventure', 'Cartoon', 'Comedy', 'Dementia', 'Demons', 'Drama', 'Ecchi', 'Fantasy', 'Game', 'Harem', 'Historical', 'Horror', 'Josei', 'Kid'])
    const [seasonAnime, setSeasonAnime] = useState(['Mùa đông 2021', 'Mùa thu 2021', 'Mùa hạ 2021', 'Mùa xuân 2021', 'Mùa đông 2020', 'Mùa thu 2020', 'Mùa hạ 2020', 'Mùa xuân 2020'])
    return (
        <>
            <div className="header" >
                <div className="container">
                    <div className="row">
                        <div className="col-2">
                            <a href="/" className="header_logo" >
                                <img src="http://cdn.animevietsub.tv/data/logo/logoz.png" alt="Logo website" />
                            </a>
                        </div>

                        <div className="col-6">
                            <ul className="header_nav-link">
                                <li className="header_nav-item header_nav-item--active"><a href="/">Trang chủ</a></li>
                                <li className="header_nav-item">
                                    <a href="/">Dạng anime</a>
                                    <i className="fa-solid fa-chevron-down submenu-icon"></i>
                                    <ul className="submenu">
                                        {animeType.map((type, index) => {
                                            return (
                                                <li className="submenu-item" key={index}><a href="/">{type}</a></li>
                                            )
                                        })}
                                    </ul>
                                </li>
                                <li className="header_nav-item">
                                    <a href="/">Top anime</a>
                                    <i className="fa-solid fa-chevron-down submenu-icon"></i>
                                    <ul className="submenu">
                                        {topAnime.map((typeTop, index) => {
                                            return (
                                                <li className="submenu-item" key={index}><a href="/">{typeTop}</a></li>
                                            )
                                        })}

                                    </ul>
                                </li>
                                <li className="header_nav-item">
                                    <a href="/">Thể loại</a>
                                    <i className="fa-solid fa-chevron-down submenu-icon"></i>
                                    <ul className="submenu">
                                        {categoryAnime.map((category, index) => {
                                            return (
                                                <li className="submenu-item" key={index}><a href="/">{category}</a></li>
                                            )
                                        })}

                                    </ul>
                                </li>
                                <li className="header_nav-item">
                                    <a href="/">Season</a>
                                    <i className="fa-solid fa-chevron-down submenu-icon"></i>
                                    <ul className="submenu">
                                        {seasonAnime.map((seasonTime, index) => {
                                            return (
                                                <li className="submenu-item" key={index}><a href="/">{seasonTime}</a></li>
                                            )
                                        })}
                                    </ul>
                                </li>
                                <li className="header_nav-item">
                                    <a href="/">Thư viện</a>
                                </li>
                                <li className="header_nav-item"><a href="/">Lịch chiếu</a></li>
                            </ul>
                        </div>

                        <div className="col-3">
                            <div className="header_search">
                                <input type="text" className="header_search-box" placeholder="Tìm: tên tiếng anh, nhật, việt" />
                                <i className="fa-solid fa-magnifying-glass header_search-icon" ></i>
                            </div>

                        </div>

                        <div className="col-1">
                            <div className="header_button">
                                <button className="header_login-button">Đăng nhập</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header