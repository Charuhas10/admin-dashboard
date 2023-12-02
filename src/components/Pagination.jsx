function Pagination({ totalPage, currentPage, paginate }) {
  const pageNumbers = [];
  for (let i = 1; i <= totalPage; i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul>
        <li>
          <button onClick={() => paginate(1)} disabled={currentPage === 1}>
            First
          </button>
        </li>
        <li>
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
        </li>

        {pageNumbers.map((number) => (
          <li key={number}>
            <button
              onClick={() => paginate(number)}
              className={currentPage === number ? "active" : ""}
            >
              {number}
            </button>
          </li>
        ))}

        <li>
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPage}
          >
            Next
          </button>
        </li>
        <li>
          <button
            onClick={() => paginate(totalPage)}
            disabled={currentPage === totalPage}
          >
            Last
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
