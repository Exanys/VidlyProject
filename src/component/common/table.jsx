import TableBody from "./tableBody";
import TableHeader from "./tableHeader";

function Table({ columns, onSort, sortCol, data }) {
  return (
    <table className="table">
      <TableHeader columns={columns} onSort={onSort} sortCol={sortCol} />
      <TableBody data={data} columns={columns} />
    </table>
  );
}

export default Table;
