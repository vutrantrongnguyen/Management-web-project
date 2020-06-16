import React, { Component, lazy, Suspense } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
  Badge,
  Button,
  ButtonDropdown,
  ButtonGroup,
  ButtonToolbar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Progress,
  Row,
  Table,
} from 'reactstrap';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities'

// const Widget03 = lazy(() => import('../../views/Widgets/Widget03'));

const brandPrimary = getStyle('--primary')
const brandSuccess = getStyle('--success')
const brandInfo = getStyle('--info')
const brandWarning = getStyle('--warning')
const brandDanger = getStyle('--danger')

// Card Chart 1
const cardChartData1 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: brandPrimary,
      borderColor: 'rgba(255,255,255,.55)',
      data: [65, 59, 84, 84, 51, 55, 40],
    },
  ],
};

const cardChartOpts1 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent',
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        },

      }],
    yAxes: [
      {
        display: false,
        ticks: {
          display: false,
          min: Math.min.apply(Math, cardChartData1.datasets[0].data) - 5,
          max: Math.max.apply(Math, cardChartData1.datasets[0].data) + 5,
        },
      }],
  },
  elements: {
    line: {
      borderWidth: 1,
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
    },
  }
}


// Card Chart 2
const cardChartData2 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: brandInfo,
      borderColor: 'rgba(255,255,255,.55)',
      data: [1, 18, 9, 17, 34, 22, 11],
    },
  ],
};

const cardChartOpts2 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent',
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        },

      }],
    yAxes: [
      {
        display: false,
        ticks: {
          display: false,
          min: Math.min.apply(Math, cardChartData2.datasets[0].data) - 5,
          max: Math.max.apply(Math, cardChartData2.datasets[0].data) + 5,
        },
      }],
  },
  elements: {
    line: {
      tension: 0.00001,
      borderWidth: 1,
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
    },
  },
};

// Card Chart 3
const cardChartData3 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,255,255,.2)',
      borderColor: 'rgba(255,255,255,.55)',
      data: [78, 81, 80, 45, 34, 12, 40],
    },
  ],
};

const cardChartOpts3 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
  elements: {
    line: {
      borderWidth: 2,
    },
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
    },
  },
};

// Card Chart 4
const cardChartData4 = {
  labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,255,255,.3)',
      borderColor: 'transparent',
      data: [78, 81, 80, 45, 34, 12, 40, 75, 34, 89, 32, 68, 54, 72, 18, 98],
    },
  ],
};

const cardChartOpts4 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
        barPercentage: 0.6,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
};

// Social Box Chart
const socialBoxData = [
  { data: [65, 59, 84, 84, 51, 55, 40], label: 'facebook' },
  { data: [1, 13, 9, 17, 34, 41, 38], label: 'twitter' },
  { data: [78, 81, 80, 45, 34, 12, 40], label: 'linkedin' },
  { data: [35, 23, 56, 22, 97, 23, 64], label: 'google' },
];

const makeSocialBoxData = (dataSetNo) => {
  const dataset = socialBoxData[dataSetNo];
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        backgroundColor: 'rgba(255,255,255,.1)',
        borderColor: 'rgba(255,255,255,.55)',
        pointHoverBackgroundColor: '#fff',
        borderWidth: 2,
        data: dataset.data,
        label: dataset.label,
      },
    ],
  };
  return () => data;
};

const socialChartOpts = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  responsive: true,
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
  elements: {
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3,
    },
  },
};

// sparkline charts
const sparkLineChartData = [
  {
    data: [35, 23, 56, 22, 97, 23, 64],
    label: 'New Clients',
  },
  {
    data: [65, 59, 84, 84, 51, 55, 40],
    label: 'Recurring Clients',
  },
  {
    data: [35, 23, 56, 22, 97, 23, 64],
    label: 'Pageviews',
  },
  {
    data: [65, 59, 84, 84, 51, 55, 40],
    label: 'Organic',
  },
  {
    data: [78, 81, 80, 45, 34, 12, 40],
    label: 'CTR',
  },
  {
    data: [1, 13, 9, 17, 34, 41, 38],
    label: 'Bounce Rate',
  },
];

const makeSparkLineData = (dataSetNo, variant) => {
  const dataset = sparkLineChartData[dataSetNo];
  const data = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        backgroundColor: 'transparent',
        borderColor: variant ? variant : '#c2cfd6',
        data: dataset.data,
        label: dataset.label,
      },
    ],
  };
  return () => data;
};

