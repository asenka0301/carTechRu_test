import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { fetchAuctions } from '../actions';
import Main from '../components/pages/Main';
import Header from '../components/Header';
import Line from '../components/Divider';
import Auction from '../components/pages/Auction';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAuctions(''));
  });

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
