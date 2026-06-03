import type { MemojiType, MemojiWithImageUrl } from "./types";

/**
 * Default jsDelivr base for raw GitHub assets in wq-org/wq-avatars.
 * Pin to a tag (e.g. `@1.0.0`) in production for cache stability.
 */
export const JSDELIVR_CDN_BASE =
  "https://cdn.jsdelivr.net/gh/wq-org/wq-avatars@main";

export const DEFAULT_CDN_BASE = JSDELIVR_CDN_BASE;

/**
 * Resolve an avatar `src` path to a full image URL.
 * Pass a custom base when self-hosting or using a pinned jsDelivr tag.
 */
export function getAvatarImageUrl(
  src: string,
  cdnBase: string = DEFAULT_CDN_BASE,
): string {
  if (src.startsWith("http://") || src.startsWith("https://")) {
    return src;
  }

  const normalizedBase = cdnBase.replace(/\/$/, "");
  const normalizedSrc = src.startsWith("/") ? src : `/${src}`;

  return `${normalizedBase}${normalizedSrc}`;
}

/**
 * Attach a resolved CDN `imageUrl` to one avatar object.
 */
export function withImageUrl(
  avatar: MemojiType,
  cdnBase?: string,
): MemojiWithImageUrl {
  return {
    ...avatar,
    imageUrl: getAvatarImageUrl(avatar.src, cdnBase),
  };
}
