import AudioPlayerSection from "@components/AudioPlayerSection";

const Layout = ({ children }) => {
  return (
    <div>
      {children}
      <AudioPlayerSection />
    </div>
  );
};

export default Layout;
