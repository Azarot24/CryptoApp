import { fetchCryptoDetail } from '../api/cryptoApi';
import { Crypto } from './Crypto';

test('create Crypto instance and format price', () => {
  const data = { id: '1', name: 'Bitcoin', symbol: 'BTC', price_usd: '50000' };
  const crypto = new Crypto(data);

  expect(crypto.getFormattedPrice()).toBe('$50000.00');
});

test('get bitcoin', async () => {
  const data = await fetchCryptoDetail('80');
  const crypto = new Crypto(data);

  expect(crypto.name).toBe('Bitcoin');
});