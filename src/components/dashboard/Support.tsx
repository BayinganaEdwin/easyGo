import Button from '@components/shared/button';
import Input from '@components/shared/input';
import Typography from '@components/shared/typography';
import { Flex, Input as AntdInput, Form, message } from 'antd';
import React from 'react';

const SupportComponent = () => {
  const [form] = Form.useForm();

  const handleSubmit = () => {
    message.success('Your support request has been submitted!');
    form.resetFields();
  };

  return (
    <Flex justify="center" align="center" className="w-full">
      <Flex className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md flex-col">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">Support</h2>
        <p className="text-gray-600 text-center mb-6">
          Need help? Fill out the form below and we&apos;ll get back to you.
        </p>
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
          <Form.Item
            name="name"
            label={<Typography>Full Name</Typography>}
            rules={[{ required: true, message: 'Please enter your name' }]}>
            <Input placeholder="Enter your name" />
          </Form.Item>
          <Form.Item
            name="email"
            label={<Typography>Email</Typography>}
            rules={[{ required: true, type: 'email', message: 'Please enter a valid email' }]}>
            <Input placeholder="Enter your email" />
          </Form.Item>
          <Form.Item
            name="message"
            label={<Typography>Message</Typography>}
            rules={[{ required: true, message: 'Please enter your message' }]}>
            <AntdInput.TextArea
              rows={4}
              variant="borderless"
              placeholder="Describe your issue or inquiry"
              className="bg-secondaryBackground text-black"
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Flex>
    </Flex>
  );
};

export default SupportComponent;
