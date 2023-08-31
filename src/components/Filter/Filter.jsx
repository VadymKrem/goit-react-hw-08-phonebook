import { useSelector, useDispatch } from 'react-redux';
import { selectContactsFilter } from 'Redux/selectors';
import { setStatusFilter } from 'Redux/filterSlice';
import { FilterBlock, InputFilter } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectContactsFilter);
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
