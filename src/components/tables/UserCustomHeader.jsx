import clsx from "clsx";

const CustomHeader = ({ className, title, tableProps }) => {
  return (
    <th
      {...tableProps.column.getHeaderProps()}
      className={clsx(className, "p-3")}
      style={{ cursor: "pointer" }}
    >
      {title}
    </th>
  );
};

export { CustomHeader };
