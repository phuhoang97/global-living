import React from "react";
import { useState } from "react";
import Div from "../Div";

export default function Accordion() {
  const [selected, setSelected] = useState(0);
  const handelToggle = (index) => {
    if (selected === index) {
      return setSelected(null);
    }
    setSelected(index);
  };
  const accordionData = [
    {
      question:
        "Kể từ khi hoàn thiện các thủ tục cần thiết và giấy tờ thì bao lâu sẽ nhận được thẻ cư trú Hungary?",
      answer:
        "Thẻ cư trú - còn gọi là thẻ RP (RESIDENCE PERMIT) Hungary sẽ được cấp trong khoảng 3-4 tháng.",
    },
    {
      question:
        "Thẻ cư trú - Residence Permit (RP) có thời hạn bao nhiêu năm và chi phí gia hạn là bao nhiêu?",
      answer:
        "Thời hạn của thẻ RP là 3 năm và sau 3 năm sẽ gia hạn thẻ nếu vẫn duy trì bất động sản. Chi phí gia hạn cho 1 hộ gia đình (gồm đương đơn chính, vợ/chồng và các con dưới 18 tuổi) hiện là 5.000 EUR.",
    },
    {
      question:
        "Sau khi được cấp thẻ cư trú - Residence Permit (RP), đương đơn có thể bán BĐS dùng làm thẻ RP để mua một BĐS khác có giá trị thấp hơn BĐS đã dùng làm thẻ RP có được không?",
      answer:
        "Có thể. Tuy nhiên, khi thẻ sắp hết hạn cần nộp hồ sơ xin gia hạn thẻ thì giá trị BĐS vẫn phải đảm bảo theo yêu cầu. Có thể vẫn giữ BĐS có giá trị thấp hơn này và mua chung với người khác thêm BĐS nữa để đảm bảo giá trị BĐS tối thiểu theo quy định.",
    },
    {
      question:
        "So sánh sự khác biệt giữa THẺ CƯ TRÚ (RESIDENCE PERMIT) - THẺ THƯỜNG TRÚ (PERMANENT RESIDENCY) - HỘ CHIẾU (QUỐC TỊCH)",
      answer:
        "* RP (RESIDENCE PERMIT): Thẻ cư trú (tạm trú) cho phép người nước ngoài cư trú lâu dài (thời hạn thẻ 3 năm, gia hạn ít nhất 3 năm/lần, con cái phụ thuộc được học trường công miễn phí.",
      answer:
        "* PR (PERMANENT RESIDENCY): Thẻ thường trú cho phép người nước ngoài cư trú không thời hạn và hưởng nhiều quyền lợi hơn như công dân.",
      answer:
        "* PP (PASSPORT): Quốc tịch, hưởng tất cả quyền lợi như người bản xứ.",
    },
    {
      question: "Quyền lợi của thẻ cư trú Hungary là gì? ",
      answer:
        "* Được quyền bảo hộ và nhận phúc lợi xã hội như công dân bản địa: Học tập miễn phí các trường công từ cấp 1- cấp 3; sử dụng y tế công miễn phí .",
      answer: "* Được sinh sống, học tập & làm việc tại Hungary ",
      answer: "* Chăm sóc y tế theo hệ thống chuẩn Châu Âu ",
      answer: "* Sở hữu bất động sản vĩnh viễn ",
      answer:
        "* Tự do đi lại trong 26 quốc gia Schengen và nhiều nước Châu  u và đi lại dễ dàng tới hơn 180 quốc gia trên thế giới.",
      answer:
        "* Sau 03 năm có thể gia hạn thẻ và nếu đáp ứng đầy đủ ngoại ngữ, việc làm, tài sản đầu tư thì có thể xin lên thẻ xanh hay quốc tịch, theo yêu cầu của chính phủ Hungary. ",
      answer:
        "* Không yêu cầu có mặt tại Hungary trong thời gian được cấp thẻ cư trú.",
      answer:
        "* Có quyền mở công ty kinh doanh, chỉ có người đứng đơn chính không được đi làm thuê cho công ty khác.",
    },
    {
      question: "Đặc quyền chỉ có tại Global Living",
      answer:
        "* Không cần đến Hungary để lăn tay & làm thẻ mà có thể nộp hồ sơ lăn tay tại Đại sứ quán Hungary ở Hà Nội/ Lãnh sự quán Hungary ở TP HCM.",
      answer:
        "* Không cần đến Hungary để mua BĐS mà có thể chọn BĐS online/ trực tuyến.",
      answer:
        "* Không yêu cầu thời gian ở tối thiểu tại Hungary trong thời gian cấp thẻ.",
      answer:
        "* Khuyến khích mỗi năm nhập cảnh 1 lần để thăm nhà lựa chọn ký gửi BĐS cho thuê ngắn/ dài hạn.",
      answer:
        "* Nhận báo cáo dòng tiền & kết quả kinh doanh cho thuê BĐS trực tuyến 3 tháng/ lần.",
      answer:
        "* Hỗ trợ đóng thuế & các dịch vụ cần thiết liên quan đến tài sản BĐS.",
      answer: "* Hỗ trợ mua bán, chuyển đổi chính tài sản BĐS.",
      answer: "* Hỗ trợ quản lý vận hành trọn gói tài sản.",
      answer: "* Hoàn tiền 100% nếu không nhận được thẻ cư trú.",
      answer: "* Chuyển tiền chính thống, hợp pháp.",
    },
    {
      question:
        "Tổng thời gian hoàn thành cấp thẻ và mua BĐS là 4-6 tháng, đúng không?",
      answer: "* Thời gian cấp thẻ là trong vòng 3 tháng",
      answer: "* Khách hàng có thể chọn mua BĐS song song khi chờ thẻ.",
      answer:
        "* Vì thế tổng thời gian tối thiểu để làm thẻ & mua BĐS có thể là dưới 3 tháng & tối đa là 6 tháng",
    },
    {
      question:
        "Nếu làm thẻ cho các thành viên trong gia đình thì các loại phí, thuế hàng tháng phải đóng cho từng thành viên nếu sinh sống bên đó là bao nhiêu? Nếu họ về Việt Nam có phải đóng không? Và mức đóng là bao nhiêu?",
      answer:
        "* Thẻ này là thẻ cư trú theo diện đầu tư BĐS (nộp thuế 1 lần 4%), không phải theo diện lao động nên các thành viên trong gia đình không phải đóng thêm các khoản nào.",
      answer:
        "* Tuy nhiên nếu NĐT kinh doanh từ BĐS đang đầu tư tại nước đó, thì phải thực hiện nghĩa vụ thuế theo quy định.",
    },
    {
      question:
        "BĐS ở Hungary đó có được chuyển nhượng hoặc trao tặng cho con không? Và khi chuyển nhượng thì diễn ra ở Việt Nam hay ở Hungary?",
      answer:
        "* Được chuyển nhượng hoặc trao tặng cho con, khi chuyển nhượng gia đình không cần phải sang Hungary. Tất cả thủ tục có thể uỷ quyền thông qua luật sư làm.",
    },
    {
      question:
        "Nếu 1 gia đình 4 người đều trong độ tuổi lao động tham gia chương trình này, khi qua Hungary hoặc một nước khác để làm việc lấy thu nhập thì có phải đóng thuế + phí gì hàng tháng không?",
      answer:
        "* Nếu sang nước khác làm việc thì phải nộp thuế theo quy định của nước sở tại. Nếu ở Hungary thì đương đơn không được đi làm thuê (bởi người đứng đơn nguyên tắc đang là chủ đầu tư), chỉ có thể làm chủ như mở nhà hàng, mở kinh doanh buôn bán… (nộp thuế theo quy định từng ngành nghề…), các thành viên khác thì có thể đi làm.",
    },
    {
      question: "Học phí các cấp học tại Hungary là bao nhiêu? ",
      answer:
        "* Miễn phí với các trường công lập từ mẫu giáo đến hết cấp 3. Chỉ cần đóng học phí tại các trường quốc tế và mức học phí cũng chỉ tương đương các trường quốc tế ở Việt Nam.",
    },
    {
      question:
        "Học phí tại các trường công lập và dân lập cấp đại học là bao nhiêu? ",
      answer: "* Khoảng 2.000 - 8.000 EUR/năm, tùy ngành học",
    },
    {
      question:
        "Khi có thẻ cư trú, đương đơn muốn cho con đi du học tại một trong những nước thuộc khối Schengen hoặc EU có được không? Chi phí và thủ tục thế nào? ",
      answer:
        "* Nếu đã được cấp thẻ cư trú Hungary thì sẽ khá dễ dàng đến các nước thuộc cộng đồng Châu  u để học tập và nhận được những quyền lợi như một công dân Châu  u.Với các nước không nằm trong khối EU thì chi phí sẽ tính như chi phí học của công dân Châu  u, thường sẽ rẻ hơn phí dành cho công dân Châu Á. Chi phí và yêu cầu cụ thể sẽ tùy theo từng trường, từng nước. ",
    },
    {
      question: "Sinh viên quốc tế có thể học cử nhân tại Hungary không?",
      answer:
        "* Hoàn toàn có thể. Với nền giáo dục lâu đời theo tiêu chuẩn Châu  u, cùng những cải tiến vượt trội trong chất lượng giảng dạy, Hungary đang dần trở thành một điểm đến thu hút đối với du học sinh quốc tế. Theo số liệu năm 2022 có 479 du học sinh Việt Nam đang học tập tại Hungry. Tính đến thời điểm hiện tại, Nhà nước Hungary đã đào tạo cho Việt Nam gần 4000 cử nhân, kỹ sư đại học, bác sĩ, thạc sĩ và tiến sĩ, trong số đó có một số là lãnh đạo cấp cao của Đảng và Nhà nước Việt Nam. Hungary tự hào nằm trong top 20 quốc gia có số lượng người đoạt giải thưởng Nobel trên đầu người cao nhất",
    },
    {
      question: "Các chương trình tốt nhất để học tập tại Hungary là gì?",
      answer: `* Hungary cung cấp nhiều ngành nghề khác nhau ở từng trình độ cử nhân, thạc sĩ và tiến sĩ. Nổi tiếng có thể kể đến các khối ngành Y-Nha-Dược, hay các ngành về Quản lý Khách sạn, Quản lý Quốc tế, Khoa học Môi trường, Công nghệ Sinh học, Tâm lý học, Môi trường Nông nghiệp, Quan hệ Quốc tế và An toàn Thực phẩm, và Kỹ thuật. 
        Dưới đây là các trường đại học hàng đầu về Y khoa tại Hungary
        - Semmelweis University
        - University of Debrecen
        - University of Pécs
        - University of Szeged
        `,
    },
    {
      question: "Trường ĐH tại Hungary có dạy tiếng Anh không? ",
      answer: `* Một trong các điểm sáng giáo dục đại học tại Hungary, đó là sự gia tăng các chuyên ngành đào tạo bằng tiếng Anh. Ví dụ, Đại học ELTE cho biết, so với năm 2018, số lượng các chuyên ngành đào tạo bằng tiếng Anh tại trường đã tăng lên 4 lần. Con số này ở các trường đại học khác như Đại học Széchenyi István là 222% và Đại học Công nghệ và Kinh tế Budapest là 160%.`,
    },
    {
      question: "Các cơ hội việc làm tại Hungary?",
      answer: `* Mức lương trung bình ở Hungary vào khoảng 750 – 800 HUF / giờ cho các công việc sinh viên. Sinh viên quốc tế thường có thể đi làm thêm 20-24 giờ / tuần và 66 ngày trong các kỳ nghỉ. Ngoài ra bạn còn có thể lựa chọn chỉ làm việc vào cuối tuần, khoảng 8-10 giờ một ngày để bạn có thời gian cho những công việc khác trong tuần.`,
    },
    {
      question: "Mức lợi nhuận từ việc kinh doanh/ cho thuê BĐS là bao nhiêu? ",
      answer: `* Tùy thuộc vào từng căn hộ, doanh thu cho thuê 1 tháng có thể lên đến 6,000 Euro. Lợi nhuận cho thuê dài hạn có thể đạt đến 18%/ năm. `,
    },
    {
      question:
        "Nhà đầu tư có thẻ cư trú không được đi làm thuê mà chỉ được mở doanh nghiệp, vậy các con khi đi học có được đi làm thêm hay làm thuê về sau không?",
      answer: `* Theo quy định, đương đơn (được hiểu là người chính nộp đơn) chỉ có thể làm chủ (mở doanh nghiệp, nhà hàng,….) hoặc có thể xin làm việc ở các quốc gia EU khác, tùy thuộc vào việc tuyển dụng/ thỏa thuận với Công ty. Các còn lại người phụ thuộc thì được phép đi làm thuê ở Hungary. `,
    },
    {
      question: "Chất lượng y tế Hungary ra sao?",
      answer: `* Tương tự các nước Châu  u khác, Hungary có nền y tế phát triển hiện đại và tân tiến. `,
    },
    {
      question: "Có bắt buộc phải mua bảo hiểm y tế không?",
      answer: `* Có, phải duy trì bảo hiểm y tế, gói khá nhỏ (khoảng 3-5 triệu/người/năm). Gói này thường Global Living sẽ tặng cho đương đơn và gia đình năm đầu tiên (để nộp trong hồ sơ xin cấp thẻ), những năm sau gia đình cần thanh toán khoản bảo hiểm tối thiểu này để duy trì thẻ.`,
    },
    {
      question:
        "An sinh xã hội, khám chữa bệnh có phải trả tiền như Việt Nam không?",
      answer: `* An sinh xã hội mỗi nước có chính sách khác nhau, khám chữa bệnh các bệnh viện công miễn phí, khám tại các bệnh viện quốc tế thì giống như Việt Nam. (Mua gói bảo hiểm hơn 1.000 eur/năm (được khám chữa bệnh áp dụng theo gói của từng loại bảo hiểm khác nhau).`,
    },
  ];
  return (
    <Div className='cs-accordians cs-style1'>
      {accordionData.map((item, index) => (
        <Div
          className={`cs-accordian ${selected === index ? "active" : ""}`}
          key={index}
        >
          <Div
            className='cs-accordian_head'
            onClick={() => handelToggle(index)}
          >
            <h2 className='cs-accordian_title'>{item.question}</h2>
            <span className='cs-accordian_toggle cs-accent_color'>
              <svg
                width={15}
                height={8}
                viewBox='0 0 15 8'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M0 0L7.5 7.5L15 0H0Z' fill='currentColor' />
              </svg>
            </span>
          </Div>
          <Div className='cs-accordian_body'>
            <Div className='cs-accordian_body_in'>{item.answer}</Div>
          </Div>
        </Div>
      ))}
    </Div>
  );
}
