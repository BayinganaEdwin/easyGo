import Typography from '@components/shared/typography';
import { Flex } from 'antd';
import DataComponentTable, { DataComponetContext } from '.';

const topCustomersData = [
  { key: '1', name: 'John Doe', email: 'john@example.com', totalSpent: 1500000, trips: 45 },
  { key: '2', name: 'Jane Smith', email: 'jane@example.com', totalSpent: 1350000, trips: 40 },
  { key: '3', name: 'Michael Brown', email: 'michael@example.com', totalSpent: 1200000, trips: 38 },
  { key: '4', name: 'Emily Johnson', email: 'emily@example.com', totalSpent: 1105000, trips: 32 },
];

const TopCustomersTable = () => {
  const columns = [
    { title: 'Customer Name', dataIndex: 'name', key: 'name' },
    { title: 'Email', dataIndex: 'email', key: 'email' },
    { title: 'Total Spent (RWF)', dataIndex: 'totalSpent', key: 'totalSpent' },
    { title: 'Total Trips', dataIndex: 'trips', key: 'trips' },
  ];

  return (
    <DataComponetContext.Provider
      value={{ columns, dataSource: topCustomersData, isLoading: false }}>
      <Flex vertical gap={10}>
        <Typography variant="subTitle" className="text-gray-800">
          Top Customers
        </Typography>
        <DataComponentTable />
      </Flex>
    </DataComponetContext.Provider>
  );
};

export default TopCustomersTable;
