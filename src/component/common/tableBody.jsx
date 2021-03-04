import _ from "lodash";


function TableBody({ data, columns }) {
  const renderCell = (item, col) => {
    if (col.content) return col.content(item);
    return _.get(item, col.path);
  };
  const keys = (item, col) => {
    return item._id + (col.label || col.key);
  };

  return (
    <tbody>
      {data.map((item) => {
        return (
          <tr key={item._id}>
            {columns.map((col) => {
                return <td key={keys(item, col)}>{renderCell(item, col)}</td>;
              
            })}
          </tr>
        );
      })}
    </tbody>
  );
}

export default TableBody;
