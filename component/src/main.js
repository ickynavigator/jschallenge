import { UrlProvider } from "./context/Url";
import { PluginProvider } from "./context/Plugin";
import Sidebar from "./root.component";

const Main = () => {
  return (
    <UrlProvider>
      <PluginProvider>
        <Sidebar />
      </PluginProvider>
    </UrlProvider>
  );
};

export default Main;
