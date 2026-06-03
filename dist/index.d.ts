/**
 * Re-exports `memoji_avatars.json` as a typed `const` array.
 * `satisfies` ensures the shape matches `MemojiType` while keeping the inferred JSON types.
 */
declare const memoji_avatars: {
    id: string;
    name: string;
    country: string;
    countryCode: string;
    flag: string;
    locale: string;
    slogan: string;
    sloganEn: string;
    avatarIndex: number;
    src: string;
}[];

type MemojiType = {
    /**
     * Stable identifier for programmatic access (e.g. "avatar_01").
     */
    id: string;
    /**
     * Display name (e.g. "Liam").
     */
    name: string;
    /**
     * Country display name for localization/personalization.
     */
    country: string;
    /**
     * ISO-like country code (e.g. "IT", "DE").
     */
    countryCode: string;
    /**
     * Emoji to show as "flag" / persona marker.
     */
    flag: string;
    /**
     * Locale for localized copy (e.g. "it-IT").
     */
    locale: string;
    /**
     * Local-language tagline.
     */
    slogan: string;
    /**
     * English tagline (fallback).
     */
    sloganEn: string;
    /**
     * Stable numeric index for UI ordering.
     */
    avatarIndex: number;
    /**
     * Path (relative to CDN or web root) to the avatar image.
     */
    src: string;
};
type MemojiWithImageUrl = MemojiType & {
    imageUrl: string;
};

/**
 * Default jsDelivr base for raw GitHub assets in wq-org/wq-avatars.
 * Pin to a tag (e.g. `@1.0.0`) in production for cache stability.
 */
declare const JSDELIVR_CDN_BASE = "https://cdn.jsdelivr.net/gh/wq-org/wq-avatars@main";
declare const DEFAULT_CDN_BASE = "https://cdn.jsdelivr.net/gh/wq-org/wq-avatars@main";
/**
 * Resolve an avatar `src` path to a full image URL.
 * Pass a custom base when self-hosting or using a pinned jsDelivr tag.
 */
declare function getAvatarImageUrl(src: string, cdnBase?: string): string;
/**
 * Attach a resolved CDN `imageUrl` to one avatar object.
 */
declare function withImageUrl(avatar: MemojiType, cdnBase?: string): MemojiWithImageUrl;

/**
 * Get a single avatar by its stable id (e.g. "avatar_female_french_01").
 */
declare function getAvatar(id: string): MemojiType | undefined;
/**
 * Get all avatars.
 */
declare function getAllAvatars(): readonly MemojiType[];
/**
 * One avatar with CDN `imageUrl` attached.
 */
declare function getAvatarUrl(id: string, cdnBase?: string): MemojiWithImageUrl | undefined;
/**
 * Map avatars to full objects with CDN `imageUrl` attached.
 * Defaults to all avatars when no array is passed.
 */
declare function getAvatarUrls(avatars?: readonly MemojiType[], cdnBase?: string): MemojiWithImageUrl[];
/**
 * Get avatars by country code with CDN `imageUrl` attached.
 */
declare function getAvatarsByCountryCode(countryCode: string, cdnBase?: string): MemojiWithImageUrl[];
/**
 * Convenience helper: list all avatar ids.
 */
declare function getAllAvatarIds(): readonly string[];
/**
 * Get random avatar.
 */
declare function getRandomAvatar(): MemojiType;

export { DEFAULT_CDN_BASE, JSDELIVR_CDN_BASE, type MemojiType, type MemojiWithImageUrl, getAllAvatarIds, getAllAvatars, getAvatar, getAvatarImageUrl, getAvatarUrl, getAvatarUrls, getAvatarsByCountryCode, getRandomAvatar, memoji_avatars, withImageUrl };
