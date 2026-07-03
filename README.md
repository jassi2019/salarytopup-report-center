# SalaryTopup — Campaign Report Center (Vercel)

DPR / MTD / CPD report tool with server-side saving (previous dates ka data bhi save rehta hai).

## Deploy Steps (5 minute)

1. **GitHub pe repo banao** aur ye saari files upload kar do
   (ya Vercel CLI: `npm i -g vercel` phir folder me `vercel`)

2. **vercel.com** → Add New → Project → apna repo import karo → Deploy

3. **Storage connect karo (IMPORTANT):**
   - Vercel dashboard → apna project → **Storage** tab
   - **Create Database** → **Blob** select karo → Create
   - Project se connect karo (env var `BLOB_READ_WRITE_TOKEN` auto add hoga)

4. **Redeploy** karo (Deployments → ⋯ → Redeploy)

5. Apna URL kholo — done! 🎉

## Kaise chalega

- Files upload karo → report banao → **☁️ Save Report to Server** dabao
- Key banti hai: `DPR_2026-07-03`, `MTD_2026-07`, `CPD_2026-07`
- **Saved Reports** section me previous dates ke saare reports dikhenge
- **📈 Trend** button — day-wise Landed / Disbursed / Spend / CPD comparison
- Same date pe dubara save karoge to overwrite hoga (latest version rahega)

## Kya save hota hai

- Report summary (channel funnel, costs, CPD, CRM counts) — Vercel Blob me
- Raw customer files (CRM/SMS etc.) server pe save NAHI hoti — sirf browser me process hoti hai (privacy ✅)

## Files

- `index.html` — pura app
- `api/save.js` — report save
- `api/list.js` — saved reports ki list
- `api/get.js` — ek report load
- `api/delete.js` — report delete (future use)
