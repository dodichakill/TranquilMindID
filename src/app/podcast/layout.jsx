import ButtonBackTop from "@components/ButtonBackTop";

const Layout = ({ children }) => {
  return (
    <div>
      {children}
      <ButtonBackTop />
    </div>
  );
};

export default Layout;
