import React, { useState, useEffect} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getTickers, getTickersData } from '../Store/ActionTickers';
import { tickersSelector } from '../Store/SelectorTickers';
import {  Container } from 'react-bootstrap';


const Tickers = ({tickers}) => {
    
  const [persentVisible, setPecentVisible] = useState(true);

  const onTogglePercent = () => {
    setPecentVisible(!persentVisible);
  };
  
  const handleKeyDown = () => {
    setPecentVisible(!persentVisible);
  };
  
  useEffect(() => {
    getTickersData();
  }, [tickers]);

    return (
         <Container>
            <h2>Tickers</h2>
           
            <ul>
          {tickers.map(({ ticker, change_percent, dividend }) => {
            return (
                    <li key={ticker} >
                        <span>{ticker}</span>
                <div
                  onClick={onTogglePercent}
                  onKeyDown={handleKeyDown}
                >{persentVisible ? `${change_percent}%` : dividend}</div>  
                    </li>
                  )         
                })}
            </ul>
        </Container>
    );
};

Tickers.propTypes = {
  tickers: PropTypes.arrayOf(PropTypes.shape()),
  getTickersData: PropTypes.func.isRequired,
};

// Tickers.defaultProps = {
//   tickers: [],
// };

const mapState = state => ({
    tickers: tickersSelector(state),
});

const mapDispatch = {
    getTickersData: getTickers,
};

export default connect( mapState, mapDispatch)(Tickers);
