import { list } from '@vercel/blob';

export default async function handler(req, res) {
  try {
    const key = String(req.query.key || '').replace(/[^a-zA-Z0-9_\-]/g, '');
    if (!key) return res.status(400).json({ error: 'key required' });
    const { blobs } = await list({ prefix: `reports/${key}.json` });
    if (!blobs.length) return res.status(404).json({ error: 'not found' });
    const r = await fetch(blobs[0].url);
    const data = await r.json();
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
