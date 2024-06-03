import {getCurrentPlatformOrGuide} from 'sdk-docs/src/docTree';
import {serverContext} from 'sdk-docs/src/serverContext';

import {SmartLink} from './smartLink';

type Props = {
  children: React.ReactNode;
  to?: string;
};

export function PlatformLink({children, to}: Props): React.ReactNode | null {
  if (!to) {
    return children;
  }

  const {rootNode, path} = serverContext();
  const currentPlatformOrGuide = getCurrentPlatformOrGuide(rootNode, path);
  let href: string;
  if (currentPlatformOrGuide) {
    href = currentPlatformOrGuide.url + to.slice(1);
  } else {
    href = `/platform-redirect/?next=${encodeURIComponent(to)}`;
  }
  return <SmartLink href={href}>{children}</SmartLink>;
}
