export function fmtIso(date: Date): string {
  return date.toISOString();
}

export type DateFormatStyle = 'long';

export function fmtDate(date: Date, style: DateFormatStyle = 'long'): string {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#locale_options
  const opt: Intl.DateTimeFormatOptions = {};

  switch (style) {
    case 'long':
    default:
      opt.year = '2-digit';
      opt.month = 'long';
      opt.day = '2-digit';
      break;
  }

  return date.toLocaleDateString('en-GB', opt);
}

export function fmtDuration(start: Date, duration: number): string {
  const end = new Date(start.getTime() + duration * 60 * 60 * 1000);

  // if less than a day
  if (duration < 24) {
    const end_time = end.getHours();
    return `${start.getHours()}-${end_time}${end_time >= 12 ? 'PM' : 'AM'}`;
  }

  return fmtDate(end);
}
