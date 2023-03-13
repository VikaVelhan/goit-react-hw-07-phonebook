import React from 'react';
import css from './Filter.module.css';
import { filterValue } from 'redux/filterSlise';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selector';

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(getFilter);
  return (
    <div className={css.filterForm}>
      <label className={css.contactLabel}>
        Find contacts by name
        <input
          className={css.contactFilter}
          type="text"
          value={value}
          onChange={e => dispatch(filterValue(e.target.value))}
        ></input>
      </label>
    </div>
  );
};

export default Filter;
