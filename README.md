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
in `iter-1/index.html` `<head>`, scoped to company `biz_xTsOp7KQdiwtbP`. It tracks
page views and fires a `cta_click_network` custom event when a visitor clicks a CTA.
Live data shows at `https://whop.com/dashboard/biz_xTsOp7KQdiwtbP/pixel`.

> ⚠️ **Before running paid traffic:** verify the stat figures in the hero
> (currently round placeholders — 100K+/$1B+/10M+) against current public Whop
> numbers.

### Deploy

Deployed on Vercel with the project root set to `iter-1/`.
