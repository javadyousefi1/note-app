import { useEffect, type ReactNode } from "react";
// redux
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
// antd
import { Spin } from "antd";
import { useNavigate } from "react-router-dom";

const ProtectedRouteWrapper: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const navigate = useNavigate();

  const { loggedIn, loading, userData } = useSelector(
    (state: RootState) => state.usersSlice
  );

  // useEffect(() => {
  //   if (!loading && !loggedIn) {
  //     navigate("/");
  //   }
  //   if (!loading && !userData) {
  //     navigate("/");
  //   }
  // }, [loggedIn, loading,userData]);

  if (loading || !userData) {
    return (
      <div className="flex items-center justify-center w-full h-full bg-nigth bg-opacity-40">
        <div className="flex flex-col items-center justify-center gap-y-4">
          <Spin />  
          <h1>cheking auth</h1>
        </div>
      </div>
    );
  }

  return children;
};

export default ProtectedRouteWrapper;