const sparklineChartOpts = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  responsive: true,
  maintainAspectRatio: true,
  scales: {
    xAxes: [
      {
        display: false,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
  elements: {
    line: {
      borderWidth: 2,
    },
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3,
    },
  },
  legend: {
    display: false,
  },
};

// Main Chart

//Random Numbers
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var elements = 27;
var data1 = [];
var data2 = [];
var data3 = [];

for (var i = 0; i <= elements; i++) {
  data1.push(random(50, 200));
  data2.push(random(80, 100));
  data3.push(65);
}

const mainChart = {
  labels: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: hexToRgba(brandInfo, 10),
      borderColor: brandInfo,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: data1,
    },
    {
      label: 'My Second dataset',
      backgroundColor: 'transparent',
      borderColor: brandSuccess,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: data2,
    },
    {
      label: 'My Third dataset',
      backgroundColor: 'transparent',
      borderColor: brandDanger,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 1,
      borderDash: [8, 5],
      data: data3,
    },
  ],
};

const mainChartOpts = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips,
    intersect: true,
    mode: 'index',
    position: 'nearest',
    callbacks: {
      labelColor: function(tooltipItem, chart) {
        return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor }
      }
    }
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          drawOnChartArea: false,
        },
      }],
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 5,
          stepSize: Math.ceil(250 / 5),
          max: 250,
        },
      }],
  },
  elements: {
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3,
    },
  },
};

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

    this.state = {
      dropdownOpen: false,
      radioSelected: 2,
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  onRadioBtnClick(radioSelected) {
    this.setState({
      radioSelected: radioSelected,
    });
  }

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  render() {

    return (
      <div className="animated fadeIn">
        <h1 style={{textAlign:"center"}}>Chúng tôi ở đây để mang lại giá trị cốt lõi cho bạn!</h1>
        <hr/>
        <Card  style={{margin: '10px'}}>
          <CardBody>
            <Row>
              <Col sm="5">
                <h4 id="traffic" className="card-title mb-0">Traffic</h4>
                <div className="small text-muted">June 2020</div>
              </Col>
              <Col sm="7" className="d-none d-md-block">
                <Button color="primary" className="float-right">
                  {/*<CIcon name="cil-cloud-download"/>*/}
                </Button>
                <ButtonGroup className="float-right mr-3">
                  {
                    ['Day', 'Month', 'Year'].map(value => (
                      <Button
                        color="outline-secondary"
                        key={value}
                        className="mx-0"
                        active={value === 'Month'}
                      >
                        {value}
                      </Button>
                    ))
                  }
                </ButtonGroup>
              </Col>
            </Row>
            {/*<MainChartExample style={{height: '300px', marginTop: '40px'}}/>*/}
          </CardBody>
          <CardFooter>
            <Row className="text-center">
              <Col md sm="12" className="mb-sm-2 mb-0">
                <div className="text-muted">Visits</div>
                <strong>29.703 Users (40%)</strong>
                <Progress
                  className="progress-xs mt-2"
                  precision={1}
                  color="success"
                  value={40}
                />
              </Col>
              <Col md sm="12" className="mb-sm-2 mb-0 d-md-down-none">
                <div className="text-muted">Unique</div>
                <strong>24.093 Users (20%)</strong>
                <Progress
                  className="progress-xs mt-2"
                  precision={1}
                  color="info"
                  value={40}
                />
              </Col>
              <Col md sm="12" className="mb-sm-2 mb-0">
                <div className="text-muted">Pageviews</div>
                <strong>78.706 Views (60%)</strong>
                <Progress
                  className="progress-xs mt-2"
                  precision={1}
                  color="warning"
                  value={40}
                />
              </Col>
              <Col md sm="12" className="mb-sm-2 mb-0">
                <div className="text-muted">New Users</div>
                <strong>22.123 Users (80%)</strong>
                <Progress
                  className="progress-xs mt-2"
                  precision={1}
                  color="danger"
                  value={40}
                />
              </Col>
              <Col md sm="12" className="mb-sm-2 mb-0 d-md-down-none">
                <div className="text-muted">Bounce Rate</div>
                <strong>Average Rate (40.15%)</strong>
                <Progress
                  className="progress-xs mt-2"
                  precision={1}
                  value={40}
                />
              </Col>
            </Row>
          </CardFooter>
        </Card>

        {/*<WidgetsBrand withCharts/>*/}

        <Row style={{margin: '5px'}}>
          <Col>
            <Card>
              <CardHeader>
                Traffic {' & '} Sales
              </CardHeader>
              <CardBody>
                <Row>
                  <Col xs="12" md="6" xl="6">

                    <Row>
                      <Col sm="6">
                        {/*<Callout color="info">*/}
                        {/*  <small className="text-muted">New Clients</small>*/}
                        {/*  <br />*/}
                        {/*      <strong className="h4">9,123</strong>*/}
                        {/*    </Callout>*/}
                      </Col>
                      <Col sm="6">
                        {/*    <Callout color="danger">*/}
                        {/*      <small className="text-muted">Recurring Clients</small>*/}
                        {/*      <br />*/}
                        {/*      <strong className="h4">22,643</strong>*/}
                        {/*    </Callout>*/}
                      </Col>
                    </Row>

                    <hr className="mt-0" />

                    <div className="progress-group mb-4">
                      <div className="progress-group-prepend">
                      <span className="progress-group-text">
                        Monday
                      </span>
                      </div>
                      <div className="progress-group-bars">
                        <Progress className="progress-xs" color="info" value="34" />
                        <Progress className="progress-xs" color="danger" value="78" />
                      </div>
                    </div>
                    <div className="progress-group mb-4">
                      <div className="progress-group-prepend">
                      <span className="progress-group-text">
                      Tuesday
                      </span>
                      </div>
                      <div className="progress-group-bars">
                        <Progress className="progress-xs" color="info" value="56" />
                        <Progress className="progress-xs" color="danger" value="94" />
                      </div>
                    </div>
                    <div className="progress-group mb-4">
                      <div className="progress-group-prepend">
                      <span className="progress-group-text">
                      Wednesday
                      </span>
                      </div>
                      <div className="progress-group-bars">
                        <Progress className="progress-xs" color="info" value="12" />
                        <Progress className="progress-xs" color="danger" value="67" />
                      </div>
                    </div>
                    <div className="progress-group mb-4">
                      <div className="progress-group-prepend">
                      <span className="progress-group-text">
                      Thursday
                      </span>
                      </div>
                      <div className="progress-group-bars">
                        <Progress className="progress-xs" color="info" value="43" />
                        <Progress className="progress-xs" color="danger" value="91" />
                      </div>
                    </div>
                    <div className="progress-group mb-4">
                      <div className="progress-group-prepend">
                      <span className="progress-group-text">
                      Friday
                      </span>
                      </div>
                      <div className="progress-group-bars">
                        <Progress className="progress-xs" color="info" value="22" />
                        <Progress className="progress-xs" color="danger" value="73" />
                      </div>
                    </div>
                    <div className="progress-group mb-4">
                      <div className="progress-group-prepend">
                      <span className="progress-group-text">
                      Saturday
                      </span>
                      </div>
                      <div className="progress-group-bars">
                        <Progress className="progress-xs" color="info" value="53" />
                        <Progress className="progress-xs" color="danger" value="82" />
                      </div>
                    </div>
                    <div className="progress-group mb-4">
                      <div className="progress-group-prepend">
                      <span className="progress-group-text">
                      Sunday
                      </span>
                      </div>
                      <div className="progress-group-bars">
                        <Progress className="progress-xs" color="info" value="9" />
                        <Progress className="progress-xs" color="danger" value="69" />
                      </div>
                    </div>
                    <div className="legend text-center">
                      <small>
                        <sup className="px-1"><Badge shape="pill" color="info">&nbsp;</Badge></sup>
                        New clients
                        &nbsp;
                        <sup className="px-1"><Badge shape="pill" color="danger">&nbsp;</Badge></sup>
                        Recurring clients
                      </small>
                    </div>
                  </Col>

                  <Col xs="12" md="6" xl="6">

                    <Row>
                      <Col sm="6">
                        {/* <Callout color="warning">*/}
                        {/*   <small className="text-muted">Pageviews</small>*/}
                        {/*   <br />*/}
                        {/*  <strong className="h4">78,623</strong>*/}
                        {/*</Callout>*/}
                      </Col>
                      <Col sm="6">
                        {/*<Callout color="success">*/}
                        {/*  <small className="text-muted">Organic</small>*/}
                        {/*  <br />*/}
                        {/*  <strong className="h4">49,123</strong>*/}
                        {/*</Callout>*/}
                      </Col>
                    </Row>

                    <hr className="mt-0" />

                    <div className="progress-group mb-4">
                      <div className="progress-group-header">
                        {/*<CIcon className="progress-group-icon" name="cil-user" />*/}
                        <span className="title">Male</span>
                        <span className="ml-auto font-weight-bold">43%</span>
                      </div>
                      <div className="progress-group-bars">
                        <Progress className="progress-xs" color="warning" value="43" />
                      </div>
                    </div>
                    <div className="progress-group mb-5">
                      <div className="progress-group-header">
                        {/*<CIcon className="progress-group-icon" name="cil-user-female" />*/}
                        <span className="title">Female</span>
                        <span className="ml-auto font-weight-bold">37%</span>
                      </div>
                      <div className="progress-group-bars">
                        <Progress className="progress-xs" color="warning" value="37" />
                      </div>
                    </div>
                    <div className="progress-group">
                      <div className="progress-group-header">
                        {/*<CIcon className="progress-group-icon" name="cil-globe-alt" />*/}
                        <span className="title">Organic Search</span>
                        <span className="ml-auto font-weight-bold">191,235 <span className="text-muted small">(56%)</span></span>
                      </div>
                      <div className="progress-group-bars">
                        <Progress className="progress-xs" color="success" value="56" />
                      </div>
                    </div>


                    <div className="progress-group">
                      <div className="progress-group-header">
                        {/*<CIcon name="cib-facebook" className="progress-group-icon" />*/}
                        <span className="title">Facebook</span>
                        <span className="ml-auto font-weight-bold">51,223 <span className="text-muted small">(15%)</span></span>
                      </div>
                      <div className="progress-group-bars">
                        <Progress className="progress-xs" color="success" value="15" />
                      </div>
                    </div>
                    <div className="progress-group">
                      <div className="progress-group-header">
                        {/*<CIcon name="cib-twitter" className="progress-group-icon" />*/}
                        <span className="title">Twitter</span>
                        <span className="ml-auto font-weight-bold">37,564 <span className="text-muted small">(11%)</span></span>
                      </div>
                      <div className="progress-group-bars">
                        <Progress className="progress-xs" color="success" value="11" />
                      </div>
                    </div>
                    <div className="progress-group">
                      <div className="progress-group-header">
                        {/*<CIcon name="cib-linkedin" className="progress-group-icon" />*/}
                        <span className="title">LinkedIn</span>
                        <span className="ml-auto font-weight-bold">27,319 <span className="text-muted small">(8%)</span></span>
                      </div>
                      <div className="progress-group-bars">
                        <Progress className="progress-xs" color="success" value="8" />
                      </div>
                    </div>
                    <div className="divider text-center">
                      <Button color="link" size="sm" className="text-muted">
                        {/*<CIcon name="cil-options" />*/}
                      </Button>
                    </div>

                  </Col>
                </Row>

                {/*<br />*/}

                {/*<table className="table table-hover table-outline mb-0 d-none d-sm-table">*/}
                {/*  <thead className="thead-light">*/}
                {/*  <tr>*/}
                {/*    /!*<th className="text-center"><CIcon name="cil-people" /></th>*!/*/}
                {/*    <th>User</th>*/}
                {/*    <th className="text-center">Country</th>*/}
                {/*    <th>Usage</th>*/}
                {/*    <th className="text-center">Payment Method</th>*/}
                {/*    <th>Activity</th>*/}
                {/*  </tr>*/}
                {/*  </thead>*/}
                {/*  <tbody>*/}
                {/*  <tr>*/}
                {/*    <td className="text-center">*/}
                {/*      <div className="c-avatar">*/}
                {/*        <img src={'avatars/user.png'} style={{height:"50px"}} className="c-avatar-img" alt="admin@bootstrapmaster.com" />*/}
                {/*        <span className="c-avatar-status bg-success"></span>*/}
                {/*      </div>*/}
                {/*    </td>*/}
                {/*    <td>*/}
                {/*      <div>Yiorgos Avraamu</div>*/}
                {/*      <div className="small text-muted">*/}
                {/*        <span>New</span> | Registered: Jan 1, 2015*/}
                {/*      </div>*/}
                {/*    </td>*/}
                {/*    <td className="text-center">*/}
                {/*      /!*<CIcon height={25} name="cif-us" title="us" id="us" />*!/*/}
                {/*    </td>*/}
                {/*    <td>*/}
                {/*      <div className="clearfix">*/}
                {/*        <div className="float-left">*/}
                {/*          <strong>50%</strong>*/}
                {/*        </div>*/}
                {/*        <div className="float-right">*/}
                {/*          <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>*/}
                {/*        </div>*/}
                {/*      </div>*/}
                {/*      <Progress className="progress-xs" color="success" value="50" />*/}
                {/*    </td>*/}
                {/*    <td className="text-center">*/}
                {/*      /!*<CIcon height={25} name="cib-cc-mastercard" />*!/*/}
                {/*    </td>*/}
                {/*    <td>*/}
                {/*      <div className="small text-muted">Last login</div>*/}
                {/*      <strong>10 sec ago</strong>*/}
                {/*    </td>*/}
                {/*  </tr>*/}
                {/*  <tr>*/}
                {/*    <td className="text-center">*/}
                {/*      <div className="c-avatar">*/}
                {/*        <img src={'avatars/user.png'} className="c-avatar-img" alt="admin@bootstrapmaster.com" />*/}
                {/*        <span className="c-avatar-status bg-danger"></span>*/}
                {/*      </div>*/}
                {/*    </td>*/}
                {/*    <td>*/}
                {/*      <div>Avram Tarasios</div>*/}
                {/*      <div className="small text-muted">*/}

                {/*        <span>Recurring</span> | Registered: Jan 1, 2015*/}
                {/*      </div>*/}
                {/*    </td>*/}
                {/*    <td className="text-center">*/}
                {/*      /!*<CIcon height={25} name="cif-br" title="br" id="br" />*!/*/}
                {/*    </td>*/}
                {/*    <td>*/}
                {/*      <div className="clearfix">*/}
                {/*        <div className="float-left">*/}
                {/*          <strong>10%</strong>*/}
                {/*        </div>*/}
                {/*        <div className="float-right">*/}
                {/*          <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>*/}
                {/*        </div>*/}
                {/*      </div>*/}
                {/*      <Progress className="progress-xs" color="info" value="10" />*/}
                {/*    </td>*/}
                {/*    <td className="text-center">*/}
                {/*      /!*<CIcon height={25} name="cib-cc-visa" />*!/*/}
                {/*    </td>*/}
                {/*    <td>*/}
                {/*      <div className="small text-muted">Last login</div>*/}
                {/*      <strong>5 minutes ago</strong>*/}
                {/*    </td>*/}
                {/*  </tr>*/}
                {/*  <tr>*/}
                {/*    <td className="text-center">*/}
                {/*      <div className="c-avatar">*/}
                {/*        <img src={'avatars/user.png'} className="c-avatar-img" alt="admin@bootstrapmaster.com" />*/}
                {/*        <span className="c-avatar-status bg-warning"></span>*/}
                {/*      </div>*/}
                {/*    </td>*/}
                {/*    <td>*/}
                {/*      <div>Quintin Ed</div>*/}
                {/*      <div className="small text-muted">*/}
                {/*        <span>New</span> | Registered: Jan 1, 2015*/}
                {/*      </div>*/}
                {/*    </td>*/}
                {/*    <td className="text-center">*/}
                {/*      /!*<CIcon height={25} name="cif-in" title="in" id="in" />*!/*/}
                {/*    </td>*/}
                {/*    <td>*/}
                {/*      <div className="clearfix">*/}
                {/*        <div className="float-left">*/}
                {/*          <strong>74%</strong>*/}
                {/*        </div>*/}
                {/*        <div className="float-right">*/}
                {/*          <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>*/}
                {/*        </div>*/}
                {/*      </div>*/}
                {/*      <Progress className="progress-xs" color="warning" value="74" />*/}
                {/*    </td>*/}
                {/*    <td className="text-center">*/}
                {/*      /!*<CIcon height={25} name="cib-stripe" />*!/*/}
                {/*    </td>*/}
                {/*    <td>*/}
                {/*      <div className="small text-muted">Last login</div>*/}
                {/*      <strong>1 hour ago</strong>*/}
                {/*    </td>*/}
                {/*  </tr>*/}
                {/*  <tr>*/}
                {/*    <td className="text-center">*/}
                {/*      <div className="c-avatar">*/}
                {/*        <img src={'avatars/user.png'} className="c-avatar-img" alt="admin@bootstrapmaster.com" />*/}
                {/*        <span className="c-avatar-status bg-secondary"></span>*/}
                {/*      </div>*/}
                {/*    </td>*/}
                {/*    <td>*/}
                {/*      <div>Enéas Kwadwo</div>*/}
                {/*      <div className="small text-muted">*/}
                {/*        <span>New</span> | Registered: Jan 1, 2015*/}
                {/*      </div>*/}
                {/*    </td>*/}
                {/*    <td className="text-center">*/}
                {/*      /!*<CIcon height={25} name="cif-fr" title="fr" id="fr" />*!/*/}
                {/*    </td>*/}
                {/*    <td>*/}
                {/*      <div className="clearfix">*/}
                {/*        <div className="float-left">*/}
                {/*          <strong>98%</strong>*/}
                {/*        </div>*/}
                {/*        <div className="float-right">*/}
                {/*          <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>*/}
                {/*        </div>*/}
                {/*      </div>*/}
                {/*      <Progress className="progress-xs" color="danger" value="98" />*/}
                {/*    </td>*/}
                {/*    <td className="text-center">*/}
                {/*      /!*<CIcon height={25} name="cib-paypal" />*!/*/}
                {/*    </td>*/}
                {/*    <td>*/}
                {/*      <div className="small text-muted">Last login</div>*/}
                {/*      <strong>Last month</strong>*/}
                {/*    </td>*/}
                {/*  </tr>*/}
                {/*  <tr>*/}
                {/*    <td className="text-center">*/}
                {/*      <div className="c-avatar">*/}
                {/*        <img src={'avatars/user.png'} className="c-avatar-img" alt="admin@bootstrapmaster.com" />*/}
                {/*        <span className="c-avatar-status bg-success"></span>*/}
                {/*      </div>*/}
                {/*    </td>*/}
                {/*    <td>*/}
                {/*      <div>Agapetus Tadeáš</div>*/}
                {/*      <div className="small text-muted">*/}
                {/*        <span>New</span> | Registered: Jan 1, 2015*/}
                {/*      </div>*/}
                {/*    </td>*/}
                {/*    <td className="text-center">*/}
                {/*      /!*<CIcon height={25} name="cif-es" title="es" id="es" />*!/*/}
                {/*    </td>*/}
                {/*    <td>*/}
                {/*      <div className="clearfix">*/}
                {/*        <div className="float-left">*/}
                {/*          <strong>22%</strong>*/}
                {/*        </div>*/}
                {/*        <div className="float-right">*/}
                {/*          <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>*/}
                {/*        </div>*/}
                {/*      </div>*/}
                {/*      <Progress className="progress-xs" color="info" value="22" />*/}
                {/*    </td>*/}
                {/*    <td className="text-center">*/}
                {/*      /!*<CIcon height={25} name="cib-google-pay"/>*!/*/}
                {/*    </td>*/}
                {/*    <td>*/}
                {/*      <div className="small text-muted">Last login</div>*/}
                {/*      <strong>Last week</strong>*/}
                {/*    </td>*/}
                {/*  </tr>*/}
                {/*  <tr>*/}
                {/*    <td className="text-center">*/}
                {/*      <div className="c-avatar">*/}
                {/*        <img src={'avatars/user.png'} className="c-avatar-img" alt="admin@bootstrapmaster.com" />*/}
                {/*        <span className="c-avatar-status bg-danger"></span>*/}
                {/*      </div>*/}
                {/*    </td>*/}
                {/*    <td>*/}
                {/*      <div>Friderik Dávid</div>*/}
                {/*      <div className="small text-muted">*/}
                {/*        <span>New</span> | Registered: Jan 1, 2015*/}
                {/*      </div>*/}
                {/*    </td>*/}
                {/*    <td className="text-center">*/}
                {/*      /!*<CIcon height={25} name="cif-pl" title="pl" id="pl" />*!/*/}
                {/*    </td>*/}
                {/*    <td>*/}
                {/*      <div className="clearfix">*/}
                {/*        <div className="float-left">*/}
                {/*          <strong>43%</strong>*/}
                {/*        </div>*/}
                {/*        <div className="float-right">*/}
                {/*          <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>*/}
                {/*        </div>*/}
                {/*      </div>*/}
                {/*      <Progress className="progress-xs" color="success" value="43" />*/}
                {/*    </td>*/}
                {/*    <td className="text-center">*/}
                {/*      /!*<CIcon height={25} name="cib-cc-amex" />*!/*/}
                {/*    </td>*/}
                {/*    <td>*/}
                {/*      <div className="small text-muted">Last login</div>*/}
                {/*      <strong>Yesterday</strong>*/}
                {/*    </td>*/}
                {/*  </tr>*/}
                {/*  </tbody>*/}
                {/*</table>*/}

              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Dashboard;
