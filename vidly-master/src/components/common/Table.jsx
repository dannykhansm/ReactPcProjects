import React from "react";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

const Table = ({ column, sortColumn, onSort, data }) => {
  return (
    <table className="table">
      <TableHeader column={column} onSort={onSort} sortColumn={sortColumn} />
      <TableBody data={data} columns={column} />
    </table>
  );
};

export default Table;
