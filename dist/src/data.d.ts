/**
 * Re-exports `memoji_avatars.json` as a typed `const` array.
 * `satisfies` ensures the shape matches `MemojiType` while keeping the inferred JSON types.
 */
export declare const memoji_avatars: {
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
