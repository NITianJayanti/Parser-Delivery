import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";

// ✅ Columns for Users DataGrid
const columns = [
  { field: "id", headerName: "User ID", flex: 1, minWidth: 120 },
  { field: "name", headerName: "Name", flex: 1, minWidth: 150 },
  { field: "email", headerName: "Email", flex: 1, minWidth: 200 },
  { field: "role", headerName: "Role", flex: 1, minWidth: 120 },
  { field: "status", headerName: "Status", flex: 1, minWidth: 120 },
  {
    field: "edit",
    headerName: "Edit",
    width: 110,
    renderCell: (params) => (
      <button
        onClick={() => alert(`Edit user ${params.row.id}`)}
        className="flex items-center gap-2 px-1 py-0 rounded-full font-medium
                 border border-blue-700 text-blue-500 bg-transparent
                 hover:bg-blue-500 hover:text-white transition shadow-sm"
      >
        <FaEdit /> Edit
      </button>
    ),
  },
  {
    field: "delete",
    headerName: "Delete",
    width: 130,
    renderCell: (params) => (
      <button
        onClick={() => alert(`Delete user ${params.row.id}`)}
        className="flex items-center gap-2 px-1 py-0 rounded-full font-medium
                 border border-red-600 text-red-500 bg-transparent
                 hover:bg-red-500 hover:text-white transition shadow-sm"
      >
        <FaTrash /> Delete
      </button>
    ),
  },
];

// ✅ Example User Data (Rows)
const rows = [
  {
    id: 1,
    name: "Rahul Sharma",
    email: "rahul.sharma@example.com",
    role: "Admin",
    status: "Active",
  },
  {
    id: 2,
    name: "Priya Singh",
    email: "priya.singh@example.com",
    role: "User",
    status: "Inactive",
  },
  {
    id: 3,
    name: "Anil Kumar",
    email: "anil.kumar@example.com",
    role: "Moderator",
    status: "Active",
  },
  {
    id: 4,
    name: "Manish Gupta",
    email: "manish.gupta@example.com",
    role: "User",
    status: "Active",
  },
  {
    id: 5,
    name: "Alok Yadav",
    email: "alok.yadav@example.com",
    role: "User",
    status: "Suspended",
  },
];

const Users = () => {
  return (
    <div className="m-8 bg-white shadow-lg rounded-xl p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-semibold text-gray-800">📦 All Parcels</h1>
        <button
          className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 
                     text-white px-4 py-2 rounded-lg shadow-md font-medium
                     hover:shadow-lg hover:scale-105 transition"
        >
          <FaPlus /> New User
        </button>
      </div>

      {/* DataGrid */}
      <div className="h-[420px]">
        <DataGrid
          rows={rows}
          columns={columns}
          checkboxSelection
          disableRowSelectionOnClick
          sx={{
            border: "none",
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: "#f5f5f5",
              color: "#333",
              fontWeight: "bold",
            },
            "& .MuiDataGrid-row:nth-of-type(even)": {
              backgroundColor: "#fafafa",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: "1px solid #e0e0e0",
            },
            "& .MuiDataGrid-row:hover": {
              backgroundColor: "#e8f4ff",
            },
          }}
        />
      </div>
    </div>
  );
};

export default Users;
