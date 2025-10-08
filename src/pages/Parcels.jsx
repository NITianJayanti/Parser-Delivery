import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";

// ✅ Columns for Parcel Delivery DataGrid
const columns = [
  { field: "from", headerName: "From", flex: 1, minWidth: 120 },
  { field: "to", headerName: "To", flex: 1, minWidth: 120 },
  { field: "sender", headerName: "Sender", flex: 1, minWidth: 150 },
  { field: "receiver", headerName: "Receiver", flex: 1, minWidth: 150 },
  { field: "cost", headerName: "Cost (₹)", flex: 1, minWidth: 100 },
  {
    field: "edit",
    headerName: "Edit",
    width: 110,
    renderCell: (params) => (
      <button
        onClick={() => alert(`Edit parcel ${params.row.id}`)}
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
        onClick={() => alert(`Delete parcel ${params.row.id}`)}
        className="flex items-center gap-2 px-1 py-0 rounded-full font-medium
                 border border-red-600 text-red-500 bg-transparent
                 hover:bg-red-500 hover:text-white transition shadow-sm"
      >
        <FaTrash /> Delete
      </button>
    ),
  },
];

// ✅ Example Parcel Data (Rows)
const rows = [
  {
    id: 1,
    from: "Kolkata",
    to: "Mumbai",
    sender: "Rahul Sharma",
    receiver: "Amit Verma",
    cost: "₹1200",
  },
  {
    id: 2,
    from: "Delhi",
    to: "Bangalore",
    sender: "Priya Singh",
    receiver: "Neha Rao",
    cost: "₹1280",
  },
  {
    id: 3,
    from: "Hyderabad",
    to: "Chennai",
    sender: "Anil Kumar",
    receiver: "Suresh Reddy",
    cost: "₹1209",
  },
  {
    id: 4,
    from: "Pune",
    to: "Jaipur",
    sender: "Manish Gupta",
    receiver: "Ravi Mehta",
    cost: "₹1240",
  },
  {
    id: 5,
    from: "Lucknow",
    to: "Ahmedabad",
    sender: "Alok Yadav",
    receiver: "Rakesh Patel",
    cost: "₹1240",
  },
];

const Parcels = () => {
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
          <FaPlus /> New Parcel
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

export default Parcels;
