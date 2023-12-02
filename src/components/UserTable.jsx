import { useState } from "react";
import Pagination from "./Pagination";

function UserTable({ users }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  //calculating the indexes
  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentItems = users.slice(firstItemIndex, lastItemIndex);
  const totalPage = Math.ceil(users.length / itemsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((user) => (
            <tr key={user.id}>
              <td>
                <input type="checkbox" />
              </td>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>buttons</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        totalPage={totalPage}
        currentPage={currentPage}
        paginate={paginate}
      />
    </div>
  );
}

export default UserTable;
