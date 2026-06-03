"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  DEFAULT_CDN_BASE: () => DEFAULT_CDN_BASE,
  JSDELIVR_CDN_BASE: () => JSDELIVR_CDN_BASE,
  getAllAvatarIds: () => getAllAvatarIds,
  getAllAvatars: () => getAllAvatars,
  getAvatar: () => getAvatar,
  getAvatarImageUrl: () => getAvatarImageUrl,
  getAvatarUrl: () => getAvatarUrl,
  getAvatarUrls: () => getAvatarUrls,
  getAvatarsByCountryCode: () => getAvatarsByCountryCode,
  getRandomAvatar: () => getRandomAvatar,
  memoji_avatars: () => memoji_avatars,
  withImageUrl: () => withImageUrl
});
module.exports = __toCommonJS(index_exports);

// memoji_avatars.json
var memoji_avatars_default = [
  {
    id: "avatar_default_granny_teacher_01",
    name: "Female Granny Teacher",
    country: "Globe",
    countryCode: "globe",
    flag: "\u{1F30E}",
    locale: "default",
    slogan: "Serious Games are fun",
    sloganEn: "Serious Games are fun",
    avatarIndex: 0,
    src: "/avatars/avatar_default_granny_teacher_01.png"
  },
  {
    id: "avatar_female_french_01",
    name: "Sophie",
    country: "France",
    countryCode: "FR",
    flag: "\u{1F1EB}\u{1F1F7}",
    locale: "fr-FR",
    slogan: "Pr\xEAte \xE0 apprendre!",
    sloganEn: "Ready to learn!",
    avatarIndex: 1,
    src: "/avatars/avatar_female_french_01.png"
  },
  {
    id: "avatar_female_turkey",
    name: "Ay\u015Fe",
    country: "Turkey",
    countryCode: "TR",
    flag: "\u{1F1F9}\u{1F1F7}",
    locale: "tr-TR",
    slogan: "\xD6\u011Frenmeye haz\u0131r!",
    sloganEn: "Ready to learn!",
    avatarIndex: 2,
    src: "/avatars/avatar_female_turkey.png"
  },
  {
    id: "avatar_male_german_01",
    name: "Lukas",
    country: "Germany",
    countryCode: "DE",
    flag: "\u{1F1E9}\u{1F1EA}",
    locale: "de-DE",
    slogan: "Bereit f\xFCr Abenteuer!",
    sloganEn: "Ready for adventure!",
    avatarIndex: 3,
    src: "/avatars/avatar_male_german_01.png"
  },
  {
    id: "avatar_male_Igptq_01",
    name: "James",
    country: "Unknown",
    countryCode: "XX",
    flag: "\u{1F3F3}\uFE0F\u200D\u{1F308}",
    locale: "en-US",
    slogan: "Ready to learn!",
    sloganEn: "Ready to learn!",
    avatarIndex: 4,
    src: "/avatars/avatar_male_Igptq_01.png"
  },
  {
    id: "avatar_female_Igptq_01",
    name: "Jordan",
    country: "Unknown",
    countryCode: "XX",
    flag: "\u{1F3F3}\uFE0F\u200D\u{1F308}",
    locale: "en-US",
    slogan: "Ready to learn!",
    sloganEn: "Ready to learn!",
    avatarIndex: 5,
    src: "/avatars/avatar_female_Igptq_01.png"
  }
];

// src/data.ts
var memoji_avatars = memoji_avatars_default;

// src/cdn.ts
var JSDELIVR_CDN_BASE = "https://cdn.jsdelivr.net/gh/wq-org/wq-avatars@main";
var DEFAULT_CDN_BASE = JSDELIVR_CDN_BASE;
function getAvatarImageUrl(src, cdnBase = DEFAULT_CDN_BASE) {
  if (src.startsWith("http://") || src.startsWith("https://")) {
    return src;
  }
  const normalizedBase = cdnBase.replace(/\/$/, "");
  const normalizedSrc = src.startsWith("/") ? src : `/${src}`;
  return `${normalizedBase}${normalizedSrc}`;
}
function withImageUrl(avatar, cdnBase) {
  return {
    ...avatar,
    imageUrl: getAvatarImageUrl(avatar.src, cdnBase)
  };
}

// src/helpers.ts
var avatarById = new Map(
  memoji_avatars.map((a) => [a.id, a])
);
function getAvatar(id) {
  return avatarById.get(id);
}
function getAllAvatars() {
  return memoji_avatars;
}
function getAvatarUrl(id, cdnBase) {
  const avatar = getAvatar(id);
  return avatar ? withImageUrl(avatar, cdnBase) : void 0;
}
function getAvatarUrls(avatars = memoji_avatars, cdnBase) {
  return avatars.map((avatar) => withImageUrl(avatar, cdnBase));
}
function getAvatarsByCountryCode(countryCode, cdnBase) {
  return getAvatarUrls(
    memoji_avatars.filter(
      (avatar) => avatar.countryCode === countryCode
    ),
    cdnBase
  );
}
function getAllAvatarIds() {
  return memoji_avatars.map((a) => a.id);
}
function getRandomAvatar() {
  const randomIndex = Math.floor(Math.random() * memoji_avatars.length);
  return memoji_avatars[randomIndex];
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DEFAULT_CDN_BASE,
  JSDELIVR_CDN_BASE,
  getAllAvatarIds,
  getAllAvatars,
  getAvatar,
  getAvatarImageUrl,
  getAvatarUrl,
  getAvatarUrls,
  getAvatarsByCountryCode,
  getRandomAvatar,
  memoji_avatars,
  withImageUrl
});
