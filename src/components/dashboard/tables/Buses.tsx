import { Flex, Card } from 'antd';
import Typography from '@components/shared/typography';
import DataComponentTable, { DataComponetContext } from '.';

const busesData = [
  { id: '1', busNumber: 'RA 1234', capacity: 50, status: 'Active' },
  { id: '2', busNumber: 'RB 5678', capacity: 45, status: 'Inactive' },
  { id: '3', busNumber: 'RC 9101', capacity: 55, status: 'Active' },
];

const columns = [
  { title: 'Bus Number', dataIndex: 'busNumber', key: 'busNumber' },
  { title: 'Capacity', dataIndex: 'capacity', key: 'capacity' },
  { title: 'Status', dataIndex: 'status', key: 'status' },
];

const BusesTable = () => (
  <DataComponetContext.Provider value={{ columns, dataSource: busesData, isLoading: false }}>
    <Card className="bg-white shadow-md border border-gray-200 rounded-lg p-4">
      <Flex vertical gap={10}>
        <Typography variant="subTitle" className="text-gray-800">
          Buses
        </Typography>
        <DataComponentTable />
      </Flex>
    </Card>
  </DataComponetContext.Provider>
);

export default BusesTable;
