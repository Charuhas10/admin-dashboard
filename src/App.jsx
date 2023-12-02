import { useState } from "react";
import UserTable from "./components/UserTable";
import { useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);

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

  return (
    <div>
      <UserTable users={users} />
    </div>
  );
}

export default App;
