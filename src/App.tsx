import { SnackbarProvider } from 'notistack';
import Routes from './routes/routes';
import GlobalStyles from './shared/styles/global';

function App() {
  return (
    <SnackbarProvider maxSnack={3} autoHideDuration={5000} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
      <GlobalStyles />
      <Routes />
    </SnackbarProvider>
  );
}

export default App;
