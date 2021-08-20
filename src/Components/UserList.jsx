import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { rows } from "../data";
import React, { useState } from "react";

const UserList = () => {
  const [data, setData] = useState(rows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "UserName",
      headerName: "UserName",
      width: 250,
      renderCell: (params) => {
        return (
          <div className="userProfile">
            <img
              className="profileImg"
              src={params.row.avatar}
              alt="profilepic"
            />
            {params.row.UserName}
          </div>
        );
      },
    },
    {
      field: "Email",
      headerName: "Email",
      width: 150,
      editable: true,
    },
    {
      field: "Status",
      headerName: "Status",
      width: 130,
      editable: true,
    },
    {
      field: "Transaction",
      headerName: "Transaction",
      width: 160,
      editable: true,
    },
    {
      field: "action",
      headerName: "Action",
      width: 160,
      renderCell: (params) => {
        return (
          <>
            <Link className="link" to={"/user/" + params.row.id}>
              <button className="Editbtn bg-success text-light btn-sm">
                {" "}
                Edit
              </button>
            </Link>

            <DeleteOutline
              className="ms-3 text-danger del"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];
  return (
    <div className="Userlist">
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={8}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
};

export default UserList;
