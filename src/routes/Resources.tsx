import { useCallback, useEffect, useState } from 'react';
import Header from '../components/resources/Header';
import SearchResources from '../components/resources/SearchResources';
import ColumnLayout from '../layouts/ColumnLayout';
import { resources, resourcesFilters } from '../utilities/resourcesData';
import Filters from '../components/resources/Filters';
import Resource from '../components/resources/Resource';
import Paragraph from '../components/text/Paragraph';
const Resources = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const [displayedResources, setDisplayedResources] = useState(resources);
  const [categoryFilters, setCategoryFilters] = useState(resourcesFilters);

  const handleFilteredResources = useCallback(() => {
    // get all active filters (filters with active property set to true)
    const activeFilters = categoryFilters.filter(
      (filterItem) => filterItem.active
    );

    // create an array of the names of active filters (to use as thumbnails and also in filtering resources by category)
    const activeFilterArray = activeFilters.map(
      (filterItem) => filterItem.filter
    );

    // reset all resources if no filters and search term is empty
    if (activeFilters.length === 0 && searchTerm.length === 0) {
      setDisplayedResources(resources);
      return;
    }

    // filter resources by category
    const filteredByCategory = resources.filter((resource) =>
      activeFilterArray.includes(resource.category)
    );

    let filteredBySearchTerm;

    if (activeFilterArray.length > 0) {
      // if a category filter is already applied, search through filteredByCategory array
      filteredBySearchTerm = filteredByCategory.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.trim().toLowerCase())
      );
    } else {
      //if no filter is applied search through the main resources array
      filteredBySearchTerm = resources.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.trim().toLowerCase())
      );
    }

    const results = searchTerm ? filteredBySearchTerm : filteredByCategory;
    setDisplayedResources(results);
  }, [categoryFilters, searchTerm]);

  useEffect(() => {
    handleFilteredResources();
  }, [categoryFilters, handleFilteredResources]);

  return (
    <main className='pb-20'>
      <ColumnLayout className='space-y-5 xs:space-y-6 md:space-y-[2vw]'>
        <Header />

        <div className='space-y-5 xs:space-y-6 md:space-y-[2vw] md:px-[2.5vw] '>
          <SearchResources
            setSearchTerm={setSearchTerm}
            searchTerm={searchTerm}
          />

          <Filters
            filters={categoryFilters}
            setFilters={setCategoryFilters}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />

          {/* SHOW NUMBER OF RESOURCES DISPLAYED OR FILTERED */}
          <div className=''>
            <Paragraph className='text-xs my-10 md:my-[4vw] md:text-[1.2vw]'>
              Showing{' '}
              <span className='font-bold'>{displayedResources.length}</span>{' '}
              resources
            </Paragraph>
          </div>

          {/* DISPLAY RESOURCES */}
          <div className='grid gap-16 md:grid-cols-2'>
            {displayedResources.map((resource) => (
              <Resource resource={resource} />
            ))}
          </div>
        </div>
      </ColumnLayout>
    </main>
  );
};

export default Resources;
