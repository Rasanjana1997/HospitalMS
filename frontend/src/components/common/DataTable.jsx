import { Table } from "antd";

const DataTable = ({ loading, columns, data, pagination, ...other }) => {
  return (
    <Table
      pagination={pagination}
      rowKey={record => record.id}
      loading={loading}
      columns={columns}
      dataSource={data}
      className="shadow-md px-5 py-5 rounded-lg border border-borderbg mt-5"
      scroll={{ x: true }}
      {...other}
    />
  );
}

export default DataTable;