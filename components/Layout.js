import Nav from "./Nav";

const Layout = ({ children }) => {
  return ( 
    <>
      <Nav />
      <div className="content">
        <div className="content-inner">
          { children }
        </div>      
      </div>
    </>
   );
}
 
export default Layout;