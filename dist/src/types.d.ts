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
     * Path (relative to repo root) to the avatar image.
     */
    image: string;
}
