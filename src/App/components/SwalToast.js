import Swal from "sweetalert2";

const SwalToast = Swal.mixin({
  toast: true,
  position: "top",
  timer: 1500,
  showConfirmButton: false
});

export default SwalToast;
