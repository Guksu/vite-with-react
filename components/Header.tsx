import React from "react";
import { useNavigate, NavLink, Outlet } from "react-router-dom";

export default function Header() {
  const navigation = useNavigate();

  return (
    <div style={{ fontSize: "20px" }}>
      이것은 해더 컴포넌트입니다.
      <div onClick={() => navigation("/")}>Home</div>
      <NavLink to="/about" style={({ isActive }) => (isActive ? { color: "red" } : undefined)}>
        About
      </NavLink>
      <NavLink to="/backTest" style={({ isActive }) => (isActive ? { color: "red" } : undefined)}>
        뒤로가기 테스트
      </NavLink>
      <Outlet />
    </div>
  );
}
