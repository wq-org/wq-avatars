import type { DefaultAvatar } from "./types";
/**
 * Get a single avatar by its stable id (e.g. "avatar_01").
 */
export declare function getAvatar(id: string): DefaultAvatar | undefined;
/**
 * Get all default avatars.
 */
export declare function getAllAvatars(): readonly DefaultAvatar[];
/**
 * Convenience helper: list all avatar ids.
 */
export declare function getAllAvatarIds(): readonly string[];
