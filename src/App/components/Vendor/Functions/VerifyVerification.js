import Swal from "sweetalert2";
import { base_url } from "../../../../variables";
import SwalToast from "../../SwalToast";

const verifyVendor = async (id, action) => {
  try {
    if (action == "reject") {
      const action_response = await Swal.fire({
        title: "Confirm Action",
        text: "Are you sure to reject this vendor?",
        icon: "warning",
        showCancelButton: true
      });
      if (action_response.isConfirmed) {
        const reason_response = await Swal.fire({
          title: "Reason of Rejection",
          input: "textarea",
          inputPlaceholder: "Please fill in this text field"
        });
        if (reason_response.isConfirmed) {
          await fetch(base_url + "/admin/vendor/verify", {
            method: "post",
            headers: {
              "Content-Type": "application/json",
              "Authorization": localStorage.getItem("token")
            },
            body: JSON.stringify({
              id,
              action: "reject",
              rejectMessage: reason_response.value
            })
          });

          SwalToast.fire('', 'Vendor rejected', 'success');
          return true;
        }
      }
      return;
    } else if (action == "approve") {
      const result = await Swal.fire({
        title: "Confirm Action",
        text: "Are you sure to verify this vendor?",
        icon: "warning",
        showCancelButton: true
      });

      if (result.isConfirmed) {
        await fetch(base_url + "/admin/vendor/verify", {
          method: "post",
          headers: {
            "Content-Type": "application/json",
            "Authorization": localStorage.getItem("token")
          },
          body: JSON.stringify({
            id,
            action: "approve"
          })
        });

        SwalToast.fire('', 'Vendor verified', 'success');
        return true;
      }
    }

    return false;
  } catch (error) {
    Swal.fire("Error", "Failed to psot data, please check console for more information", "error");
    console.log(error);
  }
};

export default verifyVendor;
