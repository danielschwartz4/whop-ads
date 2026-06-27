# ads

Ad landing pages that drive business owners to start a business on Whop via affiliate link
[`https://whop.com/network/?a=dtrey-5sc`](https://whop.com/network/?a=dtrey-5sc).

## Iterations

| Dir       | Description                          |
| --------- | ------------------------------------ |
| `iter-1/` | Landing page for ecommerce stores (Vite + vanilla, independent affiliate page). |

## iter-1

A static landing page built with [Vite](https://vitejs.dev), targeting
**ecommerce stores** — tagline "Accept payments → run ads". Clean light design.
It showcases Whop's [embedded checkout](https://docs.whop.com/payments/checkout-embed)
and is framed as an **independent affiliate page** (its own "Ecom Stack" identity,
third-person about Whop, clear non-affiliation disclosure) — not Whop's own ad.

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

> ⚠️ **This is an independent affiliate page — it must not impersonate Whop.**
> Keep the non-affiliation disclosure, the third-person framing about Whop, and
> the "Illustrative dashboard" label on the metrics mock.

### Deploy

Deployed on Vercel with the project root set to `iter-1/`.
