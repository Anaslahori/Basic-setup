import PropTypes from 'prop-types';

// project import
import Default from './default';
import Theme5 from './theme5';

// ==============================|| PRESET THEME - THEME SELECTOR ||============================== //

const Theme = (colors, presetColor, mode) => {
  switch (presetColor) {
    case 'theme5':
      return Theme5(colors, mode);
    default:
      return Default(colors);
  }
};

Theme.propTypes = {
  colors: PropTypes.object,
  presetColor: PropTypes.any
};

export default Theme;
