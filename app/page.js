import Navbar from "@/components/navbar"
import Homepage from "./home/page"
import AboutPage from "./about/page"
import IndustriesPage from "./industries/page"
import CaseStudiesPage from "./case-studies/page"
import ContactPage from "./contact/page"
import CookieConsent from "@/components/CookieConsent"
import ServicesPage from "./services/page"
import Certifications from "@/components/Certifications"
import PanelBookDownload from "@/components/PanelBookDownload"
import CTASection from "@/components/CTASection"
const page = () => {
  return (
<>
   
    <main>
     <Homepage />
     <AboutPage />
     <ServicesPage />
     <IndustriesPage />
     <CaseStudiesPage />
     <ContactPage />
     <Certifications />
     <PanelBookDownload />
     <CTASection />
    </main>
    
</>
  )
}
export default page