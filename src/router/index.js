import { lazy } from 'react';
const Main = lazy(() => import('./../page/Home'));
const Login = lazy(() => import('../page/Login'));
const Asset = lazy(() => import('../page/Asset'));
const Manual = lazy(() => import('../page/Manual'));
const Notfound = lazy(() => import('../page/NotFound'));
const Page = [
  {
    path: '/trang-chu',
    exact: true,
    main: Main,
  },
  {
    path: '/login',
    exact: true,
    main: Login,
  },
  {
    path: '/tai-san',
    exact: true,
    main: Asset,
  },
  {
    path: '/huong-dan-su-dung',
    exact: true,
    main: Manual,
  },
  {
    main: Notfound,
  },
];

export default Page;
