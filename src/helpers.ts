import { memoji_avatars } from "./data";
import type { MemojiType } from "./types";

const avatarById: ReadonlyMap<string, MemojiType> = new Map(
  memoji_avatars.map((a: MemojiType) => [a.id, a]),
);

/**
 * Get a single avatar by its stable id (e.g. "avatar_01").
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
 * Get  avatars by country code.
 */
export function getAvatarsByCountryCode(
  countryCode: string,
): MemojiType[] | [] {
  const avatarsByCountryCode: MemojiType[] = memoji_avatars.filter(
    (avatar: MemojiType) => avatar.countryCode === countryCode,
  );

  return avatarsByCountryCode;
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
