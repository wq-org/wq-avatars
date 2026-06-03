import { memoji_avatars } from "./data";
import { withImageUrl } from "./cdn";
import type { MemojiType, MemojiWithImageUrl } from "./types";

const avatarById: ReadonlyMap<string, MemojiType> = new Map(
  memoji_avatars.map((a: MemojiType) => [a.id, a]),
);

/**
 * Get a single avatar by its stable id (e.g. "avatar_female_french_01").
 */
export function getAvatar(id: string): MemojiType | undefined {
  return avatarById.get(id);
}

/**
 * Get all avatars.
 */
export function getAllAvatars(): readonly MemojiType[] {
  return memoji_avatars;
}

/**
 * One avatar with CDN `imageUrl` attached.
 */
export function getAvatarUrl(
  id: string,
  cdnBase?: string,
): MemojiWithImageUrl | undefined {
  const avatar = getAvatar(id);
  return avatar ? withImageUrl(avatar, cdnBase) : undefined;
}

/**
 * Map avatars to full objects with CDN `imageUrl` attached.
 * Defaults to all avatars when no array is passed.
 */
export function getAvatarUrls(
  avatars: readonly MemojiType[] = memoji_avatars,
  cdnBase?: string,
): MemojiWithImageUrl[] {
  return avatars.map((avatar) => withImageUrl(avatar, cdnBase));
}

/**
 * Get avatars by country code with CDN `imageUrl` attached.
 */
export function getAvatarsByCountryCode(
  countryCode: string,
  cdnBase?: string,
): MemojiWithImageUrl[] {
  return getAvatarUrls(
    memoji_avatars.filter(
      (avatar: MemojiType) => avatar.countryCode === countryCode,
    ),
    cdnBase,
  );
}

/**
 * Convenience helper: list all avatar ids.
 */
export function getAllAvatarIds(): readonly string[] {
  return memoji_avatars.map((a: MemojiType) => a.id);
}

/**
 * Get random avatar.
 */
export function getRandomAvatar(): MemojiType {
  const randomIndex = Math.floor(Math.random() * memoji_avatars.length);

  return memoji_avatars[randomIndex];
}
