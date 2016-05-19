
// if (!ReactionCore.Locale) ReactionCore.Locale = {};

// package global getSlug helper
// TODO: import underscore.string where needed

if (Meteor.isClient) {
  getSlug = function (slugString) {
    if (slugString) return TR.slugify(slugString);
  };
} else {
  getSlug = function (slugString) {
    if (slugString) return Transliteration.slugify(slugString);
  };
}