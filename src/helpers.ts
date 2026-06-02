import { defaultAvatars } from "./data";
import type { DefaultAvatar } from "./types";

const avatarById: ReadonlyMap<string, DefaultAvatar> = new Map(
  defaultAvatars.map((a) => [a.id, a])
);

/**
 * Get a single avatar by its stable id (e.g. "avatar_01").
 */
export function getAvatar(id: string): DefaultAvatar | undefined {
  return avatarById.get(id);
}

/**
 * Get all default avatars.
 */
export function getAllAvatars(): readonly DefaultAvatar[] {
  return defaultAvatars;
}

/**
 * Convenience helper: list all avatar ids.
 */
export function getAllAvatarIds(): readonly string[] {
  return defaultAvatars.map((a) => a.id);
}

