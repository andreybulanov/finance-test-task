import React, { useEffect } from 'react';
import * as tickersOperation from '../../Store/OperationTickers';
import { useSelector, useDispatch } from 'react-redux';
import { getFilteredTickers } from '../../Store/SelectorTickers';
import {List, Name, Item, Button} from './Tickers.styled'


const TickersList = () => {
  const tickers = useSelector(getFilteredTickers);
  const dispatch = useDispatch();
  const onDeleteTickers = event => dispatch(event.target.id);

  useEffect(() => {
    dispatch(tickersOperation.getTickers());
  }, [dispatch]);

  return (
    <List>
      {tickers.map(({ id, ticker, price, change_percent }) => (
        <Item key={id}>
          <Name>
            {ticker}--{price}--{change_percent}
          </Name>
          <Button onClick={onDeleteTickers} type="button" id={ticker}>Удалить</Button>
        </Item>
      ))}
    </List>
  );
};

export default TickersList;