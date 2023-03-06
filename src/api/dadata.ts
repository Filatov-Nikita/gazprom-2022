import { DOMAIN, DDATA_URL, LOCAL_DDATA_URI } from '@/config/app';
import type { Response } from '@/types/dadata';

export async function show(params: Record<string, unknown>) {
  const url = new URL(LOCAL_DDATA_URI, DOMAIN);
  url.searchParams.append('uri', DDATA_URL);
  url.searchParams.append('params', JSON.stringify(params));

  const options = {
    method: 'GET',
    headers: {
      'Accept': 'application/json'
    },
  }

  const res = await fetch(url.toString(), options);
  const data = await res.json() as Response;

  return data.response;
}
