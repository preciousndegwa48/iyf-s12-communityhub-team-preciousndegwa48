import Header from ".Header.jsx";
import Footer from "Footer.jsx";
import Sidebar from "Sidebar.jsx";

function Layout({ children, showSidebar = true}) {
  return ( 
    <div className="layout">
    <Header onLogin={() => alert("Login coming in week 9)} />
    <div className="layout-body">
      <main className="main-content">{children}</main>
      {showSidebar && <Sidebar />}                       
    </div>
    <Footer />
  </div>
    );
    }
    export default Layout;
