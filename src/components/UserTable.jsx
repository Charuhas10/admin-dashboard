import { useState } from "react";
import Pagination from "./Pagination";
import { FaEdit, FaTrash, FaSave, FaTimes } from "react-icons/fa";
import "../assets/userTable.css";

function UserTable({ users, setUsers, search }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [checkedItems, setCheckedItems] = useState({}); //for checkbox functionality
  const [editingId, setEditingId] = useState(null); //for edit functionality
  const [editFormData, setEditFormData] = useState({
    name: "",
    email: "",
    role: "",
  }); //for edit functionality

  const filteredUsers = users.filter((user) =>
    Object.values(user).some((value) =>
      value.toString().toLowerCase().includes(search.toLowerCase())
    )
  );

  //calculating the indexes
  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const totalPage = Math.ceil(filteredUsers.length / itemsPerPage);
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

  const handleEdit = (user) => {
    setEditingId(user.id);
    setEditFormData({ name: user.name, email: user.email, role: user.role });
  };

  const handleSave = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, ...editFormData } : user
      )
    );
    setEditingId(null);
  };

  const handleCancel = () => {
    setEditingId(null);
  };

  const handleFormChange = (event) => {
    setEditFormData({
      ...editFormData,
      [event.target.name]: event.target.value,
    });
  };

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
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
            <tr
              key={user.id}
              className={checkedItems[user.id] ? "row-selected" : ""}
            >
              <td>
                <input
                  type="checkbox"
                  checked={checkedItems[user.id] || false}
                  onChange={() => handleCheck(user.id)}
                />
              </td>
              <td>{user.id}</td>
              <td>
                {editingId === user.id ? (
                  <input
                    type="text"
                    className="edit-input"
                    name="name"
                    value={editFormData.name}
                    onChange={handleFormChange}
                  />
                ) : (
                  user.name
                )}
              </td>
              <td>
                {editingId === user.id ? (
                  <input
                    type="text"
                    className="edit-input"
                    name="email"
                    value={editFormData.email}
                    onChange={handleFormChange}
                  />
                ) : (
                  user.email
                )}
              </td>
              <td>
                {editingId === user.id ? (
                  <input
                    type="text"
                    className="edit-input"
                    name="role"
                    value={editFormData.role}
                    onChange={handleFormChange}
                  />
                ) : (
                  user.role
                )}
              </td>
              <td>
                {editingId === user.id ? (
                  <>
                    <button
                      className="save"
                      onClick={() => handleSave(user.id)}
                    >
                      <FaSave />
                    </button>
                    <button className="cancel" onClick={handleCancel}>
                      <FaTimes />
                    </button>
                  </>
                ) : (
                  <>
                    <button className="edit" onClick={() => handleEdit(user)}>
                      <FaEdit />
                    </button>
                    <button
                      className="delete"
                      onClick={() => handleDelete(user.id)}
                    >
                      <FaTrash className="delete-icon" />
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isAnyCheckBoxChecked() && (
        <div className="center">
          <button
            className="delete-selected-button"
            onClick={handleDeleteMultiple}
          >
            Delete Selected
          </button>
        </div>
      )}
      {totalPage > 1 && (
        <Pagination
          totalPage={totalPage}
          currentPage={currentPage}
          paginate={paginate}
        />
      )}
    </div>
  );
}

export default UserTable;
