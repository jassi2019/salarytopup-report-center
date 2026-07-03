import { list } from '@vercel/blob';

export default async function handler(req, res) {
  try {
    const { blobs } = await list({ prefix: 'reports/' });
    const reports = blobs
      .map(b => ({
        key: b.pathname.replace('reports/', '').replace('.json', ''),
        url: b.url,
        uploadedAt: b.uploadedAt,
      }))
      .sort((a, b) => (a.key < b.key ? 1 : -1));
    res.json({ reports });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
