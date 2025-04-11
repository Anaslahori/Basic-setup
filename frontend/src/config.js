export const LAYOUT_CONST = {
  VERTICAL_LAYOUT: 'vertical',
  HORIZONTAL_LAYOUT: 'horizontal'
};

export const COLOR_MODE = {
  LIGHT: 'light',
  DARK: 'dark'
};

export const HORIZONTAL_MAX_ITEM = 6;
export const DRAWER_WIDTH = 289;
export const MOBILE_DRAWER_WIDTH = 232;

// ==============================|| THEME CONFIG  ||============================== //

const config = {
  /**
   * The props used for display menu-items with multi-language.
   * We provide static below languages according to 'react-intl' options - https://www.npmjs.com/package/react-intl
   * 'en' (default)
   * 'fr'
   * 'ro'
   * 'zh'
   */
  i18n: 'en',

  /**
   * the props used for menu orientation (diffrent theme layout).
   * we provide static below options -
   * 'vertical' (default)
   * 'horizontal'
   */
  menuOrientation: LAYOUT_CONST.VERTICAL_LAYOUT,

  /**
   * the props used for show mini variant drawer
   * the mini variant is recommended for apps sections that need quick selection access alongside content.
   * default - false
   */
  miniDrawer: false,

  /**
   * the props used for theme container.
   * the container centers your content horizontally. It's the most basic layout element.
   * default - true which show container
   * false - will show fluid
   */
  container: true,

  /**
   * the props used for default theme palette mode
   * explore the default theme
   * below theme options -
   * 'light' (default)
   * 'dark'
   */
  mode: COLOR_MODE.LIGHT
};

export default config;
