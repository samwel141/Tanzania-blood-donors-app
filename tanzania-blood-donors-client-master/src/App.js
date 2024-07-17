import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/layout/Layout.js';
import ClientRoutes from './components/Routes/ClientRoutes';
import { ThemeProvider } from '@mui/material/styles';
import theme from './components/UI/theme';
import { BloodDonationProvider } from './store/ctx.js';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <BloodDonationProvider>
        <Router>
            <ClientRoutes>
              <Layout></Layout>
            </ClientRoutes>
        </Router>
        </BloodDonationProvider>
    </ThemeProvider>
  );
}

export default App;
