import { useState } from "react";
import Pagination from "./Pagination";

function UserTable({ users }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  const [checkedItems, setCheckedItems] = useState({});

  //calculating the indexes
  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentItems = users.slice(firstItemIndex, lastItemIndex);
  const totalPage = Math.ceil(users.length / itemsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleCheck = (id) => {
    setCheckedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleCheckAll = () => {
    const allChecked = currentItems.every((item) => checkedItems[item.id]);
    const newCheckedItems = { ...checkedItems };
    currentItems.forEach((item) => {
      newCheckedItems[item.id] = !allChecked;
    });
    setCheckedItems(newCheckedItems);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                onChange={handleCheckAll}
                checked={currentItems.every((item) => checkedItems[item.id])}
              />
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
                <input
                  type="checkbox"
                  checked={checkedItems[user.id] || false}
                  onChange={() => handleCheck(user.id)}
                />
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
