import React from 'react';
import { Image as AntdImage } from 'antd';
import { FallbackImage } from '@utils/images';

interface ImageProps {
  src: string;
  alt?: string;
  className?: string;
  width?: number | string;
  height?: number | string;
  preview?: boolean;
  fallback?: string;
}

const Image: React.FC<ImageProps> = ({
  src,
  alt = 'image',
  className = '',
  width = 'auto',
  height = 'auto',
  preview = false,
  fallback = FallbackImage,
  ...rest
}) => {
  return (
    <AntdImage
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      preview={preview}
      fallback={fallback}
      {...rest}
    />
  );
};

export default Image;
