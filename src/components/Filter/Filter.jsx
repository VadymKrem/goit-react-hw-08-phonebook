import { FilterBlock, InputFilter } from './Filter.styled';
import PropTypes from 'prop-types';

export const Filter = ({ filter, onChange }) => {
  return (
    <FilterBlock>
      Find contacts by name
      <InputFilter type="text" value={filter} onChange={onChange} />
    </FilterBlock>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func,
};
