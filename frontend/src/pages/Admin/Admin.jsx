import React from "react";
import { Link } from "react-router-dom";

const AdminNavigationBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/blogmanage">Blog Manage</Link>
        </li>
        <li>
          <Link to="/supportmanage">Support Manage</Link>
        </li>
        <li>
          <Link to="/usermanage">User Manage</Link>
        </li>
      </ul>
    </nav>
  );
};

export default AdminNavigationBar;
