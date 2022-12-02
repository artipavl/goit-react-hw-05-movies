import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const SearchMovie = () => {
  const [search, setSearch] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const searchUrl = searchParams.get('q');

  function onSubmit(e) {
    e.preventDefault();
    if (e.currentTarget.elements.search.value === '') {
      return;
    }
    setSearchParams({ q: e.currentTarget.elements.search.value });
    setSearch('');
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="search"
        value={search ?? searchUrl}
        onChange={e => setSearch(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchMovie;
