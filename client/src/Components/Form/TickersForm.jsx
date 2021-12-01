import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import * as tickersOperation from '../../Store/OperationTickers';
import {Button, Input, Label, Form} from './TickersForm.styled';


export function TickersForm() {
    const dispatch = useDispatch();
    const onSubmit = (ticker) =>
        dispatch(tickersOperation.addTickersAction({ ticker }));
    
    const [ticker, setTickert] = useState('');

    const tickerId = uuidv4();

    const handleChange = event => {
        const { ticker, value } = event.target;
        switch (ticker) {
            case 'ticker':
                setTickert(value);
                break;
            default: return;
        }
    };
     
    const handleSubmit = event => {
        event.preventDefault();
        onSubmit(ticker);
        setTickert('');
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Label >
                Акция
                <Input
                    type="text"
                    name="ticker"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    required
                    id={tickerId}
                    value={ticker}
                    onChange={handleChange}
                />
            </Label>
            <Button type="submit">Добавить акцию</Button>
        </Form>
    )
}

export default TickersForm;