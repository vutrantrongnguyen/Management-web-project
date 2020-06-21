import React from 'react';


const Analysis = React.lazy(() => import('./views/Giga/Analysis/Analysis'));
const AnalysisDetail = React.lazy(() => import('./views/Giga/Analysis/AnalysisDetail'));
const Manage = React.lazy(() => import('./views/Giga/Manage/Manage'));
const ManageDetail = React.lazy(() => import('./views/Giga/Manage/ManageDetail'));
const Show = React.lazy(() => import('./views/Giga/Show/Show'));
const Manual = React.lazy(() => import('./views/Giga/Manual/Manual'));
const Info = React.lazy(() => import('./views/Giga/Info/Info'));
const Maps = React.lazy(() => import('./views/Giga/Map/Map'))
const Dashboard = React.lazy(() => import('./views/Dashboard/Dashboard'));

// const BannerDetail = React.lazy(() => import('./views/Giga/BannerDetail/BannerDetail'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/maps', name: 'Maps', component: Maps },
  { path: '/manage', exact: true, name: 'Quản lý danh sách sự cố', component: Manage },
  { path: '/manual', exact: true, name: 'Hướng dẫn sử dụng', component: Manual },
  { path: '/info', exact: true, name: 'Về chúng tôi', component: Info },
  { path: '/manage/doing', exact: true, name: 'Đang thực hiện', component: Manage },
  { path: '/manage/finish', exact: true, name: 'Đã hoàn thành', component: Manage },
  { path: '/manage/detail', exact: true, name: 'Chi tiết sự cố', component: ManageDetail },
  { path: '/show', exact: true, name: 'Hiển thị sự cố trên bản đồ', component: Show },
  { path: '/analysis', exact: true, name: 'Quản lý phân tích sự cố', component: Analysis},
  { path: '/analysis/detail', exact: true, name: 'Tạo báo cáo', component: AnalysisDetail},
];

export default routes;
