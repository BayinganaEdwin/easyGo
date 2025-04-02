import Head from 'next/head';
import { Fragment, ReactElement } from 'react';
import { NextPage } from 'next';
import AuthLayout from '@layouts/auth';
import { Flex, Radio, Checkbox, Button, Modal } from 'antd';
import Typography from '@components/shared/typography';
import Input from '@components/shared/input';
import { Form } from 'antd';
import Image from 'next/image';
import { useState } from 'react';
import { MTNMOMO, VisaMCF } from '@utils/images';
import { useRouter } from 'next/router';
import { LoggedInUserLogo } from '@components/home/Navbar';
import { CheckCircleOutlined } from '@ant-design/icons';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactElement;
};

const Payment: NextPageWithLayout = () => {
  const formatExpiryDate = (value: string) => {
    return value
      .replace(/\D/g, '')
      .replace(/^([2-9])$/g, '0$1')
      .replace(/^(0[1-9]|1[0-2])([0-9]{0,2})/g, '$1/$2')
      .slice(0, 5);
  };
  const validateExpiryDate = (value: { split: (arg0: string) => [any, any] }) => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear().toString().slice(-2);
    const currentMonth = currentDate.getMonth() + 1;

    const [month, year] = value.split('/');

    if (!month || !year) return false;
    if (parseInt(year) < parseInt(currentYear)) return false;
    if (parseInt(year) === parseInt(currentYear) && parseInt(month) < currentMonth) return false;

    return true;
  };
  const [customerName, setCustomerName] = useState('');
  const [baggageSize, setBaggageSize] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('VisaMCF');
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setIsModalVisible(true);
    }, 5000);
  };

  return (
    <Fragment>
      <Head>
        <title>Payment | EasyGo</title>
      </Head>
      <Flex vertical className="bg-gray-100 h-screen p-4">
        <Flex justify="space-between" className="items-center p-2">
          <Typography variant="title">easyGo.</Typography>
          <LoggedInUserLogo />
        </Flex>

        <Flex justify="center" className="text-black bg-gray-100 rounded-3xl flex-col lg:flex-row">
          <Flex>
            <Flex
              vertical
              className=" hover:shadow-md rounded-xl w-[100%] mt-6 mb-6 p-4 gap-4 bg-slate-50 ">
              <Typography variant="title">Complete Payment</Typography>
              <Form onFinish={handleSubmit}>
                <Flex vertical className="gap-6">
                  <Typography variant="subTitle" className="block mb-2 font-medium">
                    How would you like to pay?
                  </Typography>
                  <Flex className="gap-10">
                    <Flex
                      justify="center"
                      align="center"
                      onClick={() => setPaymentMethod('VisaMCF')}
                      className="border border-gray-300 rounded-md bg-gray-100 hover:border-green-500 px-4 py-2 cursor-pointer min-w-28">
                      <Image src={VisaMCF} alt="Visa/Mastercard" width={80} height={32} />
                    </Flex>
                    <Flex
                      justify="center"
                      align="center"
                      onClick={() => setPaymentMethod('MTNMOMO')}
                      className="border border-gray-300 rounded-md px-4 py-2 hover:border-green-500 cursor-pointer bg-yellow-400 min-w-28">
                      <Image src={MTNMOMO} alt="MTN MoMo" width={80} height={32} />
                    </Flex>
                  </Flex>
                  {paymentMethod === 'VisaMCF' && (
                    <>
                      <Flex className="gap-6">
                        <Form.Item
                          name={'CardHolderName'}
                          label={<span className="text-black">Card Holder&apos;s Name</span>}
                          layout="vertical"
                          rules={[
                            { required: true, message: '' },
                            { whitespace: true },
                            { min: 3 },
                          ]}
                          hasFeedback>
                          <Input
                            placeholder="Card Name"
                            className="text-black text-base bg-gray-300 border border-gray-300 rounded-md p-4"
                          />
                        </Form.Item>
                        <Form.Item
                          name={'CardNumber'}
                          label={<span className="text-black">Card Number</span>}
                          layout="vertical"
                          rules={[
                            { required: true, message: '' },
                            { whitespace: true },

                            {
                              validator: (_, value) =>
                                !value || /^\d{16}$/.test(value)
                                  ? Promise.resolve()
                                  : Promise.reject(new Error()),
                            },
                          ]}
                          hasFeedback>
                          <Input
                            placeholder="xxxx xxxx xxxx xxxx"
                            maxLength={16}
                            className="text-black text-base bg-gray-300 rounded-md border-none p-4"
                          />
                        </Form.Item>
                      </Flex>
                      <Flex className="gap-6 mt-6">
                        <Form.Item
                          name={'ExpiryDate'}
                          label={<span className="text-black">Expiry Date</span>}
                          layout="vertical"
                          rules={[
                            { required: true, message: '' },
                            { whitespace: true },
                            {
                              validator: (_, value) => {
                                if (!value) {
                                  return Promise.reject();
                                }

                                if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(value)) {
                                  return Promise.reject();
                                }

                                if (!validateExpiryDate(value)) {
                                  return Promise.reject('Card has expired');
                                }

                                return Promise.resolve();
                              },
                            },
                          ]}
                          hasFeedback>
                          <Input
                            placeholder="MM/YY"
                            maxLength={5}
                            onChange={(e) => {
                              const formattedValue = formatExpiryDate(e.target.value);
                              e.target.value = formattedValue;
                            }}
                            className="text-black text-base bg-gray-300 rounded-md border-none p-4"
                          />
                        </Form.Item>
                        <Form.Item
                          name={'CVC'}
                          label={<span className="text-black">CVC</span>}
                          layout="vertical"
                          rules={[
                            { required: true, message: '' },
                            { whitespace: true },
                            {
                              validator: (_, value) =>
                                !value || /^\d{3}$/.test(value)
                                  ? Promise.resolve()
                                  : Promise.reject(new Error()),
                            },
                          ]}
                          hasFeedback>
                          <Input
                            placeholder="123"
                            maxLength={3}
                            className="text-black text-base bg-gray-300 rounded-md border-none p-4"
                          />
                        </Form.Item>
                      </Flex>
                    </>
                  )}

                  <Typography variant="subTitle" className="block mt-6 font-medium">
                    Customer Information
                  </Typography>

                  <Flex className="gap-6">
                    <Form.Item
                      name={'CustomerName'}
                      label={<span className="text-black">Customer&apos;s Name</span>}
                      layout="vertical"
                      rules={[{ required: true, message: '' }, { whitespace: true }, { min: 3 }]}
                      hasFeedback>
                      <Input
                        placeholder="Your Names"
                        onChange={(e) => setCustomerName(e.target.value)}
                        className="text-black text-base bg-gray-300 rounded-md border-none p-4"
                      />
                    </Form.Item>
                    <Form.Item
                      name={'PhoneNumber'}
                      label={<span className="text-black">Customer&apos;s Phone</span>}
                      layout="vertical"
                      rules={[{ required: true, message: '' }, { whitespace: true }]}
                      hasFeedback>
                      <Input
                        placeholder="250 780 000 000"
                        maxLength={12}
                        className="text-black text-base bg-gray-300 rounded-md border-none p-4"
                      />
                    </Form.Item>
                  </Flex>
                  <Flex className="mt-4">
                    <Form.Item
                      name={'baggageSize'}
                      label={<span className="text-black">Baggage Size</span>}
                      layout="vertical"
                      rules={[{ required: false }]}
                      hasFeedback>
                      <Radio.Group>
                        <Flex vertical className="gap-2">
                          <Radio
                            className="text-black"
                            value={'Small'}
                            onChange={() => setBaggageSize('small')}>
                            Small(e.g.Backpack, Laptop Bag, Duffel Bag,etc)
                          </Radio>
                          <Radio
                            className="text-black"
                            value={'Large'}
                            onChange={() => setBaggageSize('Large')}>
                            Large(e.g.Suitcase, Travel Trunk, Mattress,etc)
                          </Radio>
                        </Flex>
                      </Radio.Group>
                    </Form.Item>
                  </Flex>
                  <Flex justify="flex-end" className="mt-8 text-black gap-1 ">
                    Total amount: <span className="font-bold">3,000 RWF</span>
                  </Flex>
                  <Flex justify="space-between">
                    <Form.Item
                      name="checkbox"
                      valuePropName="checked"
                      rules={[
                        {
                          validator(_, value) {
                            if (value) {
                              return Promise.resolve();
                            }
                            return Promise.reject(
                              new Error('To proceed, you should agree to the terms and conditions'),
                            );
                          },
                        },
                      ]}>
                      <Flex gap={4}>
                        <Checkbox className="text-base text-black">
                          I agree to the{' '}
                          <a className="text-indigo-400 hover:text-indigo-600" href="#">
                            Terms & Conditions
                          </a>
                        </Checkbox>
                      </Flex>
                    </Form.Item>
                    <Flex justify="flex-end" className="gap-x-4 mt-8">
                      <Button
                        type="primary"
                        htmlType="button"
                        onClick={() => router.push('/')}
                        className=" font-semibold bg-gray-200  text-black hover:bg-gray-300">
                        Cancel
                      </Button>
                      <Button
                        type="primary"
                        htmlType="submit"
                        className="font-semibold text-white hover:bg-lime-800"
                        loading={loading}>
                        Confirm Payment
                      </Button>
                    </Flex>
                  </Flex>
                </Flex>
              </Form>
            </Flex>
          </Flex>
          <Flex vertical className=" mt-6 p-4 gap-4 font-sans">
            <Flex vertical className="leading-tight">
              <Typography className="text-gray-700">Company: Volcano</Typography>
              <Typography className="text-gray-700">Phone: +250789405661</Typography>
              <Typography className="text-gray-700">Email: volcano@gmail.com</Typography>
            </Flex>
            <hr className="border-t border-gray-300 w-[65%]" />
            <Flex vertical className="mb-2">
              <Typography variant="subTitle" className="font-bold">
                Travel Details
              </Typography>
            </Flex>
            <Typography className="text-gray-700">Customer: {customerName || 'N/A'}</Typography>
            <Typography className="text-gray-700">Baggage Size: {baggageSize || 'N/A'}</Typography>
            <Typography className="text-gray-700">From: Kigali</Typography>
            <Typography className="text-gray-700">To: Huye</Typography>
            {/* <Flex className="gap-6">
              <Typography className="text-gray-700">Dept Date/Time</Typography>
              <Typography className="text-gray-700">Est Arrival Time</Typography>
            </Flex> */}
            <Typography className="text-gray-700">Ticket Number: TIC345TX</Typography>
            <Typography className="text-gray-700">Ticket Price: 3,000 RWF</Typography>
          </Flex>
        </Flex>

        <Modal
          open={isModalVisible}
          title="Payment Successful"
          centered
          closable={false}
          footer={[
            <Button
              key="home"
              onClick={() => router.push('/')}
              className="font-semibold bg-gray-200 text-black hover:bg-gray-300">
              Home
            </Button>,
            <Button
              key="dashboard"
              onClick={() => router.push('/dashboard')}
              className="font-semibold text-white hover:bg-lime-800">
              Dashboard
            </Button>,
          ]}
          onCancel={() => setIsModalVisible(false)}>
          <Flex justify="center" align="center" className="text-green-500">
            <CheckCircleOutlined style={{ fontSize: 48 }} />
          </Flex>
          <Typography className="text-center text-white">
            Your payment was successfully processed!
          </Typography>
        </Modal>
      </Flex>
    </Fragment>
  );
};

Payment.getLayout = (page: ReactElement) => <AuthLayout>{page}</AuthLayout>;

export default Payment;
