import rawDefaultAvatars from "../default_avatars.json" assert { type: "json" };
/**
 * Re-exports `default_avatars.json` as a typed `const` array.
 * `satisfies` ensures the shape matches `DefaultAvatar` while keeping the inferred JSON types.
 */
export const defaultAvatars = rawDefaultAvatars;
