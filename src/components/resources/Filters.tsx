import { useEffect, useState } from 'react';
import caretDown from '../../assets/icons/649d49a38aeae2926e9b3246_dropdown-icon.svg';
import Paragraph from '../text/Paragraph';
import { resourcesFilters } from '../../utilities/resourcesData';
import { cn } from '../../utilities/cn';
import { FiltersProps } from '../../types/types';
import { motion } from 'framer-motion';
import cancel from '../../assets/images/cancel.svg';
import { useMediaQuery } from 'react-responsive';

const Filters = ({
  filters,
  setFilters,
  searchTerm,
  setSearchTerm,
}: FiltersProps) => {
  const [showFilters, setShowFilters] = useState(true);
  const isTablet = useMediaQuery({ minWidth: 768 });
  const activeFilters = filters.filter((item) => item.active);

  // TOGGLE THE ACTIVE PROPERTY IN FILTERS
  const toggleFilter = (filter: string) => {
    setFilters(
      filters.map((filterItem) =>
        filterItem.filter === filter
          ? { ...filterItem, active: !filterItem.active }
          : filterItem
      )
    );
  };

  // REMOVE A FILTER BY CHANGING ITS ACTIVE PROPERTY TO FALSE
  const removeFilter = (filter: string) => {
    const newArray = filters.map((filterItem) =>
      filterItem.filter === filter
        ? { ...filterItem, active: false }
        : filterItem
    );
    setFilters(newArray);
  };

  // REMOVE ALL FILTERS
  const clearFilters = () => {
    setFilters(resourcesFilters);
    setSearchTerm('');
  };

  useEffect(() => {
    isTablet ? setShowFilters(true) : setShowFilters(false);
  }, [isTablet]);

  return (
    <div className=''>
      {/* fliter toggle */}
      <button
        className='bg-maroon text-snow text-sm gap-4 flex items-center w-full h-14 rounded justify-center md:hidden'
        onClick={() => setShowFilters(!showFilters)}>
        Filters <img src={caretDown} alt='' className='md:hidden' />
      </button>

      {/*actual filters */}
      <motion.div
        initial={{ height: 0 }}
        animate={showFilters ? { height: 'auto' } : { height: 0 }}
        className='space-y-4 overflow-hidden md:space-y-[1vw]'>
        <div className='flex justify-between pt-4 md:pt-0'>
          <Paragraph className='text-xs md:text-[1.2vw]'>Filter by</Paragraph>
          <Paragraph
            className='text-xs md:text-[1.2vw] cursor-pointer hover:text-indianRed'
            onClick={clearFilters}>
            Clear all
          </Paragraph>
        </div>

        <div className='space-y-5 md:flex md:space-y-0 md:gap-[2vw]'>
          {filters.map((filter) => (
            <button
              tabIndex={0}
              className={cn(
                'w-full border border-maroon h-12 text-sm rounded md:text-[1.1vw] md:h-[4.7vw] md:hover:text-[1.2vw]',
                filter.active ? 'bg-maroon text-snow' : ''
              )}
              onClick={() => toggleFilter(filter.filter)}>
              {filter.filter}
            </button>
          ))}
        </div>
      </motion.div>
      {/* active filter buttons  */}
      {
        <div className='flex space-x-2 mt-4 md:mt-[2vw]'>
          {/* show search term button along side other category filters */}
          {searchTerm && (
            <button
              className='px-1.5 py-1.5 text-xs rounded bg-maroon text-snow flex gap-2 items-center capitalize'
              onClick={() => setSearchTerm('')}>
              {searchTerm} <img src={cancel} alt='' className='w-4' />
            </button>
          )}

          {/* {map through activeFilters array} */}
          {activeFilters.map((activeFilter) => (
            <button
              className='px-1.5 py-1.5 text-xs rounded bg-maroon text-snow flex gap-2 items-center'
              onClick={() => removeFilter(activeFilter.filter)}>
              {activeFilter.filter} <img src={cancel} alt='' className='w-4' />
            </button>
          ))}
        </div>
      }
    </div>
  );
};

export default Filters;
