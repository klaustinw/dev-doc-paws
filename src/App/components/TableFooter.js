import { Pagination } from "react-bootstrap";
import range from "./range";

const TableFooter = ({ data: {
  pagingCounter,
  hasNextPage,
  hasPrevPage,
  currentPage,
  limit,
  page,
  totalDocs,
  totalPages,
  setCurrentPage
}
}) => {
  return (
    <>
      <div className="border-top pt-3">
        <div className="d-flex justify-content-between m-t-5">
          <span>
            Showing {pagingCounter} to {hasNextPage ? limit * page : totalDocs} of {totalDocs} rows
        </span>
          <div>
            <Pagination className="m-r-5">
              <Pagination.Item disabled={!hasPrevPage} onClick={e => setCurrentPage(currentPage - 1)} >
                Prev
              </Pagination.Item>
              {
                range(totalPages).map(pageNum => {
                  return (
                    <Pagination.Item key={pageNum} active={pageNum == currentPage} onClick={e => setCurrentPage(pageNum)}>{pageNum}</Pagination.Item>
                  )
                })
              }
              <Pagination.Item disabled={!hasNextPage} onClick={e => setCurrentPage(currentPage + 1)}>
                Next
              </Pagination.Item>
            </Pagination>
          </div>
        </div>
      </div>
    </>
  )
};

export default TableFooter;
