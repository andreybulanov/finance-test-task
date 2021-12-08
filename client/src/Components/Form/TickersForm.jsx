import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import * as tickersOperation from '../../Store/OperationTickers';
import {Button, Input, Label, Form} from './TickersForm.styled';


export function TickersForm() {
    const dispatch = useDispatch();
    const onSubmit = (ticker) =>
        dispatch(tickersOperation.addTickers({ ticker }));
    
    const [ticker, setTicker] = useState('');

    const tickerId = uuidv4();

    const handleChange = event => {
        const { ticker, value } = event.target;
        switch (ticker) {
            case 'ticker':
                setTicker(value);
                break;
            default: return;
        }
    };
     
    const handleSubmit = event => {
        event.preventDefault();
        onSubmit(ticker);
        setTicker('');
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Label >
                Акция
                <Input type="text" id={tickerId} onChange={handleChange}/>               
            </Label>
            <Button type="submit">Добавить акцию</Button>
        </Form>
    )
}

export default TickersForm;