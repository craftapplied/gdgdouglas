export function craftMailto(
  address: `${string}@${string}.${string}`,
  subject: string | null = null,
  body: string | null = null
) {
  const query = new URLSearchParams({
    subject: subject ? encodeURIComponent(subject) : '',
    body: body ? encodeURIComponent(body) : '',
  });
  return `mailto:${address}?${query.toString()}`;
}

export function craftSearchParams(params: Record<string, unknown>) {
  const query: Record<string, string> = {};
  for (const param in params) {
    if (!Object.prototype.hasOwnProperty.call(params, param)) {
      continue;
    }
    const value = params[param];
    if (['number', 'string', 'boolean'].includes(typeof value)) {
      // @ts-ignore already did type-check
      query[param] = encodeURIComponent(value);
      continue;
    }
    if (Array.isArray(value)) {
      query[param] = value.join(',');
      continue;
    }
    if (typeof value === 'object') {
      query[param] = encodeURIComponent(JSON.stringify(value));
      continue;
    }
  }
  return new URLSearchParams(query);
}
