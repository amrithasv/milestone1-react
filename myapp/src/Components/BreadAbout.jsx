import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const BreadCrumb = () => {
  return (
    <div className="px-5 pt-3">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="text-danger breadcrumb-item text-gray">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            <Link to="/course">About</Link>
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default BreadCrumb;