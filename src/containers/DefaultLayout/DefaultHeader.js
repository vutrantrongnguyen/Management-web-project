import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';
import {Badge, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem} from 'reactstrap';
import PropTypes from 'prop-types';

import {AppAsideToggler, AppHeaderDropdown, AppNavbarBrand, AppSidebarToggler} from '@coreui/react';
import logo from '../../assets/img/brand/logo.PNG'
import sygnet from '../../assets/img/brand/logo.PNG'

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
  render() {

    // eslint-disable-next-line
    const {children, ...attributes} = this.props;

    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile/>
        <AppNavbarBrand
          href={"#"}
          full={{src: logo, width: 89, height: 25, alt: 'CoreUI Logo'}}
          minimized={{src: sygnet, width: 30, height: 30, alt: 'CoreUI Logo'}}
        />
        <AppSidebarToggler className="d-md-down-none" display="lg"/>

        <Nav className="d-md-down-none" navbar>
          <NavItem className="px-3">
            <a href="https://hi01-efd.web.app/" className="nav-link">Nhóm 1</a>
          </NavItem>
          <NavItem className="px-3">
            <a href="https://hi02-qlgs-foradmin.web.app/?fbclid=IwAR1x3n0Yc8z4C3JkWiFV_-ovpglTbQwjdZSSsvdHBo8pXFgw0IVzndSBO5w" className="nav-link">Nhóm 2</a>
          </NavItem>
          <NavItem className="px-3">
            <a href="https://nguyenvd27.github.io/HI_template/public/" className="nav-link">Nhóm 3</a>
          </NavItem>
          <NavItem className="px-3">
            <a href="https://drnguyen2525.github.io/hci-flight-management" className="nav-link">Nhóm 4</a>
          </NavItem>
          <NavItem className="px-3">
            <a href="https://electric-report-a846b.web.app/" className="nav-link">Nhóm 5</a>
          </NavItem>
          <NavItem className="px-3">
            <a href="https://nnhhai.github.io/" className="nav-link">Nhóm 7</a>
          </NavItem>
          <NavItem className="px-3">
            <a href="https://mighty-ravine-43801.herokuapp.com/" className="nav-link">Nhóm 8</a>
          </NavItem><NavItem className="px-3">
            <a href="https://www.figma.com/proto/vtNY9oE4CgxBhNfIQ83mGY/20192?node-id=95%3A2&scaling=scale-down&fbclid=IwAR3G0wHcH_WnV9JCKsoQ8wKTpttnKlMs5FEva2DmQ_OMfYDqOTHRRflg5Rg" className="nav-link">Nhóm 9</a>
          </NavItem>
          <NavItem className="px-3">
            <a href="https://ti-amo.github.io/HIreport-app/" className="nav-link">Nhóm 10</a>
          </NavItem>
        </Nav>
        <Nav className="ml-auto" navbar>
          {/*<NavItem className="d-md-down-none">*/}
          {/*  <NavLink to="#" className="nav-link"><i className="icon-bell"></i><Badge pill color="danger">5</Badge></NavLink>*/}
          {/*</NavItem>*/}
          {/*<NavItem className="d-md-down-none">*/}
          {/*  <NavLink to="#" className="nav-link"><i className="icon-list"></i></NavLink>*/}
          {/*</NavItem>*/}
          {/*<NavItem className="d-md-down-none">*/}
          {/*  <NavLink to="#" className="nav-link"><i className="icon-location-pin"></i></NavLink>*/}
          {/*</NavItem>*/}
          <AppHeaderDropdown direction="down">
            <DropdownToggle nav>
              <img src={'../../assets/img/avatars/6.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com"/>
            </DropdownToggle>
            <DropdownMenu right style={{right: 'auto'}}>
              {/*<DropdownItem header tag="div" className="text-center"><strong>Account</strong></DropdownItem>*/}
              {/*<DropdownItem><i className="fa fa-bell-o"></i> Updates<Badge color="info">42</Badge></DropdownItem>*/}
              {/*<DropdownItem><i className="fa fa-envelope-o"></i> Messages<Badge color="success">42</Badge></DropdownItem>*/}
              {/*<DropdownItem><i className="fa fa-tasks"></i> Tasks<Badge color="danger">42</Badge></DropdownItem>*/}
              {/*<DropdownItem><i className="fa fa-comments"></i> Comments<Badge color="warning">42</Badge></DropdownItem>*/}
              {/*<DropdownItem header tag="div" className="text-center"><strong>Settings</strong></DropdownItem>*/}
              {/*<DropdownItem><i className="fa fa-user"></i> Profile</DropdownItem>*/}
              {/*<DropdownItem><i className="fa fa-wrench"></i> Settings</DropdownItem>*/}
              {/*<DropdownItem><i className="fa fa-usd"></i> Payments<Badge color="secondary">42</Badge></DropdownItem>*/}
              <DropdownItem><i className="fa fa-file"></i> Hồ sơ</DropdownItem>
              {/*<DropdownItem divider />*/}
              <DropdownItem><i className="fa fa-shield"></i> Cài đặt </DropdownItem>
              <DropdownItem onClick={e => this.props.onLogout(e)}><i className="fa fa-lock"></i> Đăng
                xuất</DropdownItem>
            </DropdownMenu>
          </AppHeaderDropdown>
        </Nav>
        {/*<AppAsideToggler className="d-md-down-none" />*/}
        {/*<AppAsideToggler className="d-lg-none" mobile />*/}
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
