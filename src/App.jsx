// Components
import Footer from "./public_area/components/footer/footer.component"
import Header from "./public_area/components/header/header.component"
// React Router
import { Route, Routes } from 'react-router-dom';
import PricingPage from "./public_area/pages/pricing/pricing.page";
import HomePage from "./public_area/pages/home/home.page";
import FeaturesPage from "./public_area/pages/features/features.page";
import ContactPage from "./public_area/pages/contact/contact.page";
import SignInPage from "./public_area/pages/sign_in/sign_in.page";
import SignUpPage from "./public_area/pages/sign_up/sign_up.page";
import TermsOfUsePage from "./public_area/pages/terms_of_use/terms_of_use.page";
import PrivacyPolicyPage from "./public_area/pages/privacy_policy/privacy_policy.page";
import Dashboard from "./public_area/pages/dashboard/dashboard.page";

function App() {
  return (
    <>
      {/* Public Area */}
      <div>
        {/* header */}
        {/*<Header />*/}

        {/* body */}
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/features" exact element={<FeaturesPage />} />
          <Route path="/pricing" exact element={<PricingPage />} />
          <Route path="/contact" exact element={<ContactPage />} />
          <Route path="/sign_in" exact element={<SignInPage />} />
          <Route path="/sign_up" exact element={<SignUpPage />} />
          <Route path="/terms_of_use" exact element={<TermsOfUsePage />} />
          <Route path="/privacy_policy" exact element={<PrivacyPolicyPage />} />
          <Route path="/dashboard" exact element={<Dashboard/>}/>
        </Routes>

        {/* footer */}
        {/*<Footer />*/}
      </div>
    </>
  )
}

export default App
