import { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { connect } from 'react-redux';
// import { getTickers } from '../Store/ActionTickers';
// import { tickersSelector } from '../Store/SelectorTickers';
import { Form, Col, Row, Container } from 'react-bootstrap';
// import { io } from 'socket.io-client';

export default function Tickers () {
    // const socket = io('http://localhost:4000');
    // socket.on('tickers');
    
    const [tickers] = useState([]);

    const handleSubmit = e => {
        e.preventDefault();
        
    };

    const handleChange = e => {

    };
    // useEffect(() => {
    //     getTickersData();
    // }, [tickers]);

    return (
         <Container>
            <h2>Tickers</h2>
            <Form onSubmit={handleSubmit}>
        <Form.Group>
          <h3>Find Tickers</h3>
          <Form.Label>Tickers</Form.Label>
          <Row>
            <Col>
              <Form.Control
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                required
                value={tickers}
                onChange={handleChange}
                placeholed="Enter Tickers"
              />
            </Col>
                    </Row>
          </Form.Group>
        </Form>
            <ul>
                {tickers.map(({ ticker, price, change_percent, dividend }) => (
                    <li key={ticker} >
                        <span>{ticker}</span>
                        <span>{price}</span>
                        <span>{change_percent}</span>
                        <span>{dividend}</span>
                       
                    </li>
                ))}
            </ul>
        </Container>
    );
};

// const mapState = state => ({
//     tickers: tickersSelector(state)
// });

// const mapDispatch = {
//     getTickersData: getTickers,
// };

// export default connect(mapState, mapDispatch)(Tickers);
