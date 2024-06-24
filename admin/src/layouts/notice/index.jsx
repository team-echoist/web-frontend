import Tables from "components/Tables"
import authorsTableData from "components/Tables/data/authorsTableData";


function index() {
    const { columns, rows } = authorsTableData();
  return (
    <Tables title="Notice" columns={columns} rows={rows} id="1"/>
  );
}

export default index;
