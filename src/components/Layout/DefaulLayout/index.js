import Header from "./Header/Header";
import Footer from "./Footer/Footer";
function DefaultLayout({ children }) {
  return (
    <div className="container">
      <Header />
      <div className="body">
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
