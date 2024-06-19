import React from "react";

const UserList = ({ users }) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center ">
        <h1 className="text-4xl m-2 p-4 text-center font-semibold">UserList</h1>{" "}
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full max-w-xs">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
              </tr>
            </thead>
            <tbody data-testid="users">
              {users.map((user, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  } border-b`}
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    {user.name}
                  </th>
                  <td className="px-6 py-4">{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default UserList;
