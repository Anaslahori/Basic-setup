import { useEffect, useState } from 'react';

// project import
import Routes from 'routes';
// import ThemeCustomization from 'themes';

import Loader from 'components/Loader';
import Locales from 'components/Locales';
import ThemeCustomization from 'themes';

// import { dispatch } from 'store';
// import { fetchDashboard } from 'store/reducers/menu';

// auth provider
// import { AWSCognitoProvider as AuthProvider } from 'contexts/AWSCognitoContext';
// import { JWTProvider as AuthProvider } from 'contexts/JWTContext';
// import { Auth0Provider as AuthProvider } from 'contexts/Auth0Context';

// ==============================|| APP - THEME, ROUTER, LOCAL  ||============================== //

const App = () => {
  const [loading, setLoading] = useState(false);
  console.log('loading :', loading);
  console.log('setLoading :', setLoading);

  // useEffect(() => {
  //   dispatch(fetchDashboard()).then(() => {
  //     setLoading(true);
  //   });
  // }, []);

  // if (!loading) return <Loader />;
  return (
    <ThemeCustomization>
        <Locales>
              <>
                  <Routes />
              </>
        </Locales>
    </ThemeCustomization>
  );
};

export default App;