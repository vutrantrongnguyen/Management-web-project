import React, {Component} from 'react';
import {
  Button, Card,
  CardBody, CardHeader,Row,
  Col,
} from 'reactstrap';
import GoogleMapBlock from "./Component/GoogleMap";
import Spinner from "reactstrap/es/Spinner";
import config from "../../Config/strings";
import SweetAlert from 'react-bootstrap-sweetalert';
import constant from "../../../redux/constant"

class Analysis extends Component {

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  componentDidMount() {

  }


  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" md="12">
            <p className="font-weight-bold">QUẢN LÝ HIỂN THỊ SỰ CỐ TRÊN BẢN ĐỒ</p>
            <div className="animated fadeIn">
              <Row>

                <Col xs="12" md="12">

                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <Row>
        <Col xs="12" md="12">
          <div style={{height: '60vh', width: '100%'}}>
            <GoogleMapBlock/>
          </div>
        </Col>
      </Row>

      </div>
    );
  }
}

export default Analysis;
