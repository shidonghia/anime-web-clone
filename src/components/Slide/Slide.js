import { useState, useEffect } from 'react'


import './Slide.css'

function Slide() {
    const [slides, setSlide] = useState([
        {
            url: "http://cdn.animevietsub.tv/data/big_banner/2021/08/28/animevsub-anAftoP2bh.jpg",
            title: "Thánh hiệp sĩ đến từ vùng tận cùng thế giới",
            star: 207,
            eposideCurrent: 11,
            eposideMax: undefined,
            year: 2021,
            summary: 'Trong một thành phố của người chết đã bị huỷ hoại từ rất lâu và cách xa nền văn minh nhân loại, có một đứa trẻ loài người đang sống ở đó. Tên cậu bé là Will, và cậu được nuôi dạy bởi ba sinh vật undead: chiến binh xương xẩu vui vẻ, Blood; nữ tu sĩ xác ướp thanh nhã, Mary; và một hồn ma pháp sư cáu kỉnh, Gus. Cả ba người họ đều dồn hết tình yêu của mình cho cậu bé, và dạy cậu tất cả những gì họ biết. Nhưng một ngày, Will bắt đầu thắc mắc: “Mình là ai?” Will phải giải đáp được bí ẩn về vùng đất chết chóc nơi phương xa này, cũng như hé lộ được bí mật về quá khứ của ba undead kia. Cậu phải biết về tình yêu và lòng nhân từ của những vị thiện thần, cũng như sự độc ác và điên rồ của những ác thần. Và khi đã biết được tất cả điều đó rồi, cậu bé sẽ bước bước đầu tiên trên con đường trở thành thánh binh.“Ta hứa với con. Dù không phải bây giờ, nhưng một ngày nào đó ta sẽ nói cho con nghe tất cả. Đây là câu chuyện về cái chết của vô số vị anh hùng. Đây là câu chuyện về cái chết của chúng ta, và cũng là lý do vì sao con lại lớn lên ở nơi này.”',
            studio: "Children's Playground Entertainment",
            category: ['Anime bộ', 'Action', 'Fantasy', 'Adventure']
        },
        {
            url: "http://cdn.animevietsub.tv/data/big_banner/2021/08/25/animevsub-F3r6dQzqhn.jpg",
            title: "Takt Op. Destiny",
            star: 637,
            eposideCurrent: 11,
            eposideMax: 12,
            year: 2021,
            summary: 'Xoay quanh câu chuyện về Takt, một nhạc trưởng, đã hợp tác với một Musicart tên Unmei. Cậu mong muốn âm nhạc được quay trở lại thế giới, còn Unmei mong muốn phá hủy D2. Vì thế cả hai đã cùng đồng hành để có thể thực hiện mục tiêu của mỗi người.',
            studio: "Madhouse",
            category: ['Anime bộ', 'Action', 'Fantasy', 'Music']
        },
        {
            url: "http://cdn.animevietsub.tv/data/big_banner/2021/08/25/animevsub-JensBAvsDI.jpg",
            title: "Komi không thể giao tiếp",
            star: 443,
            eposideCurrent: 11,
            eposideMax: undefined,
            year: 2021,
            summary: 'Vào ngày đầu tiên nhập học ở trường Cao trung Tư lập Itan danh tiếng, Komi Shouko lập tức nhận ngay được sự nổi tiếng từ vẻ đẹp chưa từng thấy, cùng với sự lịch thiệp tao nhã của cô mà bạn học của cô cũng phải ghen tỵ. Tuy nhiên, chỉ có Tadano Hitohito, một cậu học sinh cao trung hết sức bình thường được sắp xếp chỗ ngồi kế bên cô ấy, nhưng cậu nhận ra rằng, phía sau góc dáng thanh mai lịch thiệp trẻ trung đó, Komi lại có vấn đề nghiêm trọng trong cách giao tiếp. Từ đó, Tadano đặt ra kế hoạch giúp Komi có được 100 người bạn.',
            studio: "OLM",
            category: ['Anime bộ', 'Shounen', 'Slice of life', 'Comedy', 'School']
        },
        {
            url: "http://cdn.animevietsub.tv/data/big_banner/2021/04/19/animevsub-OB9Jdv8B3h.jpg",
            title: "Bị đuổi khỏi tổ đội anh hùng, tôi nhắm đến một cuộc sống nhàn nhã ở vùng biên cương",
            star: 513,
            eposideCurrent: 11,
            eposideMax: 13,
            year: 2021,
            summary: 'Red đã từng là một thành viên của nhóm Anh hùng, một nhóm quyền lực được định sẵn để giải cứu thế giới khỏi thế lực tà ác của Taraxon, Chúa Quỷ Raging. Điều đó là đã từng, cho đến khi một trong những đồng đội của anh ta đuổi anh ta ra khỏi đội.Với hy vọng có thể sống một cuộc sống dễ dàng ở biên giới, mục tiêu mới của Red là mở một tiệm thuốc tây.Tuy nhiên, việc giữ bí mật về cuộc sống trước đây của anh có thể không đơn giản như anh nghĩ.Đặc biệt là khi Rit xinh đẹp, một nhà thám hiểm xuất hiện và yêu cầu chuyển đến sống cùng anh ta!',
            studio: "Studio Flad",
            category: ['Anime bộ', 'Fantasy', 'Slice of life', 'Adventure']
        },
        {
            url: "http://cdn.animevietsub.tv/data/big_banner/2021/08/27/animevsub-aiEWoJRHEA.jpg",
            title: "Người Đàn Anh Khó Chịu Của Tôi",
            star: 224,
            eposideCurrent: 10,
            eposideMax: 12,
            year: 2021,
            summary: 'Igarashi là một nữ nhân viên văn phòng trẻ chăm chỉ. Takeda là senpai của cô ấy trong công việc, nhưng anh ta luôn làm cô khó chịu – nhưng cô lại thấy mình ngày càng gần gũi với anh ấy hơn. Mỗi ngày tràn ngập những khoảnh khắc lãng mạn khi Igarashi cố gắng cân bằng giữa công việc, cuộc sống và tình yêu.',
            studio: "Doga Kobo",
            category: ['Anime bộ', 'Romance', 'Slice of life', 'Comedy']
        },
        {
            url: "http://cdn.animevietsub.tv/data/big_banner/2021/02/14/animevsub-CqY1Th7yva.jpg",
            title: "Thanh Gươm Diệt Quỷ: Phố Đèn Đỏ",
            star: 291,
            eposideCurrent: 2,
            eposideMax: undefined,
            year: 2021,
            summary: 'Diễn biến của Kimetsu No Yaiba - Thanh Gươm Diệt Quỷ Season 2 sẽ dẫn đến 2 cuộc đại chiến lớn là cuộc chạm trán với Thượng Nguyệt Lục ở phố đèn đỏ và Thượng Nguyệt Ngũ và Tứ ở làng thợ rèn. ',
            studio: "Ufortable",
            category: ['Anime bộ', 'Shounen', 'Supernatural', 'Demons', 'Historical', 'Action']
        }
    ])

    const [activeSlideIndex, setActiveSlideIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            if (activeSlideIndex === slides.length - 1) {
                setActiveSlideIndex(0)
            } else {
                setActiveSlideIndex(activeSlideIndex + 1)
            }
        }, 5000)

        return () => clearInterval(interval)
    },[activeSlideIndex])

    return (
        <>
            <div className="slide-wrapper">
                {slides.map((slide, index) => {
                    return (
                        <div className={`slide ${index === activeSlideIndex ? 'slide--active' : ''}`} key={index}>
                            <a href='/'><img src={slide.url} alt={slide.title} className="slide-anime-img" /></a>
                            <div className="slide-anime-detail">
                                <a href='/'>
                                    <h3 className="slide-anime-title">
                                        {slide.title}
                                    </h3>
                                </a>
                                <span className="slide-anime-star">
                                    <i className="fa-solid fa-star me-2"></i>
                                    {slide.star}
                                </span>
                                <span className="slide-anime-eposide">
                                    <i className="fa-solid fa-clock me-2"></i>
                                    {slide.eposideCurrent}/{slide.eposideMax || '??'}
                                </span>
                                <span className="slide-anime-year ">
                                    <i className="fa-solid fa-calendar me-2"></i>
                                    {slide.year}
                                </span>
                                <span className="slide-anime-quality">
                                    HD
                                </span>
                                <div className="slide-anime-summary">
                                    {slide.summary}
                                </div>
                                <p className="slide-anime-studio">
                                    <i className="fa-solid fa-video me-2"></i>
                                    Studio: {slide.studio}
                                </p>
                                <p className="slide-anime-category">
                                    <i className="fa-solid fa-list me-2"></i>
                                    Thể loại: {slide.category.map((cate, index) => {
                                        return (
                                            <a href='/' key={`${cate}${index}${Math.floor(Math.random() * 1000 + 1)} `} className='category-link'>{cate}</a>
                                        )
                                    })}
                                </p>
                                <div href="/" className="slide-anime-watch-button">
                                    <a href='/'>
                                        <i className="fa-solid fa-caret-right me-2"></i>
                                        Xem phim
                                    </a>
                                </div>
                            </div>
                        </div>
                    )
                })}
                <div className="slide-control">
                    {
                        slides.map((slide, index) => {
                            return (
                                <span className={`slide-control-item ${index === activeSlideIndex ? 'slide-control-item--active' : ''}`} onClick={() => setActiveSlideIndex(index)} key={index} data-index={index}></span>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Slide