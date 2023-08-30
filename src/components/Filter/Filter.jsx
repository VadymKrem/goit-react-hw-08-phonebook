import { useSelector, useDispatch } from 'react-redux';
import { getContactsFilter } from 'Redux/selectors';
import { setStatusFilter } from 'Redux/filterSlice';
import { FilterBlock, InputFilter } from './Filter.styled';
// import PropTypes from 'prop-types';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getContactsFilter);
  // const handleFilterChange = filter => dispatch(setStatusFilter(filter));
  const handleFilterChange = evt => dispatch(setStatusFilter(evt.target.value));

  return (
    <FilterBlock>
      Find contacts by name
      <InputFilter
        type="text"
        name="filter"
        placeholder="Enter contact name"
        value={filter}
        onChange={handleFilterChange}
      />
    </FilterBlock>
  );
};

// Filter.propTypes = {
//   filter: PropTypes.string,
//   onChange: PropTypes.func,
// };
