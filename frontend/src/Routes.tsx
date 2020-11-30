import React from 'react';
import { Route } from 'react-router-dom';
import HomeContainer from './pages/Home/HomeContainer';
import UploadContainer from './pages/Upload/UploadContainer';
import ErrorPage from './pages/Error/ErrorPage';

const Routes = () => {
  return (
    <>
      <Route exact path={'/'} component={HomeContainer} />
      <Route exact path={'/upload'} component={UploadContainer} />
      <Route render={() => <ErrorPage />} />
    </>
  );
};

export default Routes;
