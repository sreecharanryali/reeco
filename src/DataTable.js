import React, { useState, useId } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ListItem, Button } from "@mui/material";
import MissingDailog from "./MissingDailog";
import { ContentCutOutlined } from "@mui/icons-material";

const columns = [
  { field: "productName", headerName: "Product Name" },
  { field: "brand", headerName: "Brand" },
  { field: "price", headerName: "Price" },
  { field: "quantity", headerName: "Quantity" },
  { field: "total", headerName: "Total" },
  { field: "status", headerName: "Status" },
];

const DataTable = ({ data }) => {
  const [tableData, setTableData] = useState(data);
  const [filteredData, setFilteredData] = useState(data);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [missingDailogOpen, setMissingDailogOpen] = useState(false);

  const handleMissingClick = (product) => {
    setSelectedProduct(product);
    setMissingDailogOpen(true);
  };
  const handleApproveClick = () => {
    let updatedData = tableData.map((item) => {
      if (item.id === selectedProduct.id) {
        return { ...item, status: "Approved" };
      }
      return item;
    });
    setTableData(updatedData);
  };
  const handleUrgent = () => {
    let updatedData = tableData.map((item) => {
      if (item.id === selectedProduct.id) {
        return { ...item, status: "Missing - Urgent" };
      }
      return item;
    });
    setTableData(updatedData);
  };

  const handleNotUrgent = () => {
    let updatedData = tableData.map((item) => {
      if (item.id === selectedProduct.id) {
        return { ...item, status: "Missing" };
      }
      return item;
    });
    setTableData(updatedData);
  };
  const handleSearch = (event) => {
    const keyword = event.target.value.toLowerCase();
    const filtered = data.filter((item) =>
      Object.values(item).some((value) =>
        String(value).toLowerCase().includes(keyword)
      )
    );
    setFilteredData(filtered);
  };
  const getApproveButtonColor = (status) => {
    return status === "Approved" ? "text-green-500" : "text-gray-500";
  };
  const getMissingButtonColor = (status) => {
    return status === "Approved" ? "text-gray-500" : "text-red-500";
  };
  const getStatusColor = (status) => {
    return status === "Approved"
      ? "bg-green-500"
      : status === "Missing"
      ? "bg-orange-500"
      : "bg-red-500";
  };
  return (
    <div className="max-w-7xl mx-auto p-4">
      <TableContainer component={Paper}>
        <div className="min-w-full flex justify-between p-4">
          <div className="p-2 w-1/2 border border-gray-500 rounded-full flex justify-between">
            <input
              className="w-4/5 outline-none"
              type="text"
              placeholder="Search"
              onChange={handleSearch}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5 text-gray-500"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
          <div className="w-1/5 flex items-center justify-between">
            <Button
              variant="outlined"
              color="success"
              style={{
                borderRadius: 50,
                textTransform: "capitalize",
                marginLeft: "2rem",
                color: "green",
                fontWeight: "bold",
              }}
            >
              Add Item
            </Button>
            <buttton>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 text-green-700"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z"
                />
              </svg>
            </buttton>
          </div>
        </div>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {columns.map((item) => {
                return (
                  <TableCell align="center" key={item.id}>
                    {item.headerName}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((item) => {
              return (
                <TableRow
                  key={item.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center">
                    <div className="flex items-center">
                      <img src={item.image} className="w-10 mr-2" />
                      {item.productName}
                    </div>
                  </TableCell>
                  <TableCell align="center">{item.brand}</TableCell>
                  <TableCell align="center">{item.price}</TableCell>
                  <TableCell align="center">{item.quantity}</TableCell>
                  <TableCell align="center">{item.total}</TableCell>
                  <TableCell align="center">
                    <div className="flex items-center justify-between">
                      <p
                        className={
                          "text-md py-2 px-4 rounded-full w-36 text-white " +
                          getStatusColor(item.status)
                        }
                      >
                        {item.status}
                      </p>
                      <button onClick={handleApproveClick}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="3.5"
                          stroke="currentColor"
                          class={
                            "w-6 h-6 font-bold " +
                            getApproveButtonColor(item.status)
                          }
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          />
                        </svg>
                      </button>
                      <button onClick={() => handleMissingClick(item)}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="3.5"
                          stroke="currentColor"
                          class={
                            "w-6 h-6 font-bold " +
                            getMissingButtonColor(item.status)
                          }
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                      <button className="border-0 bg-transparent text-md text-gray-700">
                        Edit
                      </button>
                    </div>
                    <MissingDailog
                      open={missingDailogOpen}
                      onClose={() => setMissingDailogOpen(false)}
                      onUrgentClick={handleUrgent}
                      onNotUrgentClick={handleNotUrgent}
                      content={selectedProduct}
                    />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default DataTable;
