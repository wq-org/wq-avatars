import { memoji_avatars } from "./data";
const avatarById = new Map(memoji_avatars.map((a) => [a.id, a]));
/**
 * Get a single avatar by its stable id (e.g. "avatar_01").
 */
export function getAvatar(id) {
    return avatarById.get(id);
}
/**
 * Get all avatars.
 */
export function getAllAvatars() {
    return memoji_avatars;
}
/**
 * Get  avatars by country code.
 */
export function getAvatarsByCountryCode(countryCode) {
    const avatarsByCountryCode = memoji_avatars.filter((avatar) => avatar.countryCode === countryCode);
    return avatarsByCountryCode;
}
/**
 * Convenience helper: list all avatar ids.
 */
export function getAllAvatarIds() {
    return memoji_avatars.map((a) => a.id);
}
/**
 * Get random avatar.
 */
export function getRandomAvatar() {
    const randomIndex = Math.floor(Math.random() * memoji_avatars.length);
    return memoji_avatars[randomIndex];
}
