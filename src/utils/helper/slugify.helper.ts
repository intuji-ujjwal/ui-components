/**
 * Converts a given string into a URL-friendly slug.
 * @param {string} text - The input string to be slugified.
 * @returns {string} The slugified version of the input string.
 *
 * @example
 * slugify("This is a test.");
 * Returns "this-is-a-test"
 */
export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w-]+/g, '') // Remove all non-word characters
    .replace(/--+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, ''); // Trim - from end of text
}
