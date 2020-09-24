import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminUserDelete = () => {
  const [data, setData] = useState({ hits: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://127.0.0.1:8000/api/users");

      setData(result.data);
    };
    fetchData();
  }, []);

  const users = data["hydra:member"];

  return (
    <div className="pa3 pa5-ns w-100-m w-50-l fl">
      <h1 className="f4 bold center mw6 tc">User list</h1>
      <ul className="list pl0 ml0 center mw6 ba b--light-silver br2">
        {users
          ? users.map((user) => (
              <a
                className="no-underline"
                href={
                  window.location.href.split("?id=")[0] +
                  "?id=" +
                  user["@id"].split("/")[user["@id"].split("/").length - 1]
                }
                key={user["@id"]}
              >
                <li className="ph3 pv3 bb b--light-silver black">
                  {user.email}
                </li>
              </a>
            ))
          : ""}
      </ul>
    </div>
  );
};

export default AdminUserDelete;
