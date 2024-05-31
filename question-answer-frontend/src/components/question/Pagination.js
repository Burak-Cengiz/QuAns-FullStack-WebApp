import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../css/styles/main/Question/pagination.css"

const Pagination = ({ totalPages, currentPage }) => {
  const [pageNumbers, setPageNumbers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const generatePageNumbers = () => {
      const pageNumbers = [];
      const maxVisiblePages = 5;

      if (totalPages <= maxVisiblePages) {
        for (let i = 1; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else if (parseInt(currentPage) + 1 == totalPages) {
        pageNumbers.push(
          1,
          "...",
          currentPage - 2,
          currentPage - 1,
          currentPage,
          totalPages
        );
      } else if (currentPage == totalPages) {
        pageNumbers.push(
          1,
          "...",
          currentPage - 2,
          currentPage - 1,
          currentPage
        );
      } else if (currentPage > 3) {
        pageNumbers.push(
          1,
          "...",
          currentPage - 2,
          currentPage - 1,
          currentPage,
          parseInt(currentPage) + 1,
          "...",
          totalPages
        );
      } else {
        pageNumbers.push(1, 2, 3, 4, "...", totalPages);
      }

      return pageNumbers;
    };

    setPageNumbers(generatePageNumbers());
  }, [totalPages, currentPage]);

  const handlePageChange = (pageNumber) => {
    if (pageNumber !== "...") {
      navigate(`?page=${pageNumber}`);
    }
  };

  return (
    <div className="pagination-div">
      <nav>
        <ul className="pagination">
          <li className="page-item">
            <button
              className="page-link"
              disabled={parseInt(currentPage) === 1}
              onClick={() => handlePageChange(parseInt(currentPage) - 1)}
            >
              Back
            </button>
          </li>
          {pageNumbers.map((number, index) => (
            <li
              key={index}
              className={`page-item ${currentPage == number ? "active" : ""} ${
                number === "..." ? "spacing" : ""
              }`}
            >
              <button
                className="page-link"
                onClick={() => handlePageChange(number)}
                disabled={number === "..."}
              >
                {number}
              </button>
            </li>
          ))}
          <li className="page-item">
            <button
              className="page-link"
              disabled={parseInt(currentPage) === totalPages}
              onClick={() => handlePageChange(parseInt(currentPage) + 1)}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
