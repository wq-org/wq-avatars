import rawDefaultAvatars from "../default_avatars.json" with { type: "json" };
import type { DefaultAvatar } from "./types";

/**
 * Re-exports `default_avatars.json` as a typed `const` array.
 * `satisfies` ensures the shape matches `DefaultAvatar` while keeping the inferred JSON types.
 */
export const defaultAvatars = rawDefaultAvatars satisfies readonly DefaultAvatar[];

