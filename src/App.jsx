import "antd/dist/reset.css";
import "./App.scss";
import { Outlet } from "react-router-dom";
import { ConfigProvider } from "antd";

function App() {
  // useEffect(() => {
  //   authService.getUserByToken();
  // }, []);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#3DB389",
          colorLink: "#3DB389",
          fontFamily: "Lexend, sans-serif",
        },
      }}
    >
      <div className="App">
        <Outlet />
      </div>
    </ConfigProvider>
  );
}

export default App;
