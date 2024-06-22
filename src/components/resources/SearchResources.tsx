// import { useCallback, useEffect } from 'react';
import searchIcon from '../../assets/icons/649d49a38aeae2926e9b3244_search.svg';
import { SearchProps } from '../../types/types';
const SearchResources = ({ searchTerm, setSearchTerm }: SearchProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className='relative'>
      <input
        type='text'
        placeholder='Search'
        className='w-full bg-transparent border border-maroon h-12 pl-12 placeholder:text-xs placeholder:text-black/40 rounded-md md:h-[5vw] md:pl-[6vw]'
        value={searchTerm}
        onChange={handleChange}
        onInput={handleChange}
      />
      <img
        src={searchIcon}
        alt=''
        className='w-6 absolute top-1/2 -translate-y-1/2 left-2 md:w-[2vw] md:left-[1.5vw]'
      />
    </div>
  );
};

export default SearchResources;
