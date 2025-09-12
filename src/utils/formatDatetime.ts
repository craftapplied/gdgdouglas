export function formatIso(date: Date): string {
  return date.toISOString();
}

export type DateFormatStyle = 'long' | 'short' | 'medium';

export function formatDate(
  date: Date,
  style: DateFormatStyle = 'long'
): string {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#locale_options
  const opt: Intl.DateTimeFormatOptions = {};

  if (style === 'short') {
    opt.year = '2-digit';
    opt.month = 'short';
    opt.day = 'numeric';
  } else if (style === 'medium') {
    opt.year = 'numeric';
    opt.month = 'short';
    opt.day = 'numeric';
  } else {
    // long format (default)
    opt.year = '2-digit';
    opt.month = 'long';
    opt.day = '2-digit';
  }

  return date.toLocaleDateString('en-GB', opt);
}

export function formatTime(date: Date, format: '12h' | '24h' = '12h'): string {
  const options: Intl.DateTimeFormatOptions = {
    hour: 'numeric',
    minute: '2-digit',
    hour12: format === '12h',
  };

  return date.toLocaleTimeString('en-GB', options);
}

export function formatTimeRange(start: Date, end: Date): string {
  const startHour = start.getHours();
  const endHour = end.getHours();
  const startMinutes = start.getMinutes();
  const endMinutes = end.getMinutes();
  
  // Determine AM/PM for end time
  const endPeriod = endHour >= 12 ? 'PM' : 'AM';
  
  // Convert to 12-hour format
  const startHour12 = startHour === 0 ? 12 : startHour > 12 ? startHour - 12 : startHour;
  const endHour12 = endHour === 0 ? 12 : endHour > 12 ? endHour - 12 : endHour;
  
  // Check if both times are in the same AM/PM period
  const startPeriod = startHour >= 12 ? 'PM' : 'AM';
  const samePeriod = startPeriod === endPeriod;
  
  // Format start time (without AM/PM if same period)
  let startTime = startHour12.toString();
  if (startMinutes > 0) {
    startTime += `:${startMinutes.toString().padStart(2, '0')}`;
  }
  
  // Format end time (always with AM/PM)
  let endTime = endHour12.toString();
  if (endMinutes > 0) {
    endTime += `:${endMinutes.toString().padStart(2, '0')}`;
  }
  endTime += endPeriod;
  
  return `${startTime}–${endTime}`;
}

export function formatDuration(start: Date, duration: number): string {
  const end = new Date(start.getTime() + duration * 60 * 60 * 1000);

  // For events less than a day, show compact time range
  if (duration < 24) {
    return formatTimeRange(start, end);
  }

  // For multi-day events, show date range
  return `${formatDate(start)} - ${formatDate(end)}`;
}
