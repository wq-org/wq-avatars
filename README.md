# wq-avatars

Small TypeScript helpers for working with the project’s default avatar set.

## Structure

- `avatars/` contains the image assets.
- `memoji_avatars.json` is the typed source of truth (id, name, image path).
- `src/` provides type definitions and helpers:
  - `src/types.ts` (`MemojiType`)
  - `src/data.ts` re-exports `memoji_avatars.json` as a typed `const`
  - `src/helpers.ts` (`getAvatar()`, `getAllAvatars()`, ...)
  - `src/index.ts` barrel export

## Usage

```ts
import { getAvatar, getAllAvatars, memoji_avatars, type MemojiType } from "wq-avatars";

const liam = getAvatar("avatar_01");
const all = getAllAvatars();
```

