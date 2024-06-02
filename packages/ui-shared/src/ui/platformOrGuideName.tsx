import {getCurrentPlatformOrGuide} from 'src/docTree';
import {serverContext} from 'src/serverContext';

type PlatformOrGuideNameProps = {
  /**
   * The fallback value to display if the platform or guide name is not found.
   * @default 'Sentry'
   */
  fallback?: string;
};

/**
 * Displays a readable name of the currently selected platform or guide.
 * Example: `Next.js`.
 */
export function PlatformOrGuideName({fallback}: PlatformOrGuideNameProps) {
  const fallbackName = fallback || 'Sentry';
  const {rootNode, path} = serverContext();
  const platformOrGuide = getCurrentPlatformOrGuide(rootNode, path);
  if (!platformOrGuide) {
    return fallbackName;
  }

  return `${platformOrGuide.title || fallbackName} `;
}
