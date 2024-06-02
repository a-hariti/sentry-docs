import {Alert, Note} from './ui/alert';
import {Break} from './ui/break';
import {CliChecksumTable} from './ui/cliChecksumTable';
import {CodeBlock} from './ui/codeBlock';
import {CodeTabs} from './ui/codeTabs';
import {ConfigKey} from './ui/configKey';
import {DefinitionList} from './ui/definitionList';
import { default as DocImage } from './ui/docImage';
import {Expandable} from './ui/expandable';
import {GuideGrid} from './ui/guideGrid';
import {JsBundleList} from './ui/jsBundleList';
import {LambdaLayerDetail} from './ui/lambdaLayerDetail';
import {LinkWithPlatformIcon} from './ui/linkWithPlatformIcon';
import {OnboardingOption, OnboardingOptionButtons} from './ui/onboarding';
import {OrgAuthTokenNote} from './ui/orgAuthTokenNote';
import {PageGrid} from './ui/pageGrid';
import {ParamTable} from './ui/paramTable';
import {PiiFields} from './ui/piiFields';
import {PlatformCategorySection} from './ui/platformCategorySection';
import {PlatformGrid} from './ui/platformGrid';
import {PlatformIdentifier} from './ui/platformIdentifier';
import {PlatformLink} from './ui/platformLink';
import {PlatformLinkWithLogo} from './ui/platformLinkWithLogo';
import {PlatformOrGuideName} from './ui/platformOrGuideName';
import {PlatformSdkPackageName} from './ui/platformSdkPackageName';
import {PlatformSection} from './ui/platformSection';
import {RelayMetrics} from './ui/relayMetrics';
import {SandboxLink} from './ui/sandboxLink';
import {SignInNote} from './ui/signInNote';
import {SmartLink} from './ui/smartLink';
import {VimeoEmbed} from './ui/video';
export {
  getCurrentPlatformOrGuide,
  getDocsRootNode,
  nodeForPath,
  extractPlatforms
} from './docTree';
export {getDocsFrontMatter, getFileBySlug} from './mdx';
export { setServerContext } from './serverContext';
export { capitilize } from './utils';
export { apiCategories} from './build/resolveOpenAPI'
export { ApiCategoryPage} from './ui/apiCategoryPage'
export { Home} from './ui/home'
export { Include } from './ui/include'
export { ApiPage } from './ui/apiPage'
export { DocPage } from './ui/docPage'
export { PlatformContent } from './ui/platformContent'
export { Search } from './ui/search'
export { PlatformFilter } from './ui/platformFilter'
export { NavLink, type NavLinkProps } from './ui/navlink'
export { Banner } from './ui/banner'
export { SentryWordmarkLogo } from './ui/wordmarkLogo'


export function mdxComponents(
  dynamicComponents: any = {},
  wrapper: any = ({children}: any) => children
) {
  return {
    Alert,
    Break,
    CliChecksumTable,
    CodeBlock,
    CodeTabs,
    ConfigKey,
    DefinitionList,
    Expandable,
    GuideGrid,
    JsBundleList,
    LambdaLayerDetail,
    Link: SmartLink,
    LinkWithPlatformIcon,
    Note,
    OrgAuthTokenNote,
    PageGrid,
    ParamTable,
    PiiFields,
    PlatformGrid,
    PlatformIdentifier,
    PlatformLink,
    PlatformLinkWithLogo,
    PlatformSection,
    PlatformCategorySection,
    PlatformOrGuideName,
    PlatformSdkPackageName,
    OnboardingOption,
    OnboardingOptionButtons,
    RelayMetrics,
    SandboxLink,
    SignInNote,
    VimeoEmbed,
    a: SmartLink,
    img: DocImage,
    ...dynamicComponents,
    wrapper,
  };
}