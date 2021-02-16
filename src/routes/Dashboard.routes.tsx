import { Route } from 'react-router-dom';
import DashboardScreen from '../modules/Dashboard/DashboardScreen';

const DASHBOARD_PATH = {
  Main: '/dashboard',
};

const DashboardRoute = () => {
  return <Route exact path={DASHBOARD_PATH.Main} component={DashboardScreen} />;
};

export { DashboardRoute, DASHBOARD_PATH };
