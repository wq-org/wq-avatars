import rawmemoji_avatars from "../memoji_avatars.json" with { type: "json" };
import type { MemojiType } from "./types";

/**
 * Re-exports `memoji_avatars.json` as a typed `const` array.
 * `satisfies` ensures the shape matches `MemojiType` while keeping the inferred JSON types.
 */
export const memoji_avatars = rawmemoji_avatars satisfies readonly MemojiType[];

