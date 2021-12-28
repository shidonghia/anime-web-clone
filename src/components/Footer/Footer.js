import "./Footer.css"

function Footer() {
    return (
        <div className="container">
            <div className="row">
                <div className="footer">
                    <div className="footer-link">
                        <a href="/" className="footer-logo">
                            <img src="http://cdn.animevietsub.tv/data/logo/logoz.png" alt="Logo website" />
                        </a>

                        <ul className="footer-nav-link">
                            <li className="footer-nav-item footer-nav-item--active"><a href="/">Xem phim</a></li>
                            <li className="footer-nav-item"><a href="/">Yêu cầu anime</a></li>
                            <li className="footer-nav-item"><a href="/">Chat anime/Discord</a></li>
                            <li className="footer-nav-item"><a href="/">Thuật ngữ</a></li>
                        </ul>

                        <div className="footer-social">
                            <a href="https://www.facebook.com/" className="footer-social-icon"><i className="fa-brands fa-facebook"></i></a>
                            <a href="https://www.instagram.com/" className="footer-social-icon"><i className="fa-brands fa-instagram"></i></a>
                            <a href="https://twitter.com/" className="footer-social-icon"><i className="fa-brands fa-twitter"></i></a>
                            <a href="https://www.youtube.com/" className="footer-social-icon"><i className="fa-brands fa-youtube"></i></a>
                            <a href="https://www.linkedin.com/" className="footer-social-icon"><i className="fa-brands fa-linkedin"></i></a>
                        </div>
                    </div>

                    <div className="footer-contact">
                        <p>Liên hệ quảng cáo: badboyhtpro@gmail.com</p>
                        <p>© Copyright 2021 AnimeVietSub.TV. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer