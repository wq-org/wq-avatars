import type { MemojiType } from "./types";
/**
 * Get a single avatar by its stable id (e.g. "avatar_01").
 */
export declare function getAvatar(id: string): MemojiType | undefined;
/**
 * Get all avatars.
 */
export declare function getAllAvatars(): readonly MemojiType[];
/**
 * Get  avatars by country code.
 */
export declare function getAvatarsByCountryCode(countryCode: string): MemojiType[] | [];
/**
 * Convenience helper: list all avatar ids.
 */
export declare function getAllAvatarIds(): readonly string[];
/**
 * Get random avatar.
 */
export declare function getRandomAvatar(): MemojiType;
