import Filter from './Components/Filter/FilterTickers.jsx';
import TickersList from './Components/Tickers/Tickers.jsx';
// import TickersForm from './Components/Form/TickersForm.jsx';
import {Title} from './App.styled';


// import logo from './logo.svg';
import './App.styled.jsx';

export default function App() {
  return (
    <div>
      <Title>Обзор популярных акций в Google</Title>
      <Filter />
      <TickersList />
      {/* <TickersForm /> */}
    </div>
  );
}



