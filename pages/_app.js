import Header from "../components/Header";
import Footer from "../components/Footer";
import { ThemeProvider } from "../contexts/ThemeContext";
import "../styles/globals.css";
import "highlight.js/styles/atom-one-dark.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen">
        <div className="" style={{ flex: "1 0 auto" }}>
          <Header />
          <main className="container max-w-max mx-auto px-2">
            <Component {...pageProps} />
          </main>
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
