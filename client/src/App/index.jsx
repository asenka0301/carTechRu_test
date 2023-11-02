import { Container } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from '../components/pages/Main';
import Header from '../components/Header';
import Line from '../components/Divider';
import Auction from '../components/pages/Auction';

function App() {
  return (
    <Container>
      <Header />
      <Line />
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/:id" element={<Auction />} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
