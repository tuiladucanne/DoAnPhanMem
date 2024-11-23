import Swal from "sweetalert2";

const showLoading = () => {
    Swal.fire({
      title: "Đang xử lý...",
      html: "Vui lòng đợi trong giây lát!", // Dòng mô tả
      allowOutsideClick: false, // Không cho phép tắt popup khi click bên ngoài
      showConfirmButton: false, // Ẩn nút xác nhận
      willOpen: () => {
        Swal.showLoading(); // Hiển thị spinner loading
      },
      width: 600,
      padding: "3em",
      color: "#716add",
      background: "#fff url(/images/trees.png)",
      backdrop: `
        rgba(0,0,123,0.4)
        url("/images/nyan-cat.gif")
        left top
        no-repeat
      `,
    });
  };
  const hideLoading = () => {
    Swal.close();
  }
  export  {showLoading, hideLoading};