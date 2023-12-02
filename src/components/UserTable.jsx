import { useState } from "react";
import Pagination from "./Pagination";
import { FaEdit, FaTrash } from "react-icons/fa";

function UserTable({ users, setUsers, search }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [checkedItems, setCheckedItems] = useState({}); //for checkbox functionality

  const filteredUsers = users.filter((user) =>
    Object.values(user).some((value) =>
      value.toString().toLowerCase().includes(search.toLowerCase())
    )
  );
  //calculating the indexes
  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const totalPage = Math.ceil(users.length / itemsPerPage);
  const currentItems = filteredUsers.slice(firstItemIndex, lastItemIndex);

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

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const handleEdit = (id) => {
    const user = users.find((u) => u.id === id);
    if (!user) return;
    const newName = prompt("Enter new name", user.name);
    const newEmail = prompt("Enter new Email", user.email);
    const newRole = prompt("Enter new Role", user.role);

    setUsers(
      users.map((u) =>
        u.id === id
          ? { ...u, name: newName, email: newEmail, role: newRole }
          : u
      )
    );
  };

  const handleDeleteMultiple = () => {
    setUsers(users.filter((user) => !checkedItems[user.id]));
    setCheckedItems({});
  };
  const isAnyCheckBoxChecked = () => {
    return Object.values(checkedItems).some((checked) => checked);
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
              <td>
                <button onClick={() => handleEdit(user.id)}>
                  <FaEdit />
                </button>
                <button onClick={() => handleDelete(user.id)}>
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isAnyCheckBoxChecked() && (
        <button onClick={handleDeleteMultiple}>Delete Selected</button>
      )}
      <Pagination
        totalPage={totalPage}
        currentPage={currentPage}
        paginate={paginate}
      />
    </div>
  );
}

export default UserTable;
