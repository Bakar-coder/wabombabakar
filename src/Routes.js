import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Work from './Pages/Work';
import Resume from './Pages/Get-resume';
import DownloadResume from './Pages/Send-resume';
import App from './App';
import PageNotFound from './Pages/404';

const Routes = [
  {
    ...App,
    routes: [
      {
        ...Home,
        path: '/',
        exact: true
      },
      {
        ...About,
        path: '/about',
        exact: true
      },
      {
        ...Work,
        path: '/work',
        exact: true
      },
      {
        ...Resume,
        path: '/resume',
        exact: true
      },
      {
        ...DownloadResume,
        path: '/resume/:token',
        exact: true
      },
      {
        ...Contact,
        path: '/contact',
        exact: true
      },
      {
        ...PageNotFound
      }
    ]
  }
];

export default Routes;
