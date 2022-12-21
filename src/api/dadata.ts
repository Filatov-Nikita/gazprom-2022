import { DOMAIN, DDATA_URL, LOCAL_DDATA_URI } from '@/config/app';
import { Success, Suggest } from '@/types/fias-address';

export const locKeys = [
  'region',
  'region_fias_id',
  'city_fias_id',
  'street_fias_id',
] as const;

export type Location = { [K in typeof locKeys[number]]?: string }

export type Bound = { value: 'region' | 'city' | 'settlement' | 'street' | 'house'  }

interface Params {
  query: string,
  from_bound?: Bound,
  to_bound?: Bound,
  locations?: Array<Location>
  restrict_value: boolean
}


export async function sendQuery(params: Params): Promise<Success['response']> {
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
  const data = await res.json() as Success;

  return data.response;
}
