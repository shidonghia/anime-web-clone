import { useState, useEffect } from 'react';

import AnimeCard from '../AnimeCard/AnimeCard';
import './NewAnime.css'

function NewAnime() {
    const pageLimit = 12
    const pageInRowLimit = 5

    const [filterActive, setAcitveFilter] = useState('all')

    const [animeList, setAnimeList] = useState([
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
        {
            title: "Dragon Quest: Dai no Daibouken (2020)",
            url: 'https://lh4.googleusercontent.com/6AQev_qKVM_uC-jhgTx6rIianZSaUsb1deGIZPwMcERUqh4xiKZ_48v3J6Se2cbsAsE=s0',
            lastEposide: 62,
            maxEposide: undefined,
            rating: 9.4,
            view: 24323,
            filter: ['presentSeason', 'series'],
            summary: 'Cách đây rất lâu, có một kiếm sĩ dũng cảm được biết đến với cái tên đơn giản là "anh hùng". Có một con quỷ đã gây ra đau khổ cho mọi người. Người anh hùng và những người bạn đồng hành của anh ta đã đến để thách thức con quỷ trong một trận chiến và bằng cách kết hợp sức mạnh của họ, trận chiến đã kết thúc nhanh chóng. Không có ai xung quanh để gây rắc rối, hòn đảo trở thành một nơi yên tĩnh, nơi mọi người có thể sống với nhau trong hòa bình.Vài năm sau, con quỷ được hồi sinh. Nhân vật chính ngày nay của chúng ta, Dai, sống trên một hòn đảo xa xôi ở vùng biển phía Nam và ước mơ trở thành một anh hùng vĩ đại. Khi nghe tin về sự hồi sinh của con quỷ, Dai và những người bạn của mình đã tự mình hành động để ngăn chặn hắn và thế lực tà ác đã hồi sinh hắn. Trên đường đi, Dai khám phá ra danh tính của "anh hùng", sự thật đằng sau thế lực xấu xa đã hồi sinh con quỷ, và sức mạnh tiềm ẩn của chính Dai đã xuất hiện trong thời gian nguy hiểm.'
        },
        {
            title: "Kỉ Nguyên Trigger Phần 3",
            url: 'http://cdn.animevietsub.tv/data/poster/2021/08/25/animevsub-NnePFaKWNk.jpg',
            lastEposide: 11,
            maxEposide: undefined,
            rating: 9.4,
            view: 24323,
            filter: ['presentSeason', 'movie'],
            summary: 'Phần thứ 3 của World Trigger nè!'
        },
        {
            title: "Jahy Vĩ Đại Này Không Nản Lòng Đâu!",
            url: 'https://lh5.googleusercontent.com/IRxF1Y9Efnd_5LsLqpFvBNAPDUl9MKNXs3C-I6tIceS6cJp35sttWoFAQHuNgMuCd0Q=s0',
            lastEposide: 13,
            maxEposide: 13,
            rating: 9.4,
            view: 24323,
            filter: ['presentSeason', 'manhua'],
            summary: 'Jahy-sama, trợ lý của chúa quỷ, là người được toàn thể vương quốc loài quỷ khiếp sợ. Trong một trận giao tranh với nữ pháp sư để bảo vệ vương quốc đang bị tấn công, viên ngọc huyền bí của Jahy-sama đã vỡ, kéo theo sự biến mất của ma thuật và toàn bộ vương quốc. Cô mất đi toàn bộ sức mạnh và bị teo nhỏ thành một bé loli dễ thương ở thế giới con người. Với mục tiêu hồi sinh chúa quỷ và khôi phục vương quốc, cô chiến đấu từng ngày với cuộc sống thiếu thốn, nghèo túng, nhưng cô sẽ không nản chí!'
        },
        {
            title: "Build Divide: Code Black",
            url: 'http://cdn.animevietsub.tv/data/poster/2021/09/21/animevsub-rkG9gzYiye.jpg',
            lastEposide: 11,
            maxEposide: undefined,
            rating: 9.4,
            view: 24323,
            filter: ['presentSeason', 'series'],
            summary: '“Tôi có thể nhìn thấy nó. Cách tôi có thể giành chiến thắng…” “Lần này tôi sẽ đánh bại anh ta. Vì vậy, hãy đến với tôi một lần nữa … chấp nhận! "Bloom, những bài thủ của linh hồn!"” Ở New Kyoto, một thành phố được cai quản bởi “King”, giá trị của một người được xác định bởi sức mạnh của người đó trong trò chơi thẻ giao dịch Build Divide. Tin đồn xoay quanh New Kyoto và King. “Nếu bạn đánh bại King trong Build Divide, mọi điều ước sẽ được hoàn thành.” Và để thách đấu King, người ta phải tham gia vào trận chiến TCG được gọi là Rebuild, và “Chìa khóa” phải được hoàn thành. Mọi người đều có một ước muốn mà họ mong ước hoàn thành. Teruto Kurabe, một chàng trai thề sẽ hạ gục King, và Sakura Banka, cô gái bí ẩn hướng dẫn anh ta, cả h ai lao mình vào trận chiến Rebuild. Với đấu trường New Kyoto, trận chiến của Teruto bắt đầu và những bức màn bí ẩn dần được hé lộ.'
        },
        {
            title: "86 2nd Season",
            url: 'http://cdn.animevietsub.tv/data/poster/2021/09/04/animevsub-foMKw7sK3j.jpg',
            lastEposide: 9,
            maxEposide: undefined,
            rating: 9.7,
            view: 24323,
            filter: ['presentSeason', 'movie'],
            summary: 'Phần tiếp theo 86.'
        },
        {
            title: "Taishou Otome Otogibanashi",
            url: 'http://cdn.animevietsub.tv/data/poster/2021/09/08/animevsub-z0hmUqglx8.jpg',
            lastEposide: 11,
            maxEposide: undefined,
            rating: 9.6,
            view: 24323,
            filter: ['presentSeason', 'manhua'],
            summary: 'Bộ truyện lấy bối cảnh ở thời Taisho của Nhật Bản, xoay quanh Tamahiko Shima, một thanh niên bị tai nạn mất khả năng sử dụng tay phải và hiện đang sống ở một vùng nông thôn của tỉnh Chiba để chăm sóc sức khỏe. Một ngày nọ, anh gặp Yuzuki ngây thơ và tận tụy, người mà cha của Tamahiko đã mua để làm vợ của Tamahiko. Qua cuộc gặp gỡ này, Tamahiko bi quan và thu mình bắt đầu thay đổi.'
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
        {
            title: "Dragon Quest: Dai no Daibouken (2020)",
            url: 'https://lh4.googleusercontent.com/6AQev_qKVM_uC-jhgTx6rIianZSaUsb1deGIZPwMcERUqh4xiKZ_48v3J6Se2cbsAsE=s0',
            lastEposide: 62,
            maxEposide: undefined,
            rating: 9.4,
            view: 24323,
            filter: ['presentSeason', 'series'],
            summary: 'Cách đây rất lâu, có một kiếm sĩ dũng cảm được biết đến với cái tên đơn giản là "anh hùng". Có một con quỷ đã gây ra đau khổ cho mọi người. Người anh hùng và những người bạn đồng hành của anh ta đã đến để thách thức con quỷ trong một trận chiến và bằng cách kết hợp sức mạnh của họ, trận chiến đã kết thúc nhanh chóng. Không có ai xung quanh để gây rắc rối, hòn đảo trở thành một nơi yên tĩnh, nơi mọi người có thể sống với nhau trong hòa bình.Vài năm sau, con quỷ được hồi sinh. Nhân vật chính ngày nay của chúng ta, Dai, sống trên một hòn đảo xa xôi ở vùng biển phía Nam và ước mơ trở thành một anh hùng vĩ đại. Khi nghe tin về sự hồi sinh của con quỷ, Dai và những người bạn của mình đã tự mình hành động để ngăn chặn hắn và thế lực tà ác đã hồi sinh hắn. Trên đường đi, Dai khám phá ra danh tính của "anh hùng", sự thật đằng sau thế lực xấu xa đã hồi sinh con quỷ, và sức mạnh tiềm ẩn của chính Dai đã xuất hiện trong thời gian nguy hiểm.'
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
        {
            title: "Dragon Quest: Dai no Daibouken (2020)",
            url: 'https://lh4.googleusercontent.com/6AQev_qKVM_uC-jhgTx6rIianZSaUsb1deGIZPwMcERUqh4xiKZ_48v3J6Se2cbsAsE=s0',
            lastEposide: 62,
            maxEposide: undefined,
            rating: 9.4,
            view: 24323,
            filter: ['presentSeason', 'series'],
            summary: 'Cách đây rất lâu, có một kiếm sĩ dũng cảm được biết đến với cái tên đơn giản là "anh hùng". Có một con quỷ đã gây ra đau khổ cho mọi người. Người anh hùng và những người bạn đồng hành của anh ta đã đến để thách thức con quỷ trong một trận chiến và bằng cách kết hợp sức mạnh của họ, trận chiến đã kết thúc nhanh chóng. Không có ai xung quanh để gây rắc rối, hòn đảo trở thành một nơi yên tĩnh, nơi mọi người có thể sống với nhau trong hòa bình.Vài năm sau, con quỷ được hồi sinh. Nhân vật chính ngày nay của chúng ta, Dai, sống trên một hòn đảo xa xôi ở vùng biển phía Nam và ước mơ trở thành một anh hùng vĩ đại. Khi nghe tin về sự hồi sinh của con quỷ, Dai và những người bạn của mình đã tự mình hành động để ngăn chặn hắn và thế lực tà ác đã hồi sinh hắn. Trên đường đi, Dai khám phá ra danh tính của "anh hùng", sự thật đằng sau thế lực xấu xa đã hồi sinh con quỷ, và sức mạnh tiềm ẩn của chính Dai đã xuất hiện trong thời gian nguy hiểm.'
        },
        {
            title: "Kỉ Nguyên Trigger Phần 3",
            url: 'http://cdn.animevietsub.tv/data/poster/2021/08/25/animevsub-NnePFaKWNk.jpg',
            lastEposide: 11,
            maxEposide: undefined,
            rating: 9.4,
            view: 24323,
            filter: ['presentSeason', 'movie'],
            summary: 'Phần thứ 3 của World Trigger nè!'
        },
        {
            title: "Jahy Vĩ Đại Này Không Nản Lòng Đâu!",
            url: 'https://lh5.googleusercontent.com/IRxF1Y9Efnd_5LsLqpFvBNAPDUl9MKNXs3C-I6tIceS6cJp35sttWoFAQHuNgMuCd0Q=s0',
            lastEposide: 13,
            maxEposide: 13,
            rating: 9.4,
            view: 24323,
            filter: ['presentSeason', 'manhua'],
            summary: 'Jahy-sama, trợ lý của chúa quỷ, là người được toàn thể vương quốc loài quỷ khiếp sợ. Trong một trận giao tranh với nữ pháp sư để bảo vệ vương quốc đang bị tấn công, viên ngọc huyền bí của Jahy-sama đã vỡ, kéo theo sự biến mất của ma thuật và toàn bộ vương quốc. Cô mất đi toàn bộ sức mạnh và bị teo nhỏ thành một bé loli dễ thương ở thế giới con người. Với mục tiêu hồi sinh chúa quỷ và khôi phục vương quốc, cô chiến đấu từng ngày với cuộc sống thiếu thốn, nghèo túng, nhưng cô sẽ không nản chí!'
        },
        {
            title: "Build Divide: Code Black",
            url: 'http://cdn.animevietsub.tv/data/poster/2021/09/21/animevsub-rkG9gzYiye.jpg',
            lastEposide: 11,
            maxEposide: undefined,
            rating: 9.4,
            view: 24323,
            filter: ['presentSeason', 'series'],
            summary: '“Tôi có thể nhìn thấy nó. Cách tôi có thể giành chiến thắng…” “Lần này tôi sẽ đánh bại anh ta. Vì vậy, hãy đến với tôi một lần nữa … chấp nhận! "Bloom, những bài thủ của linh hồn!"” Ở New Kyoto, một thành phố được cai quản bởi “King”, giá trị của một người được xác định bởi sức mạnh của người đó trong trò chơi thẻ giao dịch Build Divide. Tin đồn xoay quanh New Kyoto và King. “Nếu bạn đánh bại King trong Build Divide, mọi điều ước sẽ được hoàn thành.” Và để thách đấu King, người ta phải tham gia vào trận chiến TCG được gọi là Rebuild, và “Chìa khóa” phải được hoàn thành. Mọi người đều có một ước muốn mà họ mong ước hoàn thành. Teruto Kurabe, một chàng trai thề sẽ hạ gục King, và Sakura Banka, cô gái bí ẩn hướng dẫn anh ta, cả h ai lao mình vào trận chiến Rebuild. Với đấu trường New Kyoto, trận chiến của Teruto bắt đầu và những bức màn bí ẩn dần được hé lộ.'
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
        {
            title: "Dragon Quest: Dai no Daibouken (2020)",
            url: 'https://lh4.googleusercontent.com/6AQev_qKVM_uC-jhgTx6rIianZSaUsb1deGIZPwMcERUqh4xiKZ_48v3J6Se2cbsAsE=s0',
            lastEposide: 62,
            maxEposide: undefined,
            rating: 9.4,
            view: 24323,
            filter: ['presentSeason', 'series'],
            summary: 'Cách đây rất lâu, có một kiếm sĩ dũng cảm được biết đến với cái tên đơn giản là "anh hùng". Có một con quỷ đã gây ra đau khổ cho mọi người. Người anh hùng và những người bạn đồng hành của anh ta đã đến để thách thức con quỷ trong một trận chiến và bằng cách kết hợp sức mạnh của họ, trận chiến đã kết thúc nhanh chóng. Không có ai xung quanh để gây rắc rối, hòn đảo trở thành một nơi yên tĩnh, nơi mọi người có thể sống với nhau trong hòa bình.Vài năm sau, con quỷ được hồi sinh. Nhân vật chính ngày nay của chúng ta, Dai, sống trên một hòn đảo xa xôi ở vùng biển phía Nam và ước mơ trở thành một anh hùng vĩ đại. Khi nghe tin về sự hồi sinh của con quỷ, Dai và những người bạn của mình đã tự mình hành động để ngăn chặn hắn và thế lực tà ác đã hồi sinh hắn. Trên đường đi, Dai khám phá ra danh tính của "anh hùng", sự thật đằng sau thế lực xấu xa đã hồi sinh con quỷ, và sức mạnh tiềm ẩn của chính Dai đã xuất hiện trong thời gian nguy hiểm.'
        },
        {
            title: "Kỉ Nguyên Trigger Phần 3",
            url: 'http://cdn.animevietsub.tv/data/poster/2021/08/25/animevsub-NnePFaKWNk.jpg',
            lastEposide: 11,
            maxEposide: undefined,
            rating: 9.4,
            view: 24323,
            filter: ['presentSeason', 'movie'],
            summary: 'Phần thứ 3 của World Trigger nè!'
        },
        {
            title: "Jahy Vĩ Đại Này Không Nản Lòng Đâu!",
            url: 'https://lh5.googleusercontent.com/IRxF1Y9Efnd_5LsLqpFvBNAPDUl9MKNXs3C-I6tIceS6cJp35sttWoFAQHuNgMuCd0Q=s0',
            lastEposide: 13,
            maxEposide: 13,
            rating: 9.4,
            view: 24323,
            filter: ['presentSeason', 'manhua'],
            summary: 'Jahy-sama, trợ lý của chúa quỷ, là người được toàn thể vương quốc loài quỷ khiếp sợ. Trong một trận giao tranh với nữ pháp sư để bảo vệ vương quốc đang bị tấn công, viên ngọc huyền bí của Jahy-sama đã vỡ, kéo theo sự biến mất của ma thuật và toàn bộ vương quốc. Cô mất đi toàn bộ sức mạnh và bị teo nhỏ thành một bé loli dễ thương ở thế giới con người. Với mục tiêu hồi sinh chúa quỷ và khôi phục vương quốc, cô chiến đấu từng ngày với cuộc sống thiếu thốn, nghèo túng, nhưng cô sẽ không nản chí!'
        },
        {
            title: "Build Divide: Code Black",
            url: 'http://cdn.animevietsub.tv/data/poster/2021/09/21/animevsub-rkG9gzYiye.jpg',
            lastEposide: 11,
            maxEposide: undefined,
            rating: 9.4,
            view: 24323,
            filter: ['presentSeason', 'series'],
            summary: '“Tôi có thể nhìn thấy nó. Cách tôi có thể giành chiến thắng…” “Lần này tôi sẽ đánh bại anh ta. Vì vậy, hãy đến với tôi một lần nữa … chấp nhận! "Bloom, những bài thủ của linh hồn!"” Ở New Kyoto, một thành phố được cai quản bởi “King”, giá trị của một người được xác định bởi sức mạnh của người đó trong trò chơi thẻ giao dịch Build Divide. Tin đồn xoay quanh New Kyoto và King. “Nếu bạn đánh bại King trong Build Divide, mọi điều ước sẽ được hoàn thành.” Và để thách đấu King, người ta phải tham gia vào trận chiến TCG được gọi là Rebuild, và “Chìa khóa” phải được hoàn thành. Mọi người đều có một ước muốn mà họ mong ước hoàn thành. Teruto Kurabe, một chàng trai thề sẽ hạ gục King, và Sakura Banka, cô gái bí ẩn hướng dẫn anh ta, cả h ai lao mình vào trận chiến Rebuild. Với đấu trường New Kyoto, trận chiến của Teruto bắt đầu và những bức màn bí ẩn dần được hé lộ.'
        },
        {
            title: "86 2nd Season",
            url: 'http://cdn.animevietsub.tv/data/poster/2021/09/04/animevsub-foMKw7sK3j.jpg',
            lastEposide: 9,
            maxEposide: undefined,
            rating: 9.7,
            view: 24323,
            filter: ['presentSeason', 'movie'],
            summary: 'Phần tiếp theo 86.'
        },
        {
            title: "Taishou Otome Otogibanashi",
            url: 'http://cdn.animevietsub.tv/data/poster/2021/09/08/animevsub-z0hmUqglx8.jpg',
            lastEposide: 11,
            maxEposide: undefined,
            rating: 9.6,
            view: 24323,
            filter: ['presentSeason', 'manhua'],
            summary: 'Bộ truyện lấy bối cảnh ở thời Taisho của Nhật Bản, xoay quanh Tamahiko Shima, một thanh niên bị tai nạn mất khả năng sử dụng tay phải và hiện đang sống ở một vùng nông thôn của tỉnh Chiba để chăm sóc sức khỏe. Một ngày nọ, anh gặp Yuzuki ngây thơ và tận tụy, người mà cha của Tamahiko đã mua để làm vợ của Tamahiko. Qua cuộc gặp gỡ này, Tamahiko bi quan và thu mình bắt đầu thay đổi.'
        },
        {
            title: "Dragon Quest: Dai no Daibouken (2020)",
            url: 'https://lh4.googleusercontent.com/6AQev_qKVM_uC-jhgTx6rIianZSaUsb1deGIZPwMcERUqh4xiKZ_48v3J6Se2cbsAsE=s0',
            lastEposide: 62,
            maxEposide: undefined,
            rating: 9.4,
            view: 24323,
            filter: ['presentSeason', 'series'],
            summary: 'Cách đây rất lâu, có một kiếm sĩ dũng cảm được biết đến với cái tên đơn giản là "anh hùng". Có một con quỷ đã gây ra đau khổ cho mọi người. Người anh hùng và những người bạn đồng hành của anh ta đã đến để thách thức con quỷ trong một trận chiến và bằng cách kết hợp sức mạnh của họ, trận chiến đã kết thúc nhanh chóng. Không có ai xung quanh để gây rắc rối, hòn đảo trở thành một nơi yên tĩnh, nơi mọi người có thể sống với nhau trong hòa bình.Vài năm sau, con quỷ được hồi sinh. Nhân vật chính ngày nay của chúng ta, Dai, sống trên một hòn đảo xa xôi ở vùng biển phía Nam và ước mơ trở thành một anh hùng vĩ đại. Khi nghe tin về sự hồi sinh của con quỷ, Dai và những người bạn của mình đã tự mình hành động để ngăn chặn hắn và thế lực tà ác đã hồi sinh hắn. Trên đường đi, Dai khám phá ra danh tính của "anh hùng", sự thật đằng sau thế lực xấu xa đã hồi sinh con quỷ, và sức mạnh tiềm ẩn của chính Dai đã xuất hiện trong thời gian nguy hiểm.'
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
        {
            title: "Dragon Quest: Dai no Daibouken (2020)",
            url: 'https://lh4.googleusercontent.com/6AQev_qKVM_uC-jhgTx6rIianZSaUsb1deGIZPwMcERUqh4xiKZ_48v3J6Se2cbsAsE=s0',
            lastEposide: 62,
            maxEposide: undefined,
            rating: 9.4,
            view: 24323,
            filter: ['presentSeason', 'series'],
            summary: 'Cách đây rất lâu, có một kiếm sĩ dũng cảm được biết đến với cái tên đơn giản là "anh hùng". Có một con quỷ đã gây ra đau khổ cho mọi người. Người anh hùng và những người bạn đồng hành của anh ta đã đến để thách thức con quỷ trong một trận chiến và bằng cách kết hợp sức mạnh của họ, trận chiến đã kết thúc nhanh chóng. Không có ai xung quanh để gây rắc rối, hòn đảo trở thành một nơi yên tĩnh, nơi mọi người có thể sống với nhau trong hòa bình.Vài năm sau, con quỷ được hồi sinh. Nhân vật chính ngày nay của chúng ta, Dai, sống trên một hòn đảo xa xôi ở vùng biển phía Nam và ước mơ trở thành một anh hùng vĩ đại. Khi nghe tin về sự hồi sinh của con quỷ, Dai và những người bạn của mình đã tự mình hành động để ngăn chặn hắn và thế lực tà ác đã hồi sinh hắn. Trên đường đi, Dai khám phá ra danh tính của "anh hùng", sự thật đằng sau thế lực xấu xa đã hồi sinh con quỷ, và sức mạnh tiềm ẩn của chính Dai đã xuất hiện trong thời gian nguy hiểm.'
        },
        {
            title: "Kỉ Nguyên Trigger Phần 3",
            url: 'http://cdn.animevietsub.tv/data/poster/2021/08/25/animevsub-NnePFaKWNk.jpg',
            lastEposide: 11,
            maxEposide: undefined,
            rating: 9.4,
            view: 24323,
            filter: ['presentSeason', 'movie'],
            summary: 'Phần thứ 3 của World Trigger nè!'
        },
        {
            title: "Jahy Vĩ Đại Này Không Nản Lòng Đâu!",
            url: 'https://lh5.googleusercontent.com/IRxF1Y9Efnd_5LsLqpFvBNAPDUl9MKNXs3C-I6tIceS6cJp35sttWoFAQHuNgMuCd0Q=s0',
            lastEposide: 13,
            maxEposide: 13,
            rating: 9.4,
            view: 24323,
            filter: ['presentSeason', 'manhua'],
            summary: 'Jahy-sama, trợ lý của chúa quỷ, là người được toàn thể vương quốc loài quỷ khiếp sợ. Trong một trận giao tranh với nữ pháp sư để bảo vệ vương quốc đang bị tấn công, viên ngọc huyền bí của Jahy-sama đã vỡ, kéo theo sự biến mất của ma thuật và toàn bộ vương quốc. Cô mất đi toàn bộ sức mạnh và bị teo nhỏ thành một bé loli dễ thương ở thế giới con người. Với mục tiêu hồi sinh chúa quỷ và khôi phục vương quốc, cô chiến đấu từng ngày với cuộc sống thiếu thốn, nghèo túng, nhưng cô sẽ không nản chí!'
        },
        {
            title: "Build Divide: Code Black",
            url: 'http://cdn.animevietsub.tv/data/poster/2021/09/21/animevsub-rkG9gzYiye.jpg',
            lastEposide: 11,
            maxEposide: undefined,
            rating: 9.4,
            view: 24323,
            filter: ['presentSeason', 'series'],
            summary: '“Tôi có thể nhìn thấy nó. Cách tôi có thể giành chiến thắng…” “Lần này tôi sẽ đánh bại anh ta. Vì vậy, hãy đến với tôi một lần nữa … chấp nhận! "Bloom, những bài thủ của linh hồn!"” Ở New Kyoto, một thành phố được cai quản bởi “King”, giá trị của một người được xác định bởi sức mạnh của người đó trong trò chơi thẻ giao dịch Build Divide. Tin đồn xoay quanh New Kyoto và King. “Nếu bạn đánh bại King trong Build Divide, mọi điều ước sẽ được hoàn thành.” Và để thách đấu King, người ta phải tham gia vào trận chiến TCG được gọi là Rebuild, và “Chìa khóa” phải được hoàn thành. Mọi người đều có một ước muốn mà họ mong ước hoàn thành. Teruto Kurabe, một chàng trai thề sẽ hạ gục King, và Sakura Banka, cô gái bí ẩn hướng dẫn anh ta, cả h ai lao mình vào trận chiến Rebuild. Với đấu trường New Kyoto, trận chiến của Teruto bắt đầu và những bức màn bí ẩn dần được hé lộ.'
        },
        {
            title: "86 2nd Season",
            url: 'http://cdn.animevietsub.tv/data/poster/2021/09/04/animevsub-foMKw7sK3j.jpg',
            lastEposide: 9,
            maxEposide: undefined,
            rating: 9.7,
            view: 24323,
            filter: ['presentSeason', 'movie'],
            summary: 'Phần tiếp theo 86.'
        },
        {
            title: "Taishou Otome Otogibanashi",
            url: 'http://cdn.animevietsub.tv/data/poster/2021/09/08/animevsub-z0hmUqglx8.jpg',
            lastEposide: 11,
            maxEposide: undefined,
            rating: 9.6,
            view: 24323,
            filter: ['presentSeason', 'manhua'],
            summary: 'Bộ truyện lấy bối cảnh ở thời Taisho của Nhật Bản, xoay quanh Tamahiko Shima, một thanh niên bị tai nạn mất khả năng sử dụng tay phải và hiện đang sống ở một vùng nông thôn của tỉnh Chiba để chăm sóc sức khỏe. Một ngày nọ, anh gặp Yuzuki ngây thơ và tận tụy, người mà cha của Tamahiko đã mua để làm vợ của Tamahiko. Qua cuộc gặp gỡ này, Tamahiko bi quan và thu mình bắt đầu thay đổi.'
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
        {
            title: "Dragon Quest: Dai no Daibouken (2020)",
            url: 'https://lh4.googleusercontent.com/6AQev_qKVM_uC-jhgTx6rIianZSaUsb1deGIZPwMcERUqh4xiKZ_48v3J6Se2cbsAsE=s0',
            lastEposide: 62,
            maxEposide: undefined,
            rating: 9.4,
            view: 24323,
            filter: ['presentSeason', 'series'],
            summary: 'Cách đây rất lâu, có một kiếm sĩ dũng cảm được biết đến với cái tên đơn giản là "anh hùng". Có một con quỷ đã gây ra đau khổ cho mọi người. Người anh hùng và những người bạn đồng hành của anh ta đã đến để thách thức con quỷ trong một trận chiến và bằng cách kết hợp sức mạnh của họ, trận chiến đã kết thúc nhanh chóng. Không có ai xung quanh để gây rắc rối, hòn đảo trở thành một nơi yên tĩnh, nơi mọi người có thể sống với nhau trong hòa bình.Vài năm sau, con quỷ được hồi sinh. Nhân vật chính ngày nay của chúng ta, Dai, sống trên một hòn đảo xa xôi ở vùng biển phía Nam và ước mơ trở thành một anh hùng vĩ đại. Khi nghe tin về sự hồi sinh của con quỷ, Dai và những người bạn của mình đã tự mình hành động để ngăn chặn hắn và thế lực tà ác đã hồi sinh hắn. Trên đường đi, Dai khám phá ra danh tính của "anh hùng", sự thật đằng sau thế lực xấu xa đã hồi sinh con quỷ, và sức mạnh tiềm ẩn của chính Dai đã xuất hiện trong thời gian nguy hiểm.'
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
        {
            title: "Dragon Quest: Dai no Daibouken (2020)",
            url: 'https://lh4.googleusercontent.com/6AQev_qKVM_uC-jhgTx6rIianZSaUsb1deGIZPwMcERUqh4xiKZ_48v3J6Se2cbsAsE=s0',
            lastEposide: 62,
            maxEposide: undefined,
            rating: 9.4,
            view: 24323,
            filter: ['presentSeason', 'series'],
            summary: 'Cách đây rất lâu, có một kiếm sĩ dũng cảm được biết đến với cái tên đơn giản là "anh hùng". Có một con quỷ đã gây ra đau khổ cho mọi người. Người anh hùng và những người bạn đồng hành của anh ta đã đến để thách thức con quỷ trong một trận chiến và bằng cách kết hợp sức mạnh của họ, trận chiến đã kết thúc nhanh chóng. Không có ai xung quanh để gây rắc rối, hòn đảo trở thành một nơi yên tĩnh, nơi mọi người có thể sống với nhau trong hòa bình.Vài năm sau, con quỷ được hồi sinh. Nhân vật chính ngày nay của chúng ta, Dai, sống trên một hòn đảo xa xôi ở vùng biển phía Nam và ước mơ trở thành một anh hùng vĩ đại. Khi nghe tin về sự hồi sinh của con quỷ, Dai và những người bạn của mình đã tự mình hành động để ngăn chặn hắn và thế lực tà ác đã hồi sinh hắn. Trên đường đi, Dai khám phá ra danh tính của "anh hùng", sự thật đằng sau thế lực xấu xa đã hồi sinh con quỷ, và sức mạnh tiềm ẩn của chính Dai đã xuất hiện trong thời gian nguy hiểm.'
        },
        {
            title: "Kỉ Nguyên Trigger Phần 3",
            url: 'http://cdn.animevietsub.tv/data/poster/2021/08/25/animevsub-NnePFaKWNk.jpg',
            lastEposide: 11,
            maxEposide: undefined,
            rating: 9.4,
            view: 24323,
            filter: ['presentSeason', 'movie'],
            summary: 'Phần thứ 3 của World Trigger nè!'
        },
        {
            title: "Jahy Vĩ Đại Này Không Nản Lòng Đâu!",
            url: 'https://lh5.googleusercontent.com/IRxF1Y9Efnd_5LsLqpFvBNAPDUl9MKNXs3C-I6tIceS6cJp35sttWoFAQHuNgMuCd0Q=s0',
            lastEposide: 13,
            maxEposide: 13,
            rating: 9.4,
            view: 24323,
            filter: ['presentSeason', 'manhua'],
            summary: 'Jahy-sama, trợ lý của chúa quỷ, là người được toàn thể vương quốc loài quỷ khiếp sợ. Trong một trận giao tranh với nữ pháp sư để bảo vệ vương quốc đang bị tấn công, viên ngọc huyền bí của Jahy-sama đã vỡ, kéo theo sự biến mất của ma thuật và toàn bộ vương quốc. Cô mất đi toàn bộ sức mạnh và bị teo nhỏ thành một bé loli dễ thương ở thế giới con người. Với mục tiêu hồi sinh chúa quỷ và khôi phục vương quốc, cô chiến đấu từng ngày với cuộc sống thiếu thốn, nghèo túng, nhưng cô sẽ không nản chí!'
        },
        {
            title: "Build Divide: Code Black",
            url: 'http://cdn.animevietsub.tv/data/poster/2021/09/21/animevsub-rkG9gzYiye.jpg',
            lastEposide: 11,
            maxEposide: undefined,
            rating: 9.4,
            view: 24323,
            filter: ['presentSeason', 'series'],
            summary: '“Tôi có thể nhìn thấy nó. Cách tôi có thể giành chiến thắng…” “Lần này tôi sẽ đánh bại anh ta. Vì vậy, hãy đến với tôi một lần nữa … chấp nhận! "Bloom, những bài thủ của linh hồn!"” Ở New Kyoto, một thành phố được cai quản bởi “King”, giá trị của một người được xác định bởi sức mạnh của người đó trong trò chơi thẻ giao dịch Build Divide. Tin đồn xoay quanh New Kyoto và King. “Nếu bạn đánh bại King trong Build Divide, mọi điều ước sẽ được hoàn thành.” Và để thách đấu King, người ta phải tham gia vào trận chiến TCG được gọi là Rebuild, và “Chìa khóa” phải được hoàn thành. Mọi người đều có một ước muốn mà họ mong ước hoàn thành. Teruto Kurabe, một chàng trai thề sẽ hạ gục King, và Sakura Banka, cô gái bí ẩn hướng dẫn anh ta, cả h ai lao mình vào trận chiến Rebuild. Với đấu trường New Kyoto, trận chiến của Teruto bắt đầu và những bức màn bí ẩn dần được hé lộ.'
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
        {
            title: "Dragon Quest: Dai no Daibouken (2020)",
            url: 'https://lh4.googleusercontent.com/6AQev_qKVM_uC-jhgTx6rIianZSaUsb1deGIZPwMcERUqh4xiKZ_48v3J6Se2cbsAsE=s0',
            lastEposide: 62,
            maxEposide: undefined,
            rating: 9.4,
            view: 24323,
            filter: ['presentSeason', 'series'],
            summary: 'Cách đây rất lâu, có một kiếm sĩ dũng cảm được biết đến với cái tên đơn giản là "anh hùng". Có một con quỷ đã gây ra đau khổ cho mọi người. Người anh hùng và những người bạn đồng hành của anh ta đã đến để thách thức con quỷ trong một trận chiến và bằng cách kết hợp sức mạnh của họ, trận chiến đã kết thúc nhanh chóng. Không có ai xung quanh để gây rắc rối, hòn đảo trở thành một nơi yên tĩnh, nơi mọi người có thể sống với nhau trong hòa bình.Vài năm sau, con quỷ được hồi sinh. Nhân vật chính ngày nay của chúng ta, Dai, sống trên một hòn đảo xa xôi ở vùng biển phía Nam và ước mơ trở thành một anh hùng vĩ đại. Khi nghe tin về sự hồi sinh của con quỷ, Dai và những người bạn của mình đã tự mình hành động để ngăn chặn hắn và thế lực tà ác đã hồi sinh hắn. Trên đường đi, Dai khám phá ra danh tính của "anh hùng", sự thật đằng sau thế lực xấu xa đã hồi sinh con quỷ, và sức mạnh tiềm ẩn của chính Dai đã xuất hiện trong thời gian nguy hiểm.'
        },
        {
            title: "Kỉ Nguyên Trigger Phần 3",
            url: 'http://cdn.animevietsub.tv/data/poster/2021/08/25/animevsub-NnePFaKWNk.jpg',
            lastEposide: 11,
            maxEposide: undefined,
            rating: 9.4,
            view: 24323,
            filter: ['presentSeason', 'movie'],
            summary: 'Phần thứ 3 của World Trigger nè!'
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
        {
            title: "Dragon Quest: Dai no Daibouken (2020)",
            url: 'https://lh4.googleusercontent.com/6AQev_qKVM_uC-jhgTx6rIianZSaUsb1deGIZPwMcERUqh4xiKZ_48v3J6Se2cbsAsE=s0',
            lastEposide: 62,
            maxEposide: undefined,
            rating: 9.4,
            view: 24323,
            filter: ['presentSeason', 'series'],
            summary: 'Cách đây rất lâu, có một kiếm sĩ dũng cảm được biết đến với cái tên đơn giản là "anh hùng". Có một con quỷ đã gây ra đau khổ cho mọi người. Người anh hùng và những người bạn đồng hành của anh ta đã đến để thách thức con quỷ trong một trận chiến và bằng cách kết hợp sức mạnh của họ, trận chiến đã kết thúc nhanh chóng. Không có ai xung quanh để gây rắc rối, hòn đảo trở thành một nơi yên tĩnh, nơi mọi người có thể sống với nhau trong hòa bình.Vài năm sau, con quỷ được hồi sinh. Nhân vật chính ngày nay của chúng ta, Dai, sống trên một hòn đảo xa xôi ở vùng biển phía Nam và ước mơ trở thành một anh hùng vĩ đại. Khi nghe tin về sự hồi sinh của con quỷ, Dai và những người bạn của mình đã tự mình hành động để ngăn chặn hắn và thế lực tà ác đã hồi sinh hắn. Trên đường đi, Dai khám phá ra danh tính của "anh hùng", sự thật đằng sau thế lực xấu xa đã hồi sinh con quỷ, và sức mạnh tiềm ẩn của chính Dai đã xuất hiện trong thời gian nguy hiểm.'
        },
        {
            title: "Kỉ Nguyên Trigger Phần 3",
            url: 'http://cdn.animevietsub.tv/data/poster/2021/08/25/animevsub-NnePFaKWNk.jpg',
            lastEposide: 11,
            maxEposide: undefined,
            rating: 9.4,
            view: 24323,
            filter: ['presentSeason', 'movie'],
            summary: 'Phần thứ 3 của World Trigger nè!'
        },
        {
            title: "Jahy Vĩ Đại Này Không Nản Lòng Đâu!",
            url: 'https://lh5.googleusercontent.com/IRxF1Y9Efnd_5LsLqpFvBNAPDUl9MKNXs3C-I6tIceS6cJp35sttWoFAQHuNgMuCd0Q=s0',
            lastEposide: 13,
            maxEposide: 13,
            rating: 9.4,
            view: 24323,
            filter: ['presentSeason', 'manhua'],
            summary: 'Jahy-sama, trợ lý của chúa quỷ, là người được toàn thể vương quốc loài quỷ khiếp sợ. Trong một trận giao tranh với nữ pháp sư để bảo vệ vương quốc đang bị tấn công, viên ngọc huyền bí của Jahy-sama đã vỡ, kéo theo sự biến mất của ma thuật và toàn bộ vương quốc. Cô mất đi toàn bộ sức mạnh và bị teo nhỏ thành một bé loli dễ thương ở thế giới con người. Với mục tiêu hồi sinh chúa quỷ và khôi phục vương quốc, cô chiến đấu từng ngày với cuộc sống thiếu thốn, nghèo túng, nhưng cô sẽ không nản chí!'
        },
        {
            title: "Build Divide: Code Black",
            url: 'http://cdn.animevietsub.tv/data/poster/2021/09/21/animevsub-rkG9gzYiye.jpg',
            lastEposide: 11,
            maxEposide: undefined,
            rating: 9.4,
            view: 24323,
            filter: ['presentSeason', 'series'],
            summary: '“Tôi có thể nhìn thấy nó. Cách tôi có thể giành chiến thắng…” “Lần này tôi sẽ đánh bại anh ta. Vì vậy, hãy đến với tôi một lần nữa … chấp nhận! "Bloom, những bài thủ của linh hồn!"” Ở New Kyoto, một thành phố được cai quản bởi “King”, giá trị của một người được xác định bởi sức mạnh của người đó trong trò chơi thẻ giao dịch Build Divide. Tin đồn xoay quanh New Kyoto và King. “Nếu bạn đánh bại King trong Build Divide, mọi điều ước sẽ được hoàn thành.” Và để thách đấu King, người ta phải tham gia vào trận chiến TCG được gọi là Rebuild, và “Chìa khóa” phải được hoàn thành. Mọi người đều có một ước muốn mà họ mong ước hoàn thành. Teruto Kurabe, một chàng trai thề sẽ hạ gục King, và Sakura Banka, cô gái bí ẩn hướng dẫn anh ta, cả h ai lao mình vào trận chiến Rebuild. Với đấu trường New Kyoto, trận chiến của Teruto bắt đầu và những bức màn bí ẩn dần được hé lộ.'
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
        {
            title: "Dragon Quest: Dai no Daibouken (2020)",
            url: 'https://lh4.googleusercontent.com/6AQev_qKVM_uC-jhgTx6rIianZSaUsb1deGIZPwMcERUqh4xiKZ_48v3J6Se2cbsAsE=s0',
            lastEposide: 62,
            maxEposide: undefined,
            rating: 9.4,
            view: 24323,
            filter: ['presentSeason', 'series'],
            summary: 'Cách đây rất lâu, có một kiếm sĩ dũng cảm được biết đến với cái tên đơn giản là "anh hùng". Có một con quỷ đã gây ra đau khổ cho mọi người. Người anh hùng và những người bạn đồng hành của anh ta đã đến để thách thức con quỷ trong một trận chiến và bằng cách kết hợp sức mạnh của họ, trận chiến đã kết thúc nhanh chóng. Không có ai xung quanh để gây rắc rối, hòn đảo trở thành một nơi yên tĩnh, nơi mọi người có thể sống với nhau trong hòa bình.Vài năm sau, con quỷ được hồi sinh. Nhân vật chính ngày nay của chúng ta, Dai, sống trên một hòn đảo xa xôi ở vùng biển phía Nam và ước mơ trở thành một anh hùng vĩ đại. Khi nghe tin về sự hồi sinh của con quỷ, Dai và những người bạn của mình đã tự mình hành động để ngăn chặn hắn và thế lực tà ác đã hồi sinh hắn. Trên đường đi, Dai khám phá ra danh tính của "anh hùng", sự thật đằng sau thế lực xấu xa đã hồi sinh con quỷ, và sức mạnh tiềm ẩn của chính Dai đã xuất hiện trong thời gian nguy hiểm.'
        },
    ])

    const [animeListFilter, setAnimeListFilter] = useState([...animeList])

    const calculationPaginationArray = (animeList, pageLimit) => {
        const maxNumberPagination = Math.ceil(animeList.length / pageLimit)
        const paginationArrayTemp = []
        for (let i = 1; i <= maxNumberPagination; i++) {
            paginationArrayTemp.push(i)
        }
        setPaginationArray([...paginationArrayTemp])
    }

    const [paginationArray, setPaginationArray] = useState(() => {
        const maxNumberPagination = Math.ceil(animeListFilter.length / pageLimit)
        const paginationArray = []
        for (let i = 1; i <= maxNumberPagination; i++) {
            paginationArray.push(i)
        }

        return paginationArray
    })

    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        if (filterActive === 'all') {
            setAnimeListFilter(animeList)
        } else {
            const animeListTemp = animeList.filter((curEle => {
                return curEle.filter.includes(filterActive)
            }))
            setAnimeListFilter(animeListTemp)
        }
    }, [filterActive])

    useEffect(() => {
        calculationPaginationArray(animeListFilter, pageLimit)
        setCurrentPage(1)
    }, [animeListFilter])

    useEffect(() => {
        window.scrollTo(0, 800)
    }, [currentPage])

    return (

        <div className="anime-body-container">
            <div className='new-anime-container'>
                <div className="new-anime-filter">
                    <h3 className="new-anime-title" >Mới cập nhật</h3>
                    <button className={`new-anime-filter-type ${filterActive === "all" ? "new-anime-filter-type--active" : ""}`} onClick={() => setAcitveFilter('all')}>Tất cả</button>
                    <button className={`new-anime-filter-type ${filterActive === "presentSeason" ? "new-anime-filter-type--active" : ""}`} onClick={() => setAcitveFilter('presentSeason')}>Mùa này</button>
                    <button className={`new-anime-filter-type ${filterActive === "series" ? "new-anime-filter-type--active" : ""}`} onClick={() => setAcitveFilter('series')}>Series</button>
                    <button className={`new-anime-filter-type ${filterActive === "movie" ? "new-anime-filter-type--active" : ""}`} onClick={() => setAcitveFilter('movie')}>Movie</button>
                    <button className={`new-anime-filter-type ${filterActive === "manhua" ? "new-anime-filter-type--active" : ""}`} onClick={() => setAcitveFilter('manhua')}>Hoạt hình Trung Quốc</button>
                </div>
                <div className="row">
                    {
                        animeListFilter.slice((currentPage - 1) * pageLimit, currentPage * pageLimit).map((anime, index) => {
                            return (
                                <div className="col-3" key={`${anime.name}${index}`}>
                                    <AnimeCard anime={anime} />
                                </div>
                            )
                        })
                    }
                </div>

                <div className="pagination-wrapper">
                    <button className={`pagination-first-page ${currentPage === 1 ? 'pagination-button--disabled' : ''}`} onClick={() => setCurrentPage(1)}>Trang đầu</button>
                    <button className={`pagination-prev ${currentPage === 1 ? 'pagination-button--disabled' : ''}`} onClick={() => setCurrentPage(prevPage => prevPage - 1)}><i className="fa-solid fa-angle-left"></i></button>
                    {

                        (paginationArray.length <= pageInRowLimit) ? (
                            paginationArray.map((page, index) => {
                                return (
                                    <button className={`pagination-button ${currentPage === page ? 'pagination-button--active' : ''}`} key={index} value={page} onClick={(e) => setCurrentPage(parseInt(e.target.value))}>{page}</button>
                                )
                            })
                        ) : ((paginationArray.length - currentPage < pageInRowLimit) ? (
                            paginationArray.slice(-pageInRowLimit).map((page, index) => {
                                return (
                                    <button className={`pagination-button ${currentPage === page ? 'pagination-button--active' : ''}`} key={index} value={page} onClick={(e) => setCurrentPage(parseInt(e.target.value))}>{page}</button>
                                )
                            })
                        ) : (
                            paginationArray.slice(currentPage - 1, currentPage + pageInRowLimit - 1).map((page, index) => {
                                return (
                                    <button className={`pagination-button ${currentPage === page ? 'pagination-button--active' : ''}`} key={index} value={page} onClick={(e) => setCurrentPage(parseInt(e.target.value))}>{page}</button>
                                )
                            })
                        ))
                    }
                    <button className={`pagination-after ${currentPage === paginationArray.at(-1) ? 'pagination-button--disabled' : ''}`} onClick={() => setCurrentPage(prevPage => prevPage + 1)}><i className="fa-solid fa-angle-right"></i></button>
                    <button className={`pagination-last-page ${currentPage === paginationArray.at(-1) ? 'pagination-button--disabled' : ''}`} onClick={() => setCurrentPage(paginationArray.length)}>Trang cuối</button>
                </div>
            </div>
        </div>
    )
}

export default NewAnime;