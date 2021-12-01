import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../Store/SelectorTickers';
import { changeFilter } from '../../Store/ActionTickers';
import { Label, Input } from './Filter.Styled';

const Filter = () => {
    const value = useSelector(getFilter);
    const dispatch = useDispatch();

    const onChange = event => dispatch(changeFilter(event.target.value));
    const onBlur = () => dispatch(changeFilter(''));

    return (
        <Label>
            Найдите акции по имени
            <Input type="text" value={value} onChange={onChange} onBlur={onBlur} />
        </Label>
    );
};

export default Filter;

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
};