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

function App() {
  // redux dispatcher
  const dispatch = useDispatch<AppDispatch>();
  const state = useSelector((state) => state);

  // check user auth at first mount
  useEffect(() => {
    dispatch(getCurrentUser());
  }, []);

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "var(  --color-primary-800  )",
          },
        }}
      >
        <Toaster />
        <RouterProvider router={router} />
      </ConfigProvider>
    </>
  );
}

export default App;
