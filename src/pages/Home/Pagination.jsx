import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

export const Pagination = ({ itemsPerPage, items }) => {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };
  useEffect(() => {
    if (items.length < itemOffset) {
      setItemOffset(0);
    }
  }, [items]);

  return (
    <>
      <div className='d-flex flex-wrap justify-content-center align-content-stretch'>
        {currentItems}
      </div>

      {currentItems.length === 0 &&
        <div>
          <h4 className='text-center mt-4'>
            No hay resultados para esa busqueda.
          </h4>
        </div>}

      {items.length > 0 &&
        <div className='row'>
          <div className='px-2 col-10'>
            <ReactPaginate
              previousLabel='Anterior'
              nextLabel='Siguiente'
              breakLabel='...'
              break1='page-item'
              breakLinkClassName='page-link'
              pageCount={pageCount}
              onPageChange={handlePageClick}
              containerClassName='pagination d-flex justify-content-center my-2 p-3'
              previousLinkClassName='mx-3 btn btn-primary'
              nextLinkClassName='mx-3 btn btn-primary'
              disabledClassName='d-none'
              activeClassName='bg-primary-subtle'
              pageClassName='page-item'
              pageLinkClassName='page-link text-dark'
              previousClassName='page-item'
              nextClassName='page-item'
              activeLinkClassName='disabled'
    // eslint-disable-next-line no-unused-vars
              hrefAllControls
              onClick={(clickEvent) => {
              // Return false to prevent standard page change,
              // return false; // --> Will do nothing.
              // return a number to choose the next page,
              // return 4; --> Will go to page 5 (index 4)
              // return nothing (undefined) to let standard behavior take place.
              }}
            />
          </div>
          <div className='col-4 mx-2' />
        </div>}
    </>
  );
};
