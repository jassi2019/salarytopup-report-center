import { put } from '@vercel/blob';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'POST only' });
  try {
    const { key, payload } = req.body || {};
    if (!key || !payload) return res.status(400).json({ error: 'key & payload required' });
    const safe = String(key).replace(/[^a-zA-Z0-9_\-]/g, '');
    const blob = await put(`reports/${safe}.json`, JSON.stringify(payload), {
      access: 'public',
      addRandomSuffix: false,
      allowOverwrite: true,
      contentType: 'application/json'
    });
    res.json({ ok: true, url: blob.url });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
