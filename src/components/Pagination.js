import React from "react";

const Pagination = ({ setCurrentPage, currentPage, postPerPage, postData }) => {
  //on clicking next
  const nextHandle = () => {
    currentPage < postData.length / postPerPage &&
      setCurrentPage((page) => page + 1);
  };

  //on clicking previous
  const previousHandle = () => {
    currentPage > 1 && setCurrentPage((page) => page - 1);
  };

  //on clicking page number
  const clickPageNumber = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <p onClick={previousHandle}>Prev</p>
      {postData.length > 0 &&
        [...Array(postData.length / postPerPage)].map((_, index) => (
          <p
            className={currentPage === index + 1 && "active_pagenumber"}
            key={index}
            onClick={() => clickPageNumber(index + 1)}
          >
            {index + 1}
          </p>
        ))}
      <p onClick={nextHandle}>Next</p>
    </>
  );
};

export default Pagination;
