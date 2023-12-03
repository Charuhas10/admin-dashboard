import {
  FaAngleRight,
  FaAngleDoubleRight,
  FaAngleLeft,
  FaAngleDoubleLeft,
} from "react-icons/fa";

function Pagination({ totalPage, currentPage, paginate }) {
  const pageNumbers = [];
  for (let i = 1; i <= totalPage; i++) {
    pageNumbers.push(i);
  }
  return (
    <nav className="navigation-">
      <button
        className="first-page"
        onClick={() => paginate(1)}
        disabled={currentPage === 1}
      >
        <FaAngleDoubleLeft />
      </button>

      <button
        className="previous-page"
        onClick={() => paginate(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <FaAngleLeft />
      </button>

      {pageNumbers.map((number) => (
        <button
          key={number}
          className="page-number"
          onClick={() => paginate(number)}
          className={currentPage === number ? "active" : ""}
        >
          {number}
        </button>
      ))}

      <button
        className="next-page"
        onClick={() => paginate(currentPage + 1)}
        disabled={currentPage === totalPage}
      >
        <FaAngleRight />{" "}
      </button>

      <button
        className="last-page"
        onClick={() => paginate(totalPage)}
        disabled={currentPage === totalPage}
      >
        <FaAngleDoubleRight />
      </button>
    </nav>
  );
}

export default Pagination;
