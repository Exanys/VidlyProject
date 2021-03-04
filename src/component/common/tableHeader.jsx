function TableHeader({ columns, onSort, sortCol }) {
  const sort = (path) => {
    const copySC = { ...sortCol };
    if (copySC.path === path)
      copySC.order = copySC.order === "asc" ? "desc" : "asc";
    else {
      copySC.path = path;
      copySC.order = "asc";
    }
    onSort(copySC);
  };

  const renderSortIcon = (col) => {
    if (col.path !== sortCol.path) return null;
    if (sortCol.order === "asc") return <i className="fa fa-sort-asc" />;
    return <i className="fa fa-sort-desc" />;
  };

  return (
    <thead>
      <tr>
        {columns.map((c) => (
          <th key={c.path || c.key} onClick={() => sort(c.path)}>
            {c.label}
            {renderSortIcon(c)}
          </th>
        ))}
      </tr>
    </thead>
  );
}

export default TableHeader;
