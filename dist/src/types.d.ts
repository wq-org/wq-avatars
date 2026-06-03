export interface DefaultAvatar {
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
     * Path (relative to web root) to the avatar image.
     */
    src: string;
}
