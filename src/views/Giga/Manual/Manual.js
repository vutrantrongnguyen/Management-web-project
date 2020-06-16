import React, {Component} from 'react';
import {Card, CardBody, CardHeader, Col, Row} from "reactstrap";

class Manual extends Component{

  render(){
   return(
     <Row>
       <Col xs="12" sm="12" md="12">
         <Card>
           <CardHeader>
             Hướng dẫn sử dụng ứng dụng quản lý sự cố hành lang lưới điện liên quan đến cây xanh.
           </CardHeader>
           <CardBody>

             <h3>Ứng dụng gồm 3 phần chính như sau:</h3>
             <p>+) Quản lý phân tích sự cố: Dựa trên các thông tin nhận được từ drone, admin sẽ kiểm tra và phân tích từ đó tạo báo cáo để thông tin về tình trạng đồng thời yêu cầu xử lý sự cố cho các bên liên quan.</p>
             <p>+) Quản lý danh sách sự cố: Gồm hai phần là đang thực hiện và đã hoàn thành, qua đó admin kiểm tra được trạng thái của sự cố, từ đó có thể chuyển trạng thái hoặc yêu cầu nhanh chóng xử lý các sự cố đang tồn đọng.</p>
             <p>+) Quản lý sự cố theo bản đồ: Để mang lại cách nhìn trực quan và bao quát nhất chúng tôi mang đến cho các bạn tính năng xem sự cố trên bản đồ. Từ các vị trí trên bản đồ, admin có thể xem số lượng, tình trạng cũng như thông tin chi tiết của sự cố. Giúp dễ dàng nhận biết mật độ và đưa ra cách xử lý hợp lý theo từng khu vực.</p>
           </CardBody>
         </Card>
       </Col>
     </Row>
   )
  }
}

export default Manual
