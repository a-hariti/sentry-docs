import {getCurrentPlatformOrGuide} from 'sdk-docs/src/docTree';
import {serverContext} from 'sdk-docs/src/serverContext';
import {Platform, PlatformGuide} from 'sdk-docs/src/types';

type Props = {
  children?: React.ReactNode;
  noGuides?: boolean;
  platform?: string;
  supported?: string[];
};

const isSupported = (
  platformOrGuide: Platform | PlatformGuide,
  supported: string[]
): boolean => {
  if (platformOrGuide.categories === null) {
    return false;
  }

  // @ts-ignore
  const categories = Object.values(platformOrGuide.categories);

  // @ts-ignore
  return supported.length > 0 && supported.filter(v => categories.includes(v)).length > 0;
};

export function PlatformCategorySection({supported = [], noGuides, children}: Props) {
  const {rootNode, path} = serverContext();
  const currentPlatformOrGuide = getCurrentPlatformOrGuide(rootNode, path);

  if (!currentPlatformOrGuide) {
    return null;
  }

  if (noGuides && currentPlatformOrGuide.type !== 'platform') {
    return null;
  }

  if (isSupported(currentPlatformOrGuide, supported)) {
    return children;
  }

  return null;
}
