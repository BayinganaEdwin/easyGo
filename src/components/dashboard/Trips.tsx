import React, { useState } from 'react';
import { Flex, Button, Modal, Form } from 'antd';
import Typography from '@components/shared/typography';
import DataComponentTable, { DataComponetContext } from './tables';
import Input from '@components/shared/input';

type TripType = {
  id: string;
  tripID: string;
  route: string;
  bus: string;
  time: string;
  cost: number;
  seatsLeft: number;
};

const initialTripsData = [
  {
    id: '1',
    tripID: 'T-1001',
    route: 'Route A',
    bus: 'RA 1234',
    time: '08:00 - 10:00',
    cost: 5000,
    seatsLeft: 10,
  },
  {
    id: '2',
    tripID: 'T-1002',
    route: 'Route B',
    bus: 'RB 5678',
    time: '12:00 - 14:00',
    cost: 6000,
    seatsLeft: 15,
  },
  {
    id: '3',
    tripID: 'T-1003',
    route: 'Route C',
    bus: 'RC 9101',
    time: '16:00 - 18:00',
    cost: 5500,
    seatsLeft: 5,
  },
];

const columns = [
  { title: 'Trip ID', dataIndex: 'tripID', key: 'tripID' },
  { title: 'Route', dataIndex: 'route', key: 'route' },
  { title: 'Bus', dataIndex: 'bus', key: 'bus' },
  { title: 'Time', dataIndex: 'time', key: 'time' },
  { title: 'Cost (RWF)', dataIndex: 'cost', key: 'cost' },
  { title: 'Seats Left', dataIndex: 'seatsLeft', key: 'seatsLeft' },
];

const TripsComponent = () => {
  const [tripsData, setTripsData] = useState(initialTripsData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();

  const showModal = () => setIsModalOpen(true);
  const handleCancel = () => setIsModalOpen(false);

  const handleAddTrip = (values: Omit<TripType, 'id' | 'tripID'>) => {
    const newTrip = {
      id: (tripsData.length + 1).toString(),
      tripID: `T-10${tripsData.length + 1}`,
      ...values,
    };
    setTripsData([...tripsData, newTrip]);
    setIsModalOpen(false);
    form.resetFields();
  };

  return (
    <DataComponetContext.Provider value={{ columns, dataSource: tripsData, isLoading: false }}>
      <Flex vertical className="p-4 w-full">
        <Flex justify="space-between" gap={10}>
          <Typography variant="subTitle" className="text-gray-800">
            Trips
          </Typography>
          <Button type="primary" onClick={showModal}>
            + Add Trip
          </Button>
        </Flex>
        <DataComponentTable />
      </Flex>

      {/* Add Trip Modal */}
      <Modal
        title="Add New Trip"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        classNames={{
          body: 'bg-white',
          content: 'bg-white',
          header: 'bg-white',
        }}>
        <Form form={form} layout="vertical" onFinish={handleAddTrip} className="text-black">
          <Form.Item
            name="route"
            label={<span className="text-black">Route</span>}
            rules={[{ required: true, message: 'Please enter route' }]}
            className="text-black">
            <Input placeholder="Enter route (e.g., Route A)" />
          </Form.Item>

          <Form.Item
            name="bus"
            label={<span className="text-black">Bus</span>}
            rules={[{ required: true, message: 'Please enter bus name' }]}
            className="text-black">
            <Input placeholder="Enter bus (e.g., RAI 123 A)" />
          </Form.Item>

          <Form.Item
            name="time"
            label={<span className="text-black">Time</span>}
            rules={[{ required: true, message: 'Please enter trip time' }]}
            className="text-black">
            <Input placeholder="Enter time (e.g., 08:00 - 10:00)" />
          </Form.Item>

          <Form.Item
            name="cost"
            label={<span className="text-black">Cost (RWF)</span>}
            rules={[{ required: true, message: 'Please enter trip cost' }]}
            className="text-black">
            <Input className="w-full" min={1000} placeholder="Enter cost (e.g., 5000)" />
          </Form.Item>

          <Form.Item
            name="seatsLeft"
            label={<span className="text-black">Seats Left</span>}
            rules={[{ required: true, message: 'Please enter available seats' }]}
            className="text-black">
            <Input className="w-full" min={1} placeholder="Enter available seats (e.g., 10)" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Add Trip
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </DataComponetContext.Provider>
  );
};

export default TripsComponent;
