// import { Provider as ReduxStoreProvider } from 'react-redux';
// import CssBaseline from '@mui/material/CssBaseline';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import { Shell } from '@client/modules/shell/components/shell';
import { useThemeStore } from '@client/modules/shell/store/theme';
import './index.css';

// import trpc from './trpc';
// import { CodeFile } from '@shared/types';

// import ThemeContainer from './themeContainer';
// import ShellRoot from '../modules/shell/components/shellRoot';

// import store from '../store/store';

// const queryClient = new QueryClient();

const App = () => {
  const theme = useThemeStore(state => state.theme);

  return (
    <Theme appearance={theme} accentColor="indigo">
      <Shell />
    </Theme>
  );
};

export default App;
