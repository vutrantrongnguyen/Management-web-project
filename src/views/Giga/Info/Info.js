import React, {Component} from 'react';
import { Badge, Card, CardBody, CardFooter, CardHeader, Col, Row, Collapse, Fade } from 'reactstrap';
import { AppSwitch } from '@coreui/react'


class Info extends Component{

  render(){
    return(
      <Row>
        <Col xs="12" sm="6" md="4">
          <Card>
            <CardHeader>
              Lã Ngọc Dương - 20165917
            </CardHeader>
            <CardBody>
             Giới thiệu về bạn Dương master viết báo cáo.
            </CardBody>
          </Card>
        </Col>
        <Col xs="12" sm="6" md="4">
          <Card>
            <CardHeader>
              Nguyễn Anh Đức - 20161094
            </CardHeader>
            <CardBody>
              Giới thiệu về bạn Đức, chuyên tổ chức họp, lên kế hoạch.
            </CardBody>
          </Card>
        </Col>
        <Col xs="12" sm="6" md="4">
          <Card>
            <CardHeader>
              Trần Văn Thông - 29167386
            </CardHeader>
            <CardBody>
              Giới thiệu về bạn Thông, người có trách nhiệm, vui tính.
            </CardBody>
          </Card>
        </Col>
        <Col xs="12" sm="6" md="4">

        </Col>
        <Col xs="12" sm="6" md="4">
          <Card>
            <CardHeader>
              Vũ Trần Trọng Nguyên - 20162996
            </CardHeader>
            <CardBody>
              Giới thiệu về bạn Nguyên, leader và hướng dẫn code.
            </CardBody>
          </Card>
        </Col>
        <Col xs="12" sm="6" md="4">

        </Col>
      </Row>
    )
  }
}

export default Info
