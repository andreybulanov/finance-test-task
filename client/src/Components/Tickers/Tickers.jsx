import React, { useEffect } from 'react';
import * as tickersOperation from '../../Store/OperationTickers';
import { useSelector, useDispatch } from 'react-redux';
import { getFilteredTickers } from '../../Store/SelectorTickers';
import s from './Tickers.module.css'
import { titleColor } from './TickersColor';



const TickersList = () => {
  const tickers = useSelector(getFilteredTickers);
  const dispatch = useDispatch();
   
  // const handleDelete = id => dispatch(tickersOperation.deleteTickers(id));

  useEffect(() => {
    dispatch(tickersOperation.getTickers());
  }, [dispatch]);

  return (
    < ul className={s.Tickers}>
      {tickers.map(({ ticker, price, change_percent, change, dividend }, index) => {
 
        return (
          <li key={ticker} className={s.TickersList} >
            <div className={s.TickersName}>

              <div className={s.TickersTitleLogo}>
                <span className={s.TickersLogo} style={{ backgroundColor: titleColor[index].color }}>{ticker}</span>
                <span className={s.TickersTitle} style={{ backgroundColor: titleColor }}>{titleColor[index].title}</span>
              </div>
            
              <div className={s.TickersTitleList}>
                <span className={s.TickersTitleItem}>{price}$</span>
                <span className={s.TickersTitleItem}>{change}</span>
                <span className={s.TickersTitleItem}>{dividend}</span>
                <span className={s.TickersTitleItem}>{change_percent}%</span>
              </div>
            
            </div>
            {/* <button className={s.Button} onClick={handleDelete} type="button" id={ticker}>Удалить?</button> */}
          </li>
        );
      })}
    </ul>
  );
};

export default TickersList;