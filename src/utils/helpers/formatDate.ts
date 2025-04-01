import dayjs, { Dayjs } from 'dayjs';

export const msToTime = (ms: number) => {
  let seconds = Math.floor((ms / 1000) % 60);
  let minutes = Math.floor((ms / (1000 * 60)) % 60);
  let hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
  const days = Math.abs(Math.floor(ms / (1000 * 3600 * 24)));

  hours = hours < 10 ? 0 + hours : hours;
  minutes = minutes < 10 ? 0 + minutes : minutes;
  seconds = seconds < 10 ? 0 + seconds : seconds;

  return { hours, minutes, seconds, days };
};

export const dateFormatterNth = (date: string | Date | Dayjs, format?: string) => {
  return dayjs(date).format(format ?? 'Do MMM YYYY - HH:mm a');
};

export const disablePastDates = (current: Dayjs, disableBeforeDate: Dayjs) => {
  return current && current.isBefore(disableBeforeDate.startOf('day'));
};
export const disableFutureDates = (current: Dayjs, disableAfterDate: Dayjs) => {
  return disableAfterDate && disableAfterDate.isBefore(current.startOf('day'));
};

export const isTimeInPast = (inputTime: string): boolean => {
  const inputDateTime = new Date(inputTime);
  const currentDateTime = new Date();

  return inputDateTime < currentDateTime;
};

export const disabledHours = () => {
  const hours = [];
  const currentHour = dayjs().hour();

  for (let i = currentHour; i >= 0; i--) {
    hours.push(i);
  }

  return hours;
};

export const formatDate = (dateToConvert: Date | string | any) => {
  const now = new Date();
  const date = new Date(dateToConvert);
  const isPast = now > date;

  const diff = now.getTime() - date.getTime();
  const { seconds, minutes, hours, days } = msToTime(diff);

  if (days > 7) {
    return dateFormatterNth(dateToConvert);
  } else if (days) {
    return `${days} ${days <= 1 ? 'day' : 'd'} ${isPast ? 'ago' : ''}`;
  } else if (hours) {
    return `${hours}${hours <= 1 ? 'h' : 'h'} ${isPast ? 'ago' : ''}`;
  } else if (minutes) {
    return `${minutes}${minutes <= 1 ? 'minute' : 'm'} ${isPast ? 'ago' : ''}`;
  } else if (seconds) {
    return `${seconds}${seconds <= 1 ? 'second' : 's'} ${isPast ? 'ago' : ''}`;
  }
};

export const combineDateAndTime = (dateObj: Dayjs, timeObj: Dayjs) => {
  return dateObj.hour(timeObj.hour()).minute(timeObj.minute()).second(timeObj.second());
};

export const calculateDuration = (
  startTime: Date | string | any,
  endTime: Date | string | any,
): string => {
  const start = new Date(startTime);
  const end = new Date(endTime);
  const totalSeconds = Math.abs((end.getTime() - start.getTime()) / 1000);

  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);

  const hoursStr = hours > 0 ? `${hours} hr${hours > 1 ? 's' : ''}` : '';
  const minutesStr = minutes > 0 ? `${minutes} min${minutes > 1 ? 's' : ''}` : '';

  return [hoursStr, minutesStr].filter(Boolean).join(' ').trim();
};

export const minutesToHours = (minutes: number, isDetailed?: boolean) => {
  if (minutes < 60) {
    return `${minutes}${isDetailed ? ' mins' : ''}`;
  }
  const hours = minutes / 60;
  if (Number.isInteger(hours)) {
    return `${hours}${!isDetailed ? 'h' : hours > 1 ? ' hrs' : ' hr'}`;
  }
  return `${hours.toFixed(1)}${!isDetailed ? 'h' : hours > 1 ? ' hrs' : ' hr'}`;
};
export const secondsToHours = (seconds: number, isDetailed: boolean = false): string => {
  if (seconds <= 0) {
    return `0${isDetailed ? ' mins' : 'm'}`;
  }

  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);

  if (hours === 0) {
    return `${minutes}${isDetailed ? ' mins' : 'm'}`;
  }

  if (isDetailed) {
    return `${hours} ${hours === 1 ? 'hr' : 'hrs'}${minutes > 0 ? ` ${minutes} mins` : ''}`;
  }

  if (hours > 0) {
    const totalHours = seconds / 3600;
    return totalHours % 1 === 0 ? `${hours}h` : `${totalHours.toFixed(1)}h`;
  }

  return `${minutes}m`;
};

export const formatChatMessageTimestamp = (timestamp: string | number | Date): string => {
  const now: Date = new Date();
  const messageTime: Date = new Date(timestamp);

  const diffInSeconds: number = Math.floor((now.getTime() - messageTime.getTime()) / 1000);

  if (diffInSeconds < 60) {
    return 'now';
  }

  const diffInMinutes: number = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) {
    return `${diffInMinutes}m`;
  }

  const diffInHours: number = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) {
    return `${diffInHours}h`;
  }

  const diffInDays: number = Math.floor(diffInHours / 24);
  if (diffInDays === 1) {
    return 'yesterday';
  }
  if (diffInDays < 7) {
    return `${diffInDays}d`;
  }

  const diffInWeeks: number = Math.floor(diffInDays / 7);
  if (diffInWeeks < 4) {
    return `${diffInWeeks}w`;
  }

  return messageTime.toLocaleDateString('en-GB');
};
