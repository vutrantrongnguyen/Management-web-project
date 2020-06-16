import React, {Component} from 'react';
import {
  Button,
  // Badge, Button,
  Card,
  CardBody, CardHeader, CardFooter,
  // CardHeader,
  Col,
  // Form, FormGroup,
  Input,
  // ListGroup, ListGroupItem,
  // InputGroup, InputGroupAddon,
  // Nav,
  // NavItem,
  // NavLink,
  // Pagination, PaginationItem, PaginationLink,
  Row,
  // TabContent,
  // Table,
  TabPane,
  FormGroup, Label
} from 'reactstrap';
// import CardFooter from "reactstrap/es/CardFooter";
import Spinner from "reactstrap/es/Spinner";
import config from "../../Config/strings";

class ManageDetail extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    const ACCOUNT_ID = this.props.match.params.id;
    this.state = {
      accountId: ACCOUNT_ID,
      activeTab: new Array(4).fill('1'),
      description: "",
      avatarPath: "",
      email: "",
      numberPhone: "",
      address: "",
      name: "",
      tag: "",
      isLoaded: false,
      isEditing: false,
    };
  }

  componentDidMount() {
    this.getAccountDetailById(this.state.accountId);
  }

  updateAccountInfo(userId) {
    let url ='https://secure-mountain-93147.herokuapp.com/api/user/';
    fetch(url + userId, {
      method: 'PUT',
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(this.state.data)
    }).then((res) => res.json())
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => console.log(err))
  }

  getAccountDetailById(accountId) {
    let url = "https://secure-mountain-93147.herokuapp.com/api/user/";
    fetch(url + accountId, {
      method: "GET",
    }).then(response => response.json()).then((responseJson) => {
      console.log(responseJson);
      this.setState({data: responseJson, isLoaded: true, origin: JSON.parse(JSON.stringify(responseJson))});
    }, function (error) {
    })
  }

  toggle(tabPane, tab) {
    const newArray = this.state.activeTab.slice();
    newArray[tabPane] = tab;
    this.setState({
      activeTab: newArray,
    });
  }


  handleChangeData = (event) => {
    let input = event.target;
    this.setState({
      investor:
        {
          ...this.state.investor,
          [input.name]: input.value
        }
    });
  };

  tabPane() {
    return (
      <>
        <TabPane tabId="1">
          <Card>

            <CardBody>
              <div id="AddInvestor">
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="text-input">Name</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input type="text" id="name" name="name" defaultValue={this.state.data.name}
                           onChange={(event) => this.handleChangeData(event)}/>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="email-input">Username</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input type="username" id="username" name="username" autoComplete="username"
                           defaultValue={this.state.data.username}
                           onChange={(event) => this.handleChangeData(event)}/>
                    {/*<FormText className="help-block">Please enter your email</FormText>*/}
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="password-input">Phone</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input type="phone" id="phone" name="phone" autoComplete="phone"
                           defaultValue={this.state.data.phone}
                           onChange={(event) => this.handleChangeData(event)}/>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="select">Type</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input type="select" name="type" id="type" required autoComplete="type" defaultValue={this.state.data.type} onChange={(event) => this.handleChangeData(event)}>
                      <option value="4">Please select</option>
                      <option value="0">Admin</option>
                      <option value="1">Staff</option>
                      <option value="2">User</option>

                    </Input>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="email">Email</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input type="email" id="email" name="email" autoComplete="email"
                           defaultValue={this.state.data.email} onChange={(event) => this.handleChangeData(event)}/>
                    {/*<FormText className="help-block">Please enter a complex password</FormText>*/}
                  </Col>
                </FormGroup>
                <div className="form-actions">
                  <Button className="mr-1 btn-danger" type="submit"
                          onClick={() => this.props.history.goBack()}>Hủy</Button>
                  <Button onClick={() => this.toggleLarge()} className="mr-1" type="submit" color="info">Xem
                    trước</Button>
                  {/*<Button className="mr-1" type="submit" color="info">Xem trước</Button>*/}
                  <Button className="mr-1 btn-primary" color="primary" type="submit" value="SEND POST"
                          onClick={() => this.updateAccountInfo(this.state.data.id)}>Cập nhật</Button>
                </div>
              </div>
            </CardBody>


          </Card>
        </TabPane>
      </>
    )
      ;
  }
  render() {

    // if (!this.state.isLoaded) {
    //   return <Spinner/>
    // } else {
      // let data = this.state.data;
      return (
        <div className="animated fadeIn">
          <Row>
            <Col xs="12" md="6">
              <p className="font-weight-bold">CHI TIẾT SỰ CỐ </p>
            </Col>
          </Row>
          <Card>
            <CardHeader>
              <img src="https://image.bizlive.vn/uploaded/hainvv/2014_10_11/hn-18246-2fgh_wrme_epoa.jpg" style={{height:'200px',margin:'10px'}} alt=""/>
              <img src="https://static.tuoitre.vn/tto/i/s626/2016/09/02/7db96a55.jpg" style={{height:'200px',margin:'10px'}} alt=""/>
              <img src="https://moitruong.net.vn/wp-content/uploads/2018/05/h5_11_06_04_136-20_50_41_339-e1526957516250.jpg" style={{height:'200px',margin:'10px'}}  alt=""/>
              <img src="https://laodongthudo.vn/stores/news_dataimages/dungtuan/072018/20/13/2745_1_78946.jpg" style={{height:'200px',margin:'10px'}}  alt=""/>
            </CardHeader>
            <CardBody>
              <p>Chiều 12/6, trên địa bàn quận 10, TP.HCM đã xảy ra một vụ nhánh cây to gãy, rơi xuống đè trúng người đi đường khiến 2 nạn nhân bị thương.

                Báo giao thông đưa tin, đến tối 13/6, lực lượng chức năng TP.HCM vẫn đang xử lý sự cố nhánh cây xanh to gãy đè trúng người đi đường khiến 2 người bị thương trên địa bàn.

                Theo đó, khoảng 2h cùng ngày, trong cơn mưa lớn kèm gió mạnh khiến nhiều cây xanh ở TP.HCM ngã đổ, ảnh hưởng đến giao thông đi lại của người dân. Thời điểm đó có 2 thanh niên đi xe máy trên đường 3/2, quận 10, bị nhánh cây lớn gãy, rơi xuống đường đè trúng người.

                Vụ việc khiến cả 2 bị thương, trong đó 1 người bị gãy tay. Nhận được tin báo, lực lượng chức năng quận 10 có mặt xử lý sự cố cây gãy.

                Theo Pháp luật TP.HCM ghi nhận, đến 15h chiều cùng ngày, mưa vẫn rất lớn và chưa thấy nhân viên cây xanh đến cắt tỉa, thu dọn hiện trường.

                Trong lúc đó, tại đường Lê Duẩn (quận 1), cũng xảy ra vụ ngã đổ cây xanh, tuy nhiên may mắn không có ai bị thương.

                Trận mưa lớn vào chiều cùng ngày cũng khiến hàng loạt tuyến đường bị ngập, trên đường An Dương Vương, Hồ Ngọc Lãm (quận Bình Tân, giáp quận 8), đường Song Hành, Đường Nguyễn Ảnh Thủ, Nguyễn Văn Quá (quận 12)… cũng rơi vào tình trạng ngập cục bộ khiến các phương tiện lưu chuyển khó khăn.
              </p>
              <Row>
                <Col  md={3}/>
                <Col md={3}><Button color="primary" style={{textAlign:'center'}} >Hoàn thành</Button></Col>
                <Col md={3}><Button color="danger" style={{textAlign:'center'}} onClick={() => this.props.history.goBack()} >Quay lại</Button></Col>
                <Col  md={3}/>
              </Row>
            </CardBody>
          </Card>
          {/*{this.tabPane()}*/}
          {/*{this.state.alert}*/}
          <div className="form-actions">
            {/*<Button type="submit" color="primary" className="mr-1">Hủy</Button>*/}
            {/*<Button type="submit" color="info" className="mr-1">Hoàn thành</Button>*/}

          </div>

        </div>
      );
    }
  // }
}

export default ManageDetail;
