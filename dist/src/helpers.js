import { defaultAvatars } from "./data";
const avatarById = new Map(defaultAvatars.map((a) => [a.id, a]));
/**
 * Get a single avatar by its stable id (e.g. "avatar_01").
 */
export function getAvatar(id) {
    return avatarById.get(id);
}
/**
 * Get all default avatars.
 */
export function getAllAvatars() {
    return defaultAvatars;
}
/**
 * Convenience helper: list all avatar ids.
 */
export function getAllAvatarIds() {
    return defaultAvatars.map((a) => a.id);
}
