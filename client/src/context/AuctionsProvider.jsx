import { useState, useMemo } from 'react';
import AuctionsContext from './context';

function AuctionsProvider({ children }) {
  const [auctions, setAuctions] = useState('');
  const data = useMemo(() => ({
    auctions,
    setAuctions,
  }), [auctions]);
  return (
    <AuctionsContext.Provider value={data}>
      {children}
    </AuctionsContext.Provider>
  );
}

export default AuctionsProvider;
