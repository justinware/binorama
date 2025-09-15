// import { Provider as ReduxStoreProvider } from 'react-redux';
// import CssBaseline from '@mui/material/CssBaseline';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { Shell } from '@client/modules/shell/components/shell';
import './index.css';
// import './fonts';
import { Result } from 'neverthrow';
import { useEffect } from 'react';

// import trpc from './trpc';
// import { CodeFile } from '@shared/types';

// import ThemeContainer from './themeContainer';
// import ShellRoot from '../modules/shell/components/shellRoot';

// import store from '../store/store';

// const queryClient = new QueryClient();

const App = () => {

  // const getFile = async () => {
  //   const result = await trpc.getCodeModelByPath.query('src/server/index.ts');

  //   console.log(result);
  // }

  // useEffect(() => {
  //   getFile();
  // }, []);

  return (
    <Shell />
  );
};

export default App;
