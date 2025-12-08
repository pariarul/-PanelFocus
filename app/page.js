import Navbar from "@/components/navbar"
import Homepage from "./home/page"
import AboutPage from "./about/page"
import IndustriesPage from "./industries/page"
import CaseStudiesPage from "./case-studies/page"
import ContactPage from "./contact/page"
import CookieConsent from "@/components/CookieConsent"
import ServicesPage from "./services/page"
const page = () => {
  return (
<>
    <Navbar />
    <main>
     <Homepage />
     <AboutPage />
     <ServicesPage />
     <IndustriesPage />
     <CaseStudiesPage />
     <ContactPage />
    </main>
    <CookieConsent />
</>
  )
}
export default page