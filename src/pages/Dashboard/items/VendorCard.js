import { useEffect, useState } from 'react';
import { Button, Card, Form, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Loading from '../../../App/components/Loading';
import TableFooter from '../../../App/components/TableFooter';
import verifyVendor from '../../../App/components/Vendor/Functions/VerifyVerification';
import useFetch from '../../../App/hooks/useFetch';
import { base_url } from '../../../variables';

const VendorCard = () => {
  const [currentLimit, setCurrentLimit] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [displaySetting, setDisplaySetting] = useState(false);
  const {
    data: {
      docs: vendors,
      hasPrevPage,
      hasNextPage,
      page,
      limit,
      pagingCounter,
      totalDocs,
      totalPages
    },
    status,
    refetch
  } = useFetch(`${base_url}/admin/vendor?isVerified=yesnt&page=${currentPage}&limit=${currentLimit}`);

  useEffect(() => {
    if (status == "success") vendors.length ? setDisplaySetting(true) : setDisplaySetting(false);
  }, [vendors]);

  const handleVerifyVendorButton = async (e, id) => {
    const result = await verifyVendor(id, "approve");
    if (result) refetch();
  };

  const handleRejectVendorButton = async (e, id) => {
    const result = await verifyVendor(id, "reject");
    if (result) refetch();
  };

  const cardEmpty = (
    <Card.Title className="mx-3 mt-2">
      Nothing to see here..
    </Card.Title>
  );
  return (
    <Card className='Main-Content'>
      <Card.Header>
        <Card.Title as='h5'>Vendors Need Approval</Card.Title>
      </Card.Header>
      <Card.Body className='px-0 py-0'>
        <Form inline>
          {displaySetting
            ? <>
              <p>Show&nbsp;</p>
                <select className="m-b-15" value={currentLimit} id="limit" onChange={e => { setCurrentLimit(e.target.value) }}>
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={15}>15</option>
                <option value={20}>20</option>
              </select>
              <p>&nbsp;rows&nbsp;&nbsp;</p>
            </>
            : ""
          }
        </Form>
        {status == "success"
          ?
          vendors.length
            ? <>
              <Table striped responsive hover>
                <tbody>
                  {
                    vendors.map((vendor, i) => {
                      return (
                        <tr className="unread" key={vendor._id}>
                          <td className="align-middle"><img className="rounded-circle" style={{ width: '40px' }} src={vendor.imageUrl} alt="activity-user" /></td>
                          <td className="align-middle">
                            <h6 className="mb-1">{vendor.name}</h6>
                            <p className="m-0">{vendor.email}</p>
                          </td>
                          {/* <td className="align-middle">
                          <h6 className="text-muted"><i className="fa fa-circle text-c-green f-10 m-r-15" />11 MAY 12:56</h6>
                        </td> */}
                          <td className="align-middle">
                            <Link
                              to={{
                                pathname: "/masters/vendors/detail",
                                vendor
                              }}
                            >
                              <Button
                                variant="warning"
                                size="sm"
                              >Detail</Button>
                            </Link>
                            <Button
                              variant="primary"
                              size="sm"
                              onClick={e => handleVerifyVendorButton(e, vendor._id)}
                            >Approve</Button>
                            <Button
                              variant="danger"
                              size="sm"
                              onClick={e => handleRejectVendorButton(e, vendor._id)}
                            >Reject</Button>
                          </td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </Table>
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
            : cardEmpty
          : <Loading />
        }

      </Card.Body>
    </Card>
  )
};

export default VendorCard;
