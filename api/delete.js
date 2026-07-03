import { list, del } from '@vercel/blob';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'POST only' });
  try {
    const key = String((req.body || {}).key || '').replace(/[^a-zA-Z0-9_\-]/g, '');
    if (!key) return res.status(400).json({ error: 'key required' });
    const { blobs } = await list({ prefix: `reports/${key}.json` });
    for (const b of blobs) await del(b.url);
    res.json({ ok: true });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
