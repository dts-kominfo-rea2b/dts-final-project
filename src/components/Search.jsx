import React from 'react';
import SearchIcon from 'assets/icons/search-icon';
import { useSearch } from 'context/search/use-search';
import { SearchBase, SearchIconWrapper, SearchInput } from 'utils/theme';

const Search = ({ className, ...props }) => {
  const { searchTerm, setSearchTerm } = useSearch();

  const onSearch = (e) => {
    e.preventDefault();
    const { value } = e.currentTarget;
    setSearchTerm(value);
  };
  const onSubmit = (e) => e.preventDefault();

  const classNames = SearchBase + ' ' + className;
  return (
    <form noValidate role='search' className={classNames} onSubmit={onSubmit}>
      <span className={SearchIconWrapper}>
        <SearchIcon color='#999999' />
      </span>
      <label htmlFor={props.id || 'search-normal'} className='sr-only'>
        {props.id || 'search-normal'}
      </label>
      <input
        type='search'
        placeholder='Cari produk'
        className={SearchInput}
        value={searchTerm}
        onChange={onSearch}
        id={props.id || 'search-normal'}
        autoComplete='off'
        {...props}
      />
    </form>
  );
};

export default Search;
