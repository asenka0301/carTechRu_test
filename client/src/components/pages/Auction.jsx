import { useParams } from 'react-router-dom';

function Auction() {
  const { id } = useParams();

  return (
    <div>{id}</div>
  );
}

export default Auction;
