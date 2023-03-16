import React from "react";
import { Link } from "react-router-dom";
import { WrapperStyled } from "./styled";

export default function NavForStaff() {
  const Path = window.location.href;
  const ArrayPath = Path.split("=");
  const onClick1 = () => {
    window.location.href = `http://localhost:3000/nav/staff/data-product-staff?id=${ArrayPath[1]}`;
  };
  const onClick2 = () => {
    window.location.href = `http://localhost:3000/nav/staff/data-customer?id=${ArrayPath[1]}`;
  };
  const onClick3 = () => {
    window.location.href = `http://localhost:3000/nav/staff/data-vaccination?id=${ArrayPath[1]}`;
  };
  const onClick4 = () => {
    window.location.href = `http://localhost:3000/nav/staff/statisics?id=${ArrayPath[1]}`;
  };
  const onClick5 = () => {
    window.location.href = `http://localhost:3000/nav/staff/data-staff?id=${ArrayPath[1]}`;
  };
  const onClick6 = () => {
    window.location.href = `http://localhost:3000/nav/staff/home?id=${ArrayPath[1]}`;
  };
  const onClick7 = () => {
    window.location.href = `http://localhost:3000/nav/staff/receipt?id=${ArrayPath[1]}`;
  };

  return (
    <WrapperStyled>
      <nav>
        <div className="nav-contain">
          <div className="nav-content">
            <a onClick={onClick6} className="nav-links">
              Quản lý tiêm chủng
            </a>
          </div>
          <div className="nav-content">
            <a onClick={onClick1} className="nav-links">
              Thông tin sản phẩm
            </a>
          </div>
          <div className="nav-content">
            <a onClick={onClick2} className="nav-links">
              Thông tin khách hàng
            </a>
          </div>
          <div className="nav-content">
            <a onClick={onClick3} className="nav-links">
              Dữ liệu tiêm chủng
            </a>
          </div>
          <div className="nav-content">
            <a onClick={onClick4} className="nav-links">
              Thống kê
            </a>
          </div>
          <div className="nav-content">
            <a onClick={onClick5} className="nav-links">
              Thông tin nhân viên
            </a>
          </div>
          <div className="nav-content">
            <a onClick={onClick7} className="nav-links">
              Hóa đơn
            </a>
          </div>
          <div className="nav-content">
            <Link to="/" className="nav-links">
              Log out
            </Link>
          </div>
          {/* <div className="nav-content">
            <Link to="/nav/admin/bangsp" className="nav-links">
              Bảng sản phẩm
            </Link>
          </div>
          <div className="nav-content">
            <Link to="/nav/admin/chart2" className="nav-links">
              Chart2
            </Link>
          </div> */}
        </div>
      </nav>
    </WrapperStyled>
  );
}
