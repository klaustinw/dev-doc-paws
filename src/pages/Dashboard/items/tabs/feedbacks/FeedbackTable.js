import { Table } from "react-bootstrap";
import Swal from "sweetalert2";

const FeedbackTable = ({ name, data }) => {
  return (
    <Table striped hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>{name} Name</th>
          <th>Email</th>
          <th>Date</th>
          <th>Feedback</th>
          <th>Rating</th>
        </tr>
      </thead>
      <tbody>
        {
          data.map((item) => {
            return (
              <tr key={item._id}>
                <td>1</td>
                <td>{item.owner.name}</td>
                <td>{item.owner.email}</td>
                <td>26/2/2021</td>
                <td style={{ cursor: "pointer" }} onClick={e => Swal.fire({ text: item.feedback })}>{item.feedback.substr(0, 25)}...</td>
                <td>
                  &#x02605;	&#x02605;	&#x02605;	&#x02605;	&#x02605;
                </td>
              </tr>
            )
          })
        }

      </tbody>
    </Table>
  )
};

export default FeedbackTable;
