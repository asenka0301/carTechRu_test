import { useContext } from 'react';
import AuctionsContext from './context/context';

const useAuctions = () => useContext(AuctionsContext);

export default useAuctions;
