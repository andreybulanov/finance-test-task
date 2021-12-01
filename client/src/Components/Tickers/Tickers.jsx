import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import * as tickersOperation from '../../Store/OperationTickers';
import { useSelector, useDispatch } from 'react-redux';
import { getFilteredTickers } from '../../Store/SelectorTickers';
import {List, Name, Item, Button} from './Tickers.styled'


const TickersList = () => {
  const tickers = useSelector(getFilteredTickers);
  const dispatch = useDispatch();
  const onDeleteTickers = id => dispatch(tickersOperation.deleteTickersAction(id));

  useEffect(() => {
    dispatch(tickersOperation.fetchTickersAction());
  }, [dispatch]);

  return (
    <List>
      {tickers.map(({ id, ticker, price, change_percent }) => (
        <Item key={id}>
          <Name>
            {ticker}-{change_percent}-{price}
          </Name>
          <Button onClick={() => onDeleteTickers(id)}>Удалить</Button>
        </Item>
      ))}
    </List>
  );
};

export default TickersList;

TickersList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    }),
  ),
  onDeleteContacts: PropTypes.func,
};



// .....РАБОТАЛО, НО НАПИСАНО НЕ РАЗБОРЧИВО....

// import React, {useState, useEffect} from 'react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import { getTickers } from '../../Store/ActionTickers';
// import { tickersSelector } from '../../Store/SelectorTickers';
// import { Container, Title, List, ListItem, ListLink } from './Tickers.styled';
// import s from './Tickers.module.css';
// import { titleColor } from './TickersColor';



// const Tickers = ({getTickersData, tickers}) => {
  
//   const [background, setBackground] = useState([]);

//   const showBackground = data => setBackground(data, background);

//   useEffect(() => {
//     showBackground(background);
//   }, [background]);

//    useEffect(() => {
//     getTickersData();
//   }, [tickers]);

  
//   const [persentVisible, setPecentVisible] = useState(true);
  
//   const onTogglePercent = () => {
//     setPecentVisible(!persentVisible);
//   };
  
//   const handleKeyDown = () => {
//     setPecentVisible(!persentVisible);
//   };
  
//   if (!tickers && background.length > 0) {
//     return null;
//   }
//     return (
//          <Container>
//             <Title>Обзор популярных акций в Google</Title>           
//             <List>
//           {tickers.map(({ ticker, price, change_percent, dividend }, index) => {
           
//             const colorStyle = background[index] ? { color: '#f01d0a' } : { color: '#10b43e' };
//             return (
//               <ListItem key={ticker} >
//                 <ListLink>
//                   <div className={ticker}
//                     onClick={onTogglePercent}
//                   onKeyDown={handleKeyDown}>
//                     <span className={s.logo} style={{ background: titleColor[index].color }}>{ticker}</span>
//                     <span className={s.title}>{titleColor[index].title}</span>
//                   </div>
//                   {price}
//                   <div className={s.persent} >
//                     <span className="" style ={colorStyle}>{persentVisible ? `${change_percent}%` : dividend}</span>
//                   </div>
//                    </ListLink>
//                     </ListItem>
//                   )         
//                 })}
//             </List>
//         </Container>
//     );
// };

// Tickers.propTypes = {
//   tickers: PropTypes.arrayOf(PropTypes.shape()),
//   getTickersData: PropTypes.func.isRequired,
// };

// // Tickers.defaultProps = {
// //   tickers: [],
// // };

// const mapState = state => ({
//     tickers: tickersSelector(state),
// });

// const mapDispatch = {
//     getTickersData: getTickers,
// };

// export default connect( mapState, mapDispatch)(Tickers);
