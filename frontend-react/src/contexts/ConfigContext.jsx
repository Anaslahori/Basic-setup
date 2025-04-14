import PropTypes from 'prop-types';
import { createContext } from 'react';
import _config from '../config';
// project import
import useLocalStorage from '../hooks/useLocalStorage';

// initial state
const initialState = {
  ..._config,
  onChangeLocalization: () => {},
};

// ==============================|| CONFIG CONTEXT & PROVIDER ||============================== //

const ConfigContext = createContext(initialState);

function ConfigProvider({ children }) {
  const [config, setConfig] = useLocalStorage("mantis-react-js-config", initialState);

  const onChangeLocalization = (lang) => {
    setConfig({
      ...config,
      i18n: lang
    });
  };

  return (
    <ConfigContext.Provider
      value={{
        ...config,
        onChangeLocalization
      }}
    >
      {children}
    </ConfigContext.Provider>
  );
}

ConfigProvider.propTypes = {
  children: PropTypes.node
};

export { ConfigProvider, ConfigContext };
