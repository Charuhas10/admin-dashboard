import { useState } from "react";
import UserTable from "./components/UserTable";
import { useEffect } from "react";
import SearchBar from "./components/SearchBar";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState(""); //for search functionality

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
        );
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.log("Error in fetching the users", error);
      }
    };
    fetchUsers();
  }, []);

  const deleteBulk = () => {
    // Only keep users that do not match the search term
    if (search) {
      setUsers(
        users.filter(
          (user) =>
            !Object.values(user).some((value) =>
              value.toString().toLowerCase().includes(search.toLowerCase())
            )
        )
      );
    } else {
      setUsers([]); // If no search term, delete all
    }
  };

  return (
    <div className="app-container">
      <SearchBar
        search={search}
        setSearch={setSearch}
        deleteBulk={deleteBulk}
      />
      <UserTable users={users} setUsers={setUsers} search={search} />
    </div>
  );
}

export default App;
