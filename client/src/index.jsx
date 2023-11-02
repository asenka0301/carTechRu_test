import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AuctionsProvider from './context/AuctionsProvider';
import store from './store';
import App from './App';

const theme = createTheme({
  palette: {
    primary: {
      main: '#212121',
      grey: '#eee',
    },
    secondary: {
      main: '#fff',
      grey: '#9e9e9e',
    },
  },
});

render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <CssBaseline />
      <AuctionsProvider>
        <App />
      </AuctionsProvider>
    </Provider>
  </ThemeProvider>,
  document.getElementById('root'),
);
