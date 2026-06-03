/**
 * Re-exports `default_avatars.json` as a typed `const` array.
 * `satisfies` ensures the shape matches `DefaultAvatar` while keeping the inferred JSON types.
 */
export declare const defaultAvatars: {
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
