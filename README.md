# @wq/avatars

Memoji avatar data, PNG assets, and TypeScript helpers for the wq-health platform.

## Structure

| Path | Purpose |
|------|---------|
| `avatars/` | PNG image assets served via jsDelivr |
| `memoji_avatars.json` | Source of truth (id, name, locale, image path) |
| `src/` | Types, helpers, CDN URL utilities |

## Install in wq-health

```bash
npm install @wq/avatars
# or link locally while developing:
npm install ../wq-avatars
```

## Usage in wq-health (picker)

```tsx
import { getAvatarUrls, getAvatarUrl, getAvatarsByCountryCode } from "@wq/avatars";

// All avatars with imageUrl attached (picker grid)
const pickerItems = getAvatarUrls();

pickerItems.map((avatar) => (
  <button key={avatar.id} type="button" onClick={() => select(avatar.id)}>
    <img src={avatar.imageUrl} alt={avatar.name} width={80} height={80} />
    <span>{avatar.name}</span>
  </button>
));

// By country — already includes imageUrl
const germanAvatars = getAvatarsByCountryCode("DE");

// Single avatar with imageUrl
const selected = getAvatarUrl("avatar_female_french_01");
```

### Pin a jsDelivr version in production

```ts
const CDN = "https://cdn.jsdelivr.net/gh/wq-org/wq-avatars@1.0.0";
getAvatarUrls(undefined, CDN);
getAvatarsByCountryCode("DE", CDN);
```

## CDN (no npm install)

After pushing to GitHub, assets are available at:

```
https://cdn.jsdelivr.net/gh/wq-org/wq-avatars@main/memoji_avatars.json
https://cdn.jsdelivr.net/gh/wq-org/wq-avatars@main/avatars/avatar_female_french_01.png
```

Fetch JSON directly if you only need metadata without the JS helpers.

## API

| Export | Description |
|--------|-------------|
| `memoji_avatars` | Typed avatar array |
| `getAllAvatars()` | All avatars |
| `getAvatarUrls(avatars?, cdnBase?)` | Map avatars → full objects with `imageUrl` |
| `getAvatarUrl(id, cdnBase?)` | One avatar with `imageUrl` |
| `getAvatar(id)` | Single avatar metadata (no `imageUrl`) |
| `getAvatarsByCountryCode(code, cdnBase?)` | Filter by country + `imageUrl` |
| `getRandomAvatar()` | Random avatar |
| `withImageUrl(avatar, cdnBase?)` | Attach `imageUrl` to one avatar |
| `getAvatarImageUrl(src, cdnBase?)` | Resolve `/avatars/...` to full CDN URL |
| `JSDELIVR_CDN_BASE` | Default GitHub jsDelivr base |

## Build

```bash
npm install
npm run build
```

Produces bundled `dist/index.js` (ESM), `dist/index.cjs` (CJS), and type declarations. JSON is inlined at build time — no separate runtime JSON fetch required for npm consumers.

## Adding avatars

1. Add PNG to `avatars/`
2. Add entry to `memoji_avatars.json` with matching `src`
3. Bump version, commit, push, tag for jsDelivr pinning
