'use client';

/**
 * Converts pixel values to rem, given a base font size (default 16px).
 *
 * @param {number} px - The pixel value to convert.
 * @param {number} [base=16] - The base font size in pixels.
 * @returns {string} The equivalent size in rem units.
 */
export function pxToRem(px: number) {
  return `${px / 16}rem`;
}
