interface Params {
  style?: 'decimal' | 'currency';
  currency?: string;
  minimumFractionDigits?: number;
  maximumFractionDigits?: number;
  showPlusSign?: boolean;
}

const formatNumber = (num?: number, options?: Params): string => {
  if (typeof num !== 'number' || isNaN(num)) {
    return '0';
  }

  if (num === 0) return '0';

  const abbreviations = ['', 'K', 'M', 'B', 'T'];
  const sign = num < 0 ? '-' : options?.showPlusSign ? '+' : '';

  num = Math.abs(num);

  const defaultOptions: Params = {
    style: 'decimal',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 1,
  };

  const mergedOptions = { ...defaultOptions, ...options };

  let abbreviationIndex = 0;
  while (num >= 1000 && abbreviationIndex < abbreviations.length - 1) {
    num /= 1000;
    abbreviationIndex++;
  }

  const formattedNumber = num.toLocaleString(undefined, mergedOptions);
  const abbreviation = abbreviations[abbreviationIndex];

  return `${sign}${formattedNumber}${abbreviation}`;
};

export const formatMoney = (amount?: number) => {
  return amount ? amount?.toLocaleString('Us') : 0;
};

export default formatNumber;
