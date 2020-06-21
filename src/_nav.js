export default {
  items: [
    {
      name: '1 - Quản lý phân tích sự cố',
      url: '/analysis',
      icon: 'icon-people',
    },
    {
      name: '2 - Quản lý danh sách sự cố',
      url: '/manage',
      icon: 'icon-people',
      children: [
        {
          name: 'Đang thực hiện',
          url: '/manage/doing',
          icon: 'icon-arrow-right',
        },
        {
          name: 'Đã hoàn thành',
          url: '/manage/finish',
          icon: 'icon-arrow-right',
        },

      ],
    },
    {
      name: '3 - Hiển thị sự cố trên bản đồ',
      url: '/maps',
      icon: 'icon-puzzle',
    },
    {
      name: '4 - Hướng dẫn sử dụng',
      url: '/manual',
      icon: 'icon-puzzle',
    },
    {
      name: '5 - Về chúng tôi',
      url: '/info',
      icon: 'icon-puzzle',
    }
  ],
};
