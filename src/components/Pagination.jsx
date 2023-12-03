import {
  FaAngleRight,
  FaAngleDoubleRight,
  FaAngleLeft,
  FaAngleDoubleLeft,
} from "react-icons/fa";
import "../assets/pagination.css";

function Pagination({ totalPage, currentPage, paginate }) {
  const pageNumbers = [];
  for (let i = 1; i <= totalPage; i++) {
    pageNumbers.push(i);
  }
  return (
    <nav className="pagination-container">
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

      {pageNumbers.map((number) =>
        number <= totalPage ? ( // Only render page number if it is within totalPage
          <button
            key={number}
            className={currentPage === number ? "active" : ""}
            onClick={() => paginate(number)}
          >
            {number}
          </button>
        ) : null
      )}

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
