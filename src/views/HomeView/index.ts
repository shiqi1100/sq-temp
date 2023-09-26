export const menuArr = [
  {
    // 注意！注意！有children的菜单项，path不会使用的，所以path为什么都无所谓；没children的，即children的length等于0的，才会使用path属性做路由跳转
    name: '前端三大框架',
    path: '前端三大框架',
    children: [
      {
        name: 'vue页面',
        path: '/vue',
        children: [],
        meta: {
          hiddle: true
        }
      },
      {
        name: 'react页面',
        path: '/react',
        children: [],
        meta: {
          hiddle: true
        }
      },
      {
        name: 'angular页面',
        path: '/angular',
        children: [],
        meta: {
          hiddle: true
        }
      }
    ]
  },
  {
    name: '后端两大框架',
    path: '后端两大框架',
    icon: 'el-icon-star-off',
    children: [
      {
        name: 'Spring Boot页面',
        path: '/springBoot',
        children: [],
        meta: {
          hiddle: false
        }
      },
      {
        name: 'Spring页面',
        path: 'Spring页面',
        children: [
          {
            name: 'MySql页面',
            path: '/mysql',
            children: [],
            meta: {
              hiddle: false
            }
          },
          {
            name: 'Redis页面',
            path: '/redis',
            children: [],
            meta: {
              hiddle: false
            }
          }
        ]
      },
      {
        name: 'Mybatis页面',
        path: '/mybatis',
        children: [],
        meta: {
          hiddle: false
        }
      }
    ]
  }
]
