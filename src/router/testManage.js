import TestIc from '~/icon/ic-test.png'
export default {
  name: '测试',
  path: '/test',
  component: 'Layout',
  children: [
    {
      name: 'demo',
      path: 'demo',
      component: 'Outlet',
      meta: {
        isMenu: true,
        title: '外链',
        outLink: () => 'http://www.baidu.com',
        target: '_blank'
      }
    },
    {
      name: 'test',
      path: 'test',
      component: 'test/test',
      meta: {
        title: 'Button',
        isMenu: true
      }
    }
  ],
  meta: {
    title: '我是title测试',
    isMenu: true,
    icon: TestIc
  }
}

