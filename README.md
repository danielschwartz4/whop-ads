# ads

Ad landing pages that drive business owners to start a business on Whop via affiliate link
[`https://whop.com/network/?a=dtrey-5sc`](https://whop.com/network/?a=dtrey-5sc).

## Iterations

| Dir       | Description                          |
| --------- | ------------------------------------ |
| `iter-1/` | First landing page (Vite + vanilla). |

## iter-1

A static landing page built with [Vite](https://vitejs.dev).

```bash
cd iter-1
npm install
npm run dev      # local dev server
npm run build    # production build -> dist/
npm run preview  # preview the production build
```

### Whop pixel

The [Whop pixel](https://docs.whop.com/developer/guides/pixel) is installed inline
in `iter-1/index.html` `<head>`. It tracks page views and fires a `cta_click_network`
custom event when a visitor clicks a CTA.

> ⚠️ **Before running paid traffic:** replace `biz_xxxxxxxxxxxxx` in
> `iter-1/index.html` with your real Whop company ID (found at
> `https://whop.com/dashboard/{biz_id}/pixel`), and verify the stat figures in the
> hero (currently round placeholders) against current public Whop numbers.

### Deploy

Deployed on Vercel with the project root set to `iter-1/`.
