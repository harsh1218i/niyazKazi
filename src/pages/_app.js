import "@/styles/globals.css";
import "../pages/components/header.scss"
import "../pages/components/footer.scss"
import "../pages/components/component.scss"
import "../pages/components/repeat-component.scss"
import "../pages/components/enquiry.scss"

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
