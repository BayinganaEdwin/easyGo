import { useState } from 'react';
import { Slider, Flex } from 'antd';
import Typography from '../typography';

const PriceSelector = () => {
  const [price, setPrice] = useState<number[]>([3000, 20000]);

  return (
    <Flex vertical gap={16} className="w-full">
      <Flex align="center" className="w-full overflow-x-auto">
        <Slider
          range
          max={15000}
          step={1000}
          value={price}
          onChange={setPrice}
          className="w-[95%]"
          rootClassName="border-primary bg-secondaryBackground rounded-full"
        />
      </Flex>
      <Typography>
        Selected Price:{' '}
        <span className="font-semibold">
          {price[0].toLocaleString()} RWF - {price[1].toLocaleString()} RWF
        </span>
      </Typography>
    </Flex>
  );
};

export default PriceSelector;
