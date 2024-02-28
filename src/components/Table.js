import Table from "react-bootstrap/Table";

function TableComp({ tableObj }) {
  const headingKeys = Object.keys(tableObj.data[0]);
  return (
    <Table responsive style={{ "--bs-table-bg": tableObj.styles.background }}>
      <thead className="align-middle">
        <tr>
          {headingKeys?.map((key, index) => {
            return (
              !tableObj?.fieldsToExclude?.includes(key) && (
                <th
                  key={index}
                  style={{
                    width: `calc((100%-5px)/${headingKeys?.length})`,
                    textTransform: "capitalize",
                  }}
                >
                  {key.replace(/([a-z](?=[A-Z]))/g, "$1 ")}
                </th>
              )
            );
          })}
          {!tableObj?.fieldsToExclude?.includes("actions") && (
            <th style={{ width: "5px" }}>Actions</th>
          )}
        </tr>
      </thead>
      <tbody>
        {tableObj?.data.map((item, index1) => {
          return (
            <tr key={index1}>
              {headingKeys.map((ele, index2) => {
                return (
                  !tableObj?.fieldsToExclude?.includes(ele) && (
                    <td
                      key={index2}
                      style={{
                        width: `calc((100%-5px)/${headingKeys.length})`,
                      }}
                    >
                      {item[ele]}
                    </td>
                  )
                );
              })}
              {!tableObj?.fieldsToExclude?.includes("actions") && (
                <td style={{ width: "5px", alignItems: "center" }}>
                  <button
                    className="whitespace-nowrap"
                    onClick={() =>
                      tableObj?.clickAction(item)
                    }
                  >
                    {tableObj.action}
                  </button>
                </td>
              )}
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default TableComp;
