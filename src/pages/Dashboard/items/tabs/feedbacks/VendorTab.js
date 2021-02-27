import { useState } from "react";
import { Form } from "react-bootstrap";
import Loading from "../../../../../App/components/Loading";
import TableFooter from "../../../../../App/components/TableFooter";
import useFetch from "../../../../../App/hooks/useFetch";
import { base_url } from "../../../../../variables";
import FeedbackTable from "./FeedbackTable";

const VendorTab = () => {
  const [currentLimit, setCurrentLimit] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const {
    data: {
      docs: feedbacks,
      hasPrevPage,
      hasNextPage,
      page,
      limit,
      pagingCounter,
      totalDocs,
      totalPages
    },
    status
  } = useFetch(`${base_url}/admin/feedback?page=${currentPage}&limit=${currentLimit}`);
  
  return (
    <>
      <Form inline>
        <p>Show&nbsp;</p>
        <select className="m-b-15" value={currentLimit} id="limit" onChange={e => { setCurrentLimit(e.target.value) }}>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
          <option value={20}>20</option>
        </select>
        <p>&nbsp;rows</p>
      </Form>
      {
        status == "success"
          ? <FeedbackTable name="Vendor" data={feedbacks} />
          : <Loading />
        }

      <TableFooter data={{
        pagingCounter,
        hasNextPage,
        hasPrevPage,
        currentPage,
        limit,
        page,
        totalDocs,
        totalPages,
        setCurrentPage
      }} />
    </>
  )
};

export default VendorTab;
