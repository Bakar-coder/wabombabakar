import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import Layout from './components/layouts/layouts';
import { Helmet } from 'react-helmet';
import PortfolioImage from './images/wabomba-bakar.jpg';

const App = ({ route, alert, errors }) => {
  const { msg } = alert;
  const { error } = errors;
  const headTags = () => (
    <Helmet>
      <title>
        Wabomba Bakar | Software Engineer / full-stack web application development specialist base in
        Kampala, Uganda, East Africa | Web Developer | web designer | frontend
        developer | backend developer | UI designer
      </title>
      <meta
        name='description'
        content='Wabomba Bakar a software engineer / full-stack web developer based in East Africa specializing in building exceptional high quality Websites,  Web Applications and  Rest APIs using cutting edge Technologies.'
      />
      <meta name='author' content='Wabomba Bakar' />
      <meta
        property='og:title'
        content='Wabomba Bakar | Software Engineer / full-stack web developer base in Kampala, Uganda, East Africa | Web Developer | web designer | frontend developer | backend developer | UI designer'
      />
      <meta
        property='og:description'
        content='Wabomba Bakar : Software Engineer base in Kampala, Uganda, East Africa | Web Developer | web designer | frontend developer | backend developer | UI designer'
      />
      <meta property='og:image' content={PortfolioImage} />
      <meta
        name='keywords'
        content='WEB DEVELOPER, Web Deloper, WEB DESIGNER, React developer, Front End Developer, Front End Web Developer, Back End Web Developer, Professional Web Developer, Professional Web Designer, Back End Developer, UI Designer, Software engineer, web master, Web Designer, database administrator, Website Developer, website designer, web application developer, website development, web development, website design,  single page applications, React,  Server side rendered react application, Isomorphic applications, Nodejs developer, Full stack developer, Full stack web developer, Full stack javascript developer, Javascript Developer, Front end engineer, Back End Engineer, Best software engineer, Best software engineer East Africa, Best software engineer Africa, Best software engineer Uganda, best web developer in uganda,best web designer in uganda, best web designer in kenya, best web developer in kenya, best web developer in africa, best react developer, best javascript developer in africa, web developer Uganda, web developer kenya, web developer Rwanda, web developer Tanzania, web developer Nigeria, web app,ecommerce website, best website design, web design agency, web design services, web site development, web design tutorial, web programming, web design jobs, business ideas, business online, create a website, junior web developer, senior web developer, african tech, african developers'
      />
    </Helmet>
  );
  return (
    <Layout>
      {msg && <div className='alert alert__success'>{msg}</div>}
      {error && <div className='alert alert__danger'>{error}</div>}
      {headTags()}
      {renderRoutes(route.routes)}
    </Layout>
  );
};

App.propTypes = {
  route: PropTypes.object.isRequired,
  alert: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapState = ({ alert, errors }) => ({ alert, errors });

export default { component: connect(mapState, null)(App) };
