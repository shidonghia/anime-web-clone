import { useState, useEffect } from "react"

import AnimeCard from "../AnimeCard/AnimeCard"
import Slide from "../Slide/Slide"
import Sidebar from "../Sidebar/Sidebar"
import NewAnime from "../NewAnime/NewAnime"

import "./Body.css"

function Body() {
    const [animeRecommandList, setAnimeRecommandList] = useState([
        {
            title: "Hạt Giống Tiến Hóa: Chưa Hiểu Chuyện Gì Đời Tôi Đã Trở Nên Vô Đối",
            url: 'http://cdn.animevietsub.tv/data/poster/2021/09/21/animevsub-D3sNW0qCYe.jpg',
            lastEposide: 5,
            maxEposide: undefined,
            rating: 8.9,
            view: 123456,
            filter: ['presentSeason', 'series'],
            summary: 'Hiiragi Seiichi là một kẻ xấu xí xấu xí, đáng ghét, bẩn thỉu; đây là những lời châm biếm ném vào anh ta một cái khác về sự xuất hiện của anh ta. Đó là cuộc sống hằng ngày của Seiichi về bắt nạt, vì lý do nào đó, một ngày nào đó khi trường học ra đời, một tiếng nói rằng chính là một Thượng Đế đã nói qua hệ thống PA để chuẩn bị được đưa tới một thế giới khác. Hơn nữa, không phải Seiichi một mình, mà cả trường học. Một thế giới tưởng tượng nơi các yếu tố giống như trò chơi như cấp độ, số liệu thống kê, và kỹ năng tồn tại. Tuy nhiên, Đức Chúa Trời vẫn còn đang chuẩn bị để hoàn thành việc chuyển giao, và sẽ gửi chúng ngay khi lễ nghi triệu tập anh hùng đã sẵn sàng. Các lớp học tất cả các nhóm hình thành để chờ đợi cho việc chuyển nhượng, nhưng Seiichi một mình đã được loại bỏ và như vậy đã được triệu tập đến một khu vực khác nhau. Sau khi được vận chuyển, điều đầu tiên Seiichi đã ăn là “Fruit of Evolution”. Điều này sẽ làm thay đổi cuộc sống của anh ấy —- Câu chuyện này nói về Seiichi đã bị những bạn học của mình bắt nạt, thậm chí không được công nhận vì những thành tựu của mình, và mặc dù tất cả vẫn tồn tại và sống sót trong thế giới mới này. Kết quả là, ông bằng cách nào đó trở thành một trong những nhà vô địch. (Còn nữ anh hùng đầu tiên là Gorilla ?!)'
        },
        {
            title: "Kaginado",
            url: 'http://cdn.animevietsub.tv/data/poster/2021/10/12/animevsub-cvaDLlzrPQ.jpg',
            lastEposide: 11,
            maxEposide: undefined,
            rating: 8.1,
            view: 14123,
            filter: ['presentSeason', 'movie'],
            summary: 'Một anime truyền hình xen kẽ với sự thể hiện chibi của các nhân vật từ Kanon, Air, Clannad, Little Busters !, viết lại và nhượng quyền thương mại Key bổ sung sẽ được tiết lộ vào một ngày sau đó.'
        },
        {
            title: "180 Byou de Kimi no Mimi wo Shiawase ni Dekiru ka?",
            url: 'http://cdn.animevietsub.tv/data/poster/2021/09/14/animevsub-8tju4UhnuT.jpg',
            lastEposide: 10,
            maxEposide: undefined,
            rating: 9.3,
            view: 24323,
            filter: ['presentSeason', 'manhua'],
            summary: 'Câu chuyện xoay quanh Akari (biệt danh: Gekkō-san), người mua phải một chiếc mic giả và bước vào thế giới ASMR. Cũng như người bạn thuở thơ ấu của cô ấy, "người bạn" cũng bắt đầu tìm hiểu về ASMR.ASMR hay Autonomous Sensory Meridian Response, với tên tiếng Việt là "Phản ứng kích thích cảm giác tự động" là thuật ngữ tả cảm giác râm ran lan từ gáy xuống sống lưng, đi khắp cơ thể và chân tay, có được khi nghe những âm thanh hay tiếng động nhất định. ASMR tạo ra cảm giác dễ chịu, thư giãn, một số trường hợp có thể giúp con người dễ đi vào giấc ngủ.'
        },
        {
            title: "Tsuki to Laika to Nosferatu",
            url: 'http://cdn.animevietsub.tv/data/poster/2021/09/04/animevsub-jvOva8X9GW.jpg',
            lastEposide: 12,
            maxEposide: 12,
            rating: 9.3,
            view: 24323,
            filter: ['presentSeason', 'series'],
            summary: 'Phi hành gia đầu tiên trong lịch sử loài người là một cô gái ma cà rồng. Sau khi Thế chiến thứ hai kết thúc, các siêu cường phân chia thế giới, Cộng hòa Liên bang Ziitra ở phía Đông và Vương quốc Anh Aack ở phía Tây, đã chuyển tham vọng lãnh thổ của họ sang không gian. Cả hai quốc gia đã và đang cạnh tranh gay gắt để phát triển. Lịch sử phương Đông 1960. Gergiev, lãnh đạo chính của Cộng hòa, công bố chương trình bay không gian có người lái Dự án Mechtat (Giấc mơ), nếu thành công, sẽ là kỳ tích đầu tiên của loài người. Vào thời điểm đó, Lev Leps, một ứng viên phi hành gia thay thế, được lệnh thực hiện một nhiệm vụ tối mật. "Dự án Nosferatu" —một chương trình thử nghiệm với ma cà rồng trước khi thực hiện các nhiệm vụ có người lái — sẽ sử dụng Irina Luminesk làm đối tượng thử nghiệm, và Lev sẽ theo dõi và huấn luyện cô ấy. Ngay cả khi bị cản trở bởi những bức tường của chủng tộc và bản ngã của các quốc gia, Lev và Irina vẫn chia sẻ một tình cảm chân thành khi họ hướng tới vũ trụ.'
        },
        {
            title: "Cô Gái Có Thể Nhìn Thấy Chúng",
            url: 'http://cdn.animevietsub.tv/data/poster/2021/08/31/animevsub-1UHcY54wnF.jpg',
            lastEposide: 12,
            maxEposide: 12,
            rating: 9.4,
            view: 24323,
            filter: ['presentSeason', 'movie'],
            summary: 'Miko là một học sinh trung học điển hình có cuộc sống đảo lộn khi cô đột nhiên bắt đầu nhìn thấy những con quái vật ghê rợn và gớm ghiếc. Mặc dù hoàn toàn vô cùng sợ hãi, Miko vẫn tiếp tục cuộc sống hàng ngày của mình, giả vờ không để ý đến nỗi kinh hoàng đang bao quanh cô. Cô phải chịu đựng nỗi sợ hãi để giữ cho mình và người bạn Hana thoát khỏi nguy hiểm, ngay cả khi điều đó có nghĩa là phải đối mặt với điều tồi tệ nhất. Pha trộn giữa hài kịch và kinh dị, Mieruko-chan kể câu chuyện về một cô gái cố gắng đối phó với điều huyền bí bằng cách tỏ ra thờ ơ với nó'
        },
        {
            title: "Takt Op. Destiny",
            url: 'http://cdn.animevietsub.tv/data/poster/2021/08/25/animevsub-kqFvMSxGgx.jpg',
            lastEposide: 12,
            maxEposide: 12,
            rating: 9.4,
            view: 24323,
            filter: ['presentSeason', 'manhua'],
            summary: 'Xoay quanh câu chuyện về Takt, một nhạc trưởng, đã hợp tác với một Musicart tên Unmei. Cậu mong muốn âm nhạc được quay trở lại thế giới, còn Unmei mong muốn phá hủy D2. Vì thế cả hai đã cùng đồng hành để có thể thực hiện mục tiêu của mỗi người.'
        },
    ])

    const [isDisplayScrollToTop, setIsDisplayScrollToTop] = useState(false)

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    useEffect(() => {
        const handleScrollToTop = () => {
            setIsDisplayScrollToTop(window.scrollY > 600)
        }

        window.addEventListener('scroll', handleScrollToTop)

        return () => {
            window.removeEventListener('scroll', handleScrollToTop)
        }
    }, [])

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
                                                    <div className="col-6 col-sm-4 col-lg-2" key={index}>
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
                            <div className="col-12 col-lg-9">
                                <Slide />
                                <NewAnime />
                            </div>
                            <div className="col-12 col-lg-3">
                                <Sidebar />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {
                isDisplayScrollToTop && (
                    <div className="scrollToTop" onClick={() => window.scroll(0,0)}>
                        <i className="fa-solid fa-angles-up"></i>
                        <span>Về đầu trang</span>
                    </div>
                )
            }

        </>
    )
}

export default Body