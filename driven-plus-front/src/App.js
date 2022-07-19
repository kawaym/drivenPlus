import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Helmet } from "react-helmet";

import ResetStyle from "./styles/reset";
import Thematizer from "./styles/theme";

import * as Pages from "./pages";
import * as Providers from "./contexts";

function App() {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <ResetStyle />
      <Thematizer>
        <Providers.AuthProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Pages.SignIn />} exact />
            </Routes>
          </BrowserRouter>
        </Providers.AuthProvider>
      </Thematizer>
    </>
  );
}

export default App;
