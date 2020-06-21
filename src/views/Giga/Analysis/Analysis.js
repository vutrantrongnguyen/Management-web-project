import React, {Component} from 'react';
import {
  Badge,
  Button, Card,
  CardBody, CardHeader,
  // CardHeader,
  Col,
  // Input,
  Nav,
  NavItem,
  NavLink, Progress,
  Pagination, PaginationItem, PaginationLink,
  Row,
  // TabContent,
  Table,
  TabPane,
} from 'reactstrap';
import Spinner from "reactstrap/es/Spinner";
import config from "../../Config/strings";
import SweetAlert from 'react-bootstrap-sweetalert';
import {mapToCssModules} from "reactstrap/lib/utils";
import classNames from "classnames";
import constant from "../../../redux/constant"
// import styles from "../../Config/styles";

class Analysis extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: new Array(4).fill('1'),
      isLoaded: false,
      isCategoriesLoaded: false,
      isBrandsLoaded: false,
      data: [],
      alert: null,
      filterField: {
        name: "",
        mobile_phone: "",
        email: "",
      }
    };
  }

  componentDidMount() {
    this.getProducts();
    this.getCategories();
    this.getBrands();
  }

  getProducts() {
    // let token = localStorage.getItem('token');
    let url = config.nhom3_url + "/api/products/";
    fetch(url, {
        method: "GET",
        // headers: {
        // "Content-Type": "application/json",
        // "authorization": "Bearer " + token,
        //   'Access-Control-Allow-Origin': "*",
        //   'Access-Control-Allow-Headers': "*",
        // },
        // credentials: "same-origin"
      }
    ).then(response => response.json()).then((responseJson) => {
      console.log(responseJson.data, this.state.isLoaded);
      this.setState({data: responseJson.data, isLoaded: true});
    }, function (error) {
    })
  }

  getCategories() {
    let url = config.nhom3_url + "/api/categories/";
    fetch(url, {
        method: "GET",
      }
    ).then(response => response.json()).then((responseJson) => {
      this.setState({categories: responseJson.data, isCategoriesLoaded: true});
    }, function (error) {
    })
  }

  getBrands() {
    let url = config.nhom3_url + "/api/brands/";
    fetch(url, {
        method: "GET",
      }
    ).then(response => response.json()).then((responseJson) => {
      this.setState({brands: responseJson.data, isBrandsLoaded: true});
    }, function (error) {
    })
  }

  deleteProduct(id, index) {
    // let token = localStorage.getItem('token');
    let url = config.nhom3_url + "/api/products/";
    fetch(url + id, {
      method: 'DELETE',
      // headers: {
      //   "Content-Type": "application/json",
      //   "authorization": "Bearer " + token,
      // },
      // credentials: "same-origin"
    }).then((res) => res.json())
      .then((responseJson) => {
        if (responseJson) {
          const getAlert = () => (
            <SweetAlert
              success
              timeout={1500}
              onConfirm={() => {
                this.hideAlert();
                this.state.data.splice(index, 1)
              }}
            >
              {responseJson.message}
            </SweetAlert>
          );
          this.setState({
            alert: getAlert()
          });
        } else {
          const getAlert = () => (
            <SweetAlert
              onConfirm={() => this.hideAlert()}
            >
              {responseJson.errors.message}
            </SweetAlert>
          );
          this.setState({
            alert: getAlert()
          });
        }
      })
      .catch((err) => console.log(err))
  }

  deleteCategory(id, index) {
    // let token = localStorage.getItem('token');
    let url = config.nhom3_url + "/api/categories/";
    fetch(url + id, {
      method: 'DELETE',
      // headers: {
      //   "Content-Type": "application/json",
      //   "authorization": "Bearer " + token,
      // },
      // credentials: "same-origin"
    }).then((res) => res.json())
      .then((responseJson) => {
        if (responseJson) {
          const getAlert = () => (
            <SweetAlert
              success
              timeout={1500}
              onConfirm={() => {
                this.hideAlert();
                this.state.data.splice(index, 1)
              }}
            >
              {responseJson.message}
            </SweetAlert>
          );
          this.setState({
            alert: getAlert()
          });
        } else {
          const getAlert = () => (
            <SweetAlert
              onConfirm={() => this.hideAlert()}
            >
              {responseJson.errors.message}
            </SweetAlert>
          );
          this.setState({
            alert: getAlert()
          });
        }
      })
      .catch((err) => console.log(err))
  }

  deleteBrand(id, index) {
    // let token = localStorage.getItem('token');
    let url = config.nhom3_url + "/api/brands/";
    fetch(url + id, {
      method: 'DELETE',
      // headers: {
      //   "Content-Type": "application/json",
      //   "authorization": "Bearer " + token,
      // },
      // credentials: "same-origin"
    }).then((res) => res.json())
      .then((responseJson) => {
        if (responseJson) {
          const getAlert = () => (
            <SweetAlert
              success
              timeout={1500}
              onConfirm={() => {
                this.hideAlert();
                this.state.data.splice(index, 1)
              }}
            >
              {responseJson.message}
            </SweetAlert>
          );
          this.setState({
            alert: getAlert()
          });
        } else {
          const getAlert = () => (
            <SweetAlert
              onConfirm={() => this.hideAlert()}
            >
              {responseJson.errors.message}
            </SweetAlert>
          );
          this.setState({
            alert: getAlert()
          });
        }
      })
      .catch((err) => console.log(err))
  }

  toggle(tabPane, tab) {
    const newArray = this.state.activeTab.slice();
    newArray[tabPane] = tab;
    this.setState({
      activeTab: newArray,
    });
  }

  handleChange(event) {
    this.state.filterField[event.target.name] = event.target.value;
    this.setState(({filterField: this.state.filterField}));
  }

  filteredUser(user) {
    let fields = this.state.filterField;
    return ((user.name && user.name.toLowerCase().indexOf(fields.name.toLowerCase())) !== -1) &&
      ((user.mobile_phone && user.mobile_phone.toLowerCase().indexOf(fields.mobile_phone.toLowerCase())) !== -1) &&
      ((user.email && user.email.toLowerCase().indexOf(fields.email.toLowerCase())) !== -1);
  }

  renderAlert(Id, index) {
    const getAlert = () => (
      <SweetAlert
        custom
        showCancel
        confirmBtnText="Xóa"
        cancelBtnText="Hủy"
        confirmBtnBsStyle="primary"
        cancelBtnBsStyle="default"
        // customIcon="thumbs-up.jpg"
        title="Bạn chắc chắn muốn xóa?"
        onConfirm={() => this.deleteProduct(Id, index)}
        onCancel={() => this.hideAlert()}
      >
        Bạn không thể khôi phục được thông tin đã xóa!
      </SweetAlert>);
    // this.state.data.splice(index, 1);
    this.setState({
      alert: getAlert()
    });
  }

  renderCategoryAlert(Id, index) {
    const getAlert = () => (
      <SweetAlert
        custom
        showCancel
        confirmBtnText="Xóa"
        cancelBtnText="Hủy"
        confirmBtnBsStyle="primary"
        cancelBtnBsStyle="default"
        // customIcon="thumbs-up.jpg"
        title="Bạn chắc chắn muốn xóa?"
        onConfirm={() => this.deleteCategory(Id, index)}
        onCancel={() => this.hideAlert()}
      >
        Bạn không thể khôi phục được thông tin đã xóa!
      </SweetAlert>);
    // this.state.data.splice(index, 1);
    this.setState({
      alert: getAlert()
    });
  }

  renderBrandAlert(Id, index) {
    const getAlert = () => (
      <SweetAlert
        custom
        showCancel
        confirmBtnText="Xóa"
        cancelBtnText="Hủy"
        confirmBtnBsStyle="primary"
        cancelBtnBsStyle="default"
        // customIcon="thumbs-up.jpg"
        title="Bạn chắc chắn muốn xóa?"
        onConfirm={() => this.deleteBrand(Id, index)}
        onCancel={() => this.hideAlert()}
      >
        Bạn không thể khôi phục được thông tin đã xóa!
      </SweetAlert>);
    // this.state.data.splice(index, 1);
    this.setState({
      alert: getAlert()
    });
  }

  hideAlert() {
    this.setState({
      alert: null
    });
    console.log('Hiding alert...');

  }

  renderProducts() {
    if (!this.state.isLoaded) {
      return <Spinner/>
    } else {
      // let filtering = (this.state.filterField.name || this.state.filterField.mobile_phone || this.state.filterField.email);
      // let data;
      // if (!filtering) {
      //   data = this.state.data;
      // } else {
      //
      //   data = this.state.data.filter(x => this.filteredUser(x));
      //
      // }
      let data = this.state.data;
      console.log(this.state.data);
      let content = data.map((data, index) =>
        <tr key={data.id}>
          <td>{index + 1}</td>
          <td>{data.brand}</td>
          <td>{data.price}</td>
          <td>{data.name}</td>
          <td>{data.description}</td>
          <td><img src={data.image} alt="" height="100"/></td>
          <td>{data.category}</td>
          <td>
            <Button className="mr-1 btn-info" onClick={() => this.props.history.push('/product/' + data.id)}><i
              className="fa fa-eye "/></Button>
            {/*<Button className="mr-1 btn-success"><i className="cui-pencil icons font-lg "></i></Button>*/}
            <Button className="mr-1 btn-danger" onClick={() => this.renderAlert(data.id, index)}><i
              className="cui-trash icons font-lg "/></Button>
          </td>
        </tr>);
      return content;
    }
  }

  renderCategories() {
    if (!this.state.isCategoriesLoaded) {
      return <Spinner/>
    } else {
      let data = this.state.categories;
      console.log(data);
      let content = data.map((data, index) =>
        <tr key={data.id}>
          <td>{index + 1}</td>
          <td>{data.name}</td>
          <td>{data.description}</td>
          <td>
            <Button className="mr-1 btn-info" onClick={() => this.props.history.push('/product/' + data.id)}><i
              className="fa fa-eye "/></Button>
            {/*<Button className="mr-1 btn-success"><i className="cui-pencil icons font-lg "></i></Button>*/}
            <Button className="mr-1 btn-danger" onClick={() => this.renderCategoryAlert(data.id, index)}><i
              className="cui-trash icons font-lg "/></Button>
          </td>
        </tr>);
      return content;
    }
  }

  renderBrands() {
    if (!this.state.isBrandsLoaded) {
      return <Spinner/>
    } else {
      let data = this.state.brands;
      console.log(this.state.brands);
      let content = data.map((data, index) =>
        <tr key={data.id}>
          <td>{index + 1}</td>
          <td>{data.name}</td>
          <td>{data.description}</td>
          <td>
            <Button className="mr-1 btn-info" onClick={() => this.props.history.push('/product/' + data.id)}><i
              className="fa fa-eye "/></Button>
            {/*<Button className="mr-1 btn-success"><i className="cui-pencil icons font-lg "></i></Button>*/}
            <Button className="mr-1 btn-danger" onClick={() => this.renderBrandAlert(data.id, index)}><i
              className="cui-trash icons font-lg "/></Button>
          </td>
        </tr>);
      return content;
    }
  }

  renderCard(title, url, description) {
    return (
      <Card>
        <CardHeader>
          {title}
        </CardHeader>
        <CardBody>
         <Row>
           <Col md={3}>
             <img src={url} style={{height:'200px'}} alt=""/>
           </Col>
           <Col md={6}>
             {description}
           </Col>
           <Col md={3}>
             <Button color="danger" style={{float:'right', margin:'5px'}}>Xóa</Button>
             <Button color="primary" style={{float:'right', margin:'5px'}} onClick={() => this.props.history.push('/analysis/detail/')} >Tạo báo cáo</Button>
           </Col>
         </Row>
        </CardBody>
      </Card>
    )
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" md="12">
            <p className="font-weight-bold">QUẢN LÝ PHÂN TÍCH SỰ CỐ</p>
            <div className="animated fadeIn">
              <Row>


                <Col xs="12" lg="12">
                  <Card>
                    <CardHeader>
                      <i className="fa fa-align-justify"></i> Thông tin nhận từ drone
                    </CardHeader>
                    <CardBody>
                      <Table responsive striped>
                        <thead>
                        <tr>
                          <th>Thông tin sự cố</th>
                          <th>Trạng thái trước</th>
                          <th>Trạng thái hiện tại</th>
                          <th>Nhóm gửi</th>
                          {/*<th>Nội dung</th>*/}
                          <th>Xử lý</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                          <td>Sự cố cây đổ</td>
                          <td><img style={{width:'200px'}} src="https://lh3.googleusercontent.com/proxy/u_c-8dx3IApISsReNFPqshSpKNDJ4NArgnPw8evKFlbwte8esDLziS-fS5AjPqgV4p4dgnuwYbpCs5RByuBTD0ar07qEAX6Pz9KxFN8SHbr_9JM4pET8CbtdPxM_EcTVkFhsKD-EEwxMvAqukWcoBF7VVCZytw4_WoRRp-lQK73PXOl9Xug2KGXExioKvU8p2A" alt=""/></td>
                          <td><img style={{width:'200px'}} src="https://image3.tienphong.vn/665x449/Uploaded/2020/cajwqxjwp/2019_08_04/68431560_13252830442_cwej.jpg" alt=""/></td>
                          <td>Nhóm 4</td>
                          {/*<td>Đối với cây to bật gốc sẽ được chuyển về các vườn ươm. Nếu cây phù hợp với quy hoạch cây đô thị thì sẽ chuyển lại vị trí cũ</td>*/}
                          <td>
                            <Button color="primary" style={{margin:'5px'}} onClick={() => this.props.history.push('/analysis/detail/')} >Tạo báo cáo</Button>
                            <Button color="danger" style={{ margin:'5px'}}>Xóa</Button>
                          </td>
                        </tr>
                        <tr>
                          <td>Sự cố lưới điện nhà trường</td>
                          <td><img style={{width:'200px'}} src="https://afamilycdn.com/150157425591193600/2020/5/31/anh-15-a-15907491298011580754235-15907500860191964446243-1590885845000-1590885845268941692394.png" alt=""/></td>
                          <td><img style={{width:'200px'}} src="http://res.cgvdt.vn/ckfinder/images/2016/Thoi%20Su%20va%20Suy%20Nghi/2068/IMAG0405.jpg" alt=""/></td>
                          <td>Nhóm 8</td>
                          {/*<td>Việc cây đổ còn nói lên một thực trạng buồn là trong quá trình đô thị hóa, chúng ta đã không cân bằng được không</td>*/}
                          <td>
                            <Button color="primary" style={{ margin:'5px'}} onClick={() => this.props.history.push('/analysis/detail/')} >Tạo báo cáo</Button>
                            <Button color="danger" style={{ margin:'5px'}}>Xóa</Button>
                          </td>
                        </tr>
                        <tr>
                          <td>Sự cố cây xanh lưới điện đường giao thông</td>
                          <td><img style={{width:'200px'}} src="https://photo-1-baomoi.zadn.vn/w1000_r1/2017_08_10_324_22979700/cb5699120256eb08b247.jpg" alt=""/></td>
                          <td><img style={{width:'200px'}} src="https://vnn-imgs-f.vgcloud.vn/2018/06/14/18/cay-phuong-gia-do-de-5-nguoi-tren-pho-ha-noi-4.jpg" alt=""/></td>
                          <td>Nhóm 4</td>
                          {/*<td>Lúc đó cây phượng đổ từ từ, 2 xe máy đi qua thì cây đổ ập xuống, mọi người nhanh chóng vào cứu người bị cây đè và gọi ngay cho cơ quan chức năng</td>*/}
                          <td>
                            <Button color="primary" style={{ margin:'5px'}} onClick={() => this.props.history.push('/analysis/detail/')} >Tạo báo cáo</Button>
                            <Button color="danger" style={{ margin:'5px'}}>Xóa</Button>
                          </td>
                        </tr>

                        </tbody>
                      </Table>
                      <Pagination>
                        <PaginationItem disabled><PaginationLink previous tag="button">Prev</PaginationLink></PaginationItem>
                        <PaginationItem active>
                          <PaginationLink tag="button">1</PaginationLink>
                        </PaginationItem>
                        <PaginationItem><PaginationLink tag="button">2</PaginationLink></PaginationItem>
                        <PaginationItem><PaginationLink tag="button">3</PaginationLink></PaginationItem>
                        <PaginationItem><PaginationLink tag="button">4</PaginationLink></PaginationItem>
                        <PaginationItem><PaginationLink next tag="button">Next</PaginationLink></PaginationItem>
                      </Pagination>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
              {/*<Row>*/}
              {/*  <Col xs="12" md="12">*/}
              {/*    {this.renderCard("Sự cố cây đổ", "https://image3.tienphong.vn/665x449/Uploaded/2020/cajwqxjwp/2019_08_04/68431560_13252830442_cwej.jpg", "Đối với những cây bị đổ, nghiêng sẽ giao cho đơn vị quản lý thực hiện trồng dựng lại, chằng chống cẩn thận để đảm bảo cây xanh có thể sinh trưởng bình thường. \n" +*/}
              {/*      "Đối với cây to bật gốc sẽ được chuyển về các vườn ươm. Nếu cây phù hợp với quy hoạch cây đô thị thì sẽ chuyển lại vị trí cũ sau khi phát triển tốt tại vườn ươm. Nếu không, sẽ thay thế cây phù hợp vào vị trí cũ.\n" +*/}
              {/*      "\n" +*/}
              {/*      "Đại diện Sở Xây dựng cho biết thêm, cây đổ tập trung vào một số loại cây như: Xà cừ, Lát hoa, Phượng, Bằng lăng.")}*/}
              {/*    {this.renderCard("Sự cố cây xanh lưới điện đường giao thông", "https://vnn-imgs-f.vgcloud.vn/2018/06/14/18/cay-phuong-gia-do-de-5-nguoi-tren-pho-ha-noi-4.jpg", "Vụ việc khiến xe máy BKS 30N4-6407 có 3 người (1 người đàn ông, 1 phụ nữ và 1 trẻ em) và xe máy BKS 29Y3 371.14 có 2 người (1 phụ nữ và 1 trẻ em) đều bị thương, trong đó có 2 người bị thương nặng với những vết thương vùng đầu.\n" +*/}
              {/*      "\n" +*/}
              {/*      "Bà Vũ Thị Hồng, ở 84 Quán Sứ, kể: Lúc đó cây phượng đổ từ từ, 2 xe máy đi qua thì cây đổ ập xuống, mọi người nhanh chóng vào cứu người bị cây đè và gọi ngay cho cấp cứu.\n" +*/}
              {/*      "\n" +*/}
              {/*      "Khoảng 10 phút sau, 2 xe cấp cứu đã đến hiện trường đưa các nạn nhân vào bệnh viện. CSGT cùng lực lượng chức năng phường Trần Hưng Đạo có mặt phân luồng giao thông.")}*/}
              {/*    {this.renderCard("Sự cố lưới điện nhà trường", "http://res.cgvdt.vn/ckfinder/images/2016/Thoi%20Su%20va%20Suy%20Nghi/2068/IMAG0405.jpg", "Cây cối bị đổ ảnh hưởng đến sinh kế của nhiều người. Có những thợ sửa xe, cắt tóc, quán cóc bao năm nương tựa vào bóng mát cây xanh để kiếm sống, nay bỗng dưng không còn chỗ bấu víu. Còn lập lại chỗ sinh nhai mới trong mảnh đất chật người rất khó. Cây đổ khiến lòng người cũng đổ theo.\n" +*/}
              {/*      "\n" +*/}
              {/*      "Việc cây đổ còn nói lên một thực trạng buồn là trong quá trình đô thị hóa, chúng ta đã không cân bằng được không gian xanh và không gian sống. Người ta quá mải mê, thậm chí tranh đấu cho không gian sống mà đã xem nhẹ, hoặc lãng quên đi cái phần không gian xanh. Xã hội ngày càng biến chuyển, trái đất ngày càng nóng lên, người ngày càng đông và không gian sống ngày một ngột ngạt. Trong sự chuyển biến đó, sẽ rất nguy hiểm nếu như một ngày nào đó, những bóng cây xanh không còn.")}*/}
              {/*  </Col>*/}
              {/*  <Pagination*/}
              {/*    activePage={2}*/}
              {/*    pages={10}*/}
              {/*    onActivePageChange={2}*/}
              {/*  />*/}
              {/*</Row>*/}
            </div>
          </Col>
        </Row>

      </div>
    );
  }
}

export default Analysis;
