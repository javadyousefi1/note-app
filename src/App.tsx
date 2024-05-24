import { useEffect } from "react";
// css
import "./App.css";
// rrd
import { RouterProvider } from "react-router-dom";
// route
import { router } from "./routes/route";

// react hot toast
import { Toaster } from "react-hot-toast";
// redux
import { useDispatch, useSelector } from "react-redux";
// auth function
import { getCurrentUser } from "./features/auth";
// app store type
import { AppDispatch } from "./store/store";
// antd
import { ConfigProvider } from "antd";
import Layout from "./layout/Layout";

function App() {
  // redux dispatcher
  const dispatch = useDispatch<AppDispatch>();
  const state = useSelector((state) => state);

  // check user auth at first mount
  useEffect(() => {
    dispatch(getCurrentUser());
  }, []);

  return (
    <>
      <ConfigProvider
        componentSize="large"
        theme={{
          token: {
            colorPrimary: "var(--color-primary)",
          },
        }}
      >
        <Toaster />
        <Layout>
          <RouterProvider router={router} />
        </Layout>
      </ConfigProvider>
    </>
  );
}

export default App;
