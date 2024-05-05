import "./App.css";
import MOCK_DATA from "./assets/json/MOCK_DATA.json";
import { usePagination, useTable } from "react-table";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useMemo, useState } from "react";
import { CustomHeaderColumn } from "./components/tables/CustomHeaderColumn";
import { CustomRow } from "./components/tables/CustomRow";
import { Columns } from "./components/tables/_columns";

function App() {
  const data = useMemo(() => MOCK_DATA, []);

  const columns = useMemo(() => Columns, []);

  const {
    getTableProps,
    getTableBodyProps,
    headers,
    page,
    prepareRow,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state: { pageIndex },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 10 },
    },
    usePagination
  );
  return (
    <div className="App">
      <table className="table table-hover table-striped" {...getTableProps()}>
        <thead className="table-dark">
          <tr className="p-3">
            {headers.map((column) => (
              <CustomHeaderColumn key={column.id} column={column} />
            ))}
          </tr>
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.length > 0 ? (
            page.map((row, i) => {
              prepareRow(row);
              return <CustomRow row={row} key={`row-${i}-${row.id}`} />;
            })
          ) : (
            <tr>
              <td colSpan={7}>
                <div className="d-flex text-center w-100 align-content-center justify-content-center">
                  No matching records found
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <div>
        <button
          className="btn btn-primary"
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
        >
          Previous
        </button>{" "}
        <button
          className="btn btn-primary"
          onClick={() => nextPage()}
          disabled={!canNextPage}
        >
          Next
        </button>{" "}
        <span>
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>
      </div>
    </div>
  );
}

export default App;
