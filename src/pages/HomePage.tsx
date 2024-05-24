import ProtectedRouteWrapper from "@/components/shared/ProtectedRouteWrapper";
import { RootState } from "@/store/store";
import { Button } from "antd";
import { useSelector } from "react-redux";

const HomePage = () => {
  const state = useSelector<RootState>((state) => state.usersSlice);
  return (
    <ProtectedRouteWrapper>
      <section className="w-full h-full bg-nigth">
        <div className="flex flex-col items-center justify-center w-full h-full">
          <h1 className="text-4xl font-bold text-center text-white">
            Welcome To my Note app
          </h1>
          <span className="mt-4 font-semibold text-dark">
            Dear {state?.userData?.name}
          </span>
          <Button className="text-white mt-14" type="default">
            Lets go
          </Button>
        </div>
      </section>
    </ProtectedRouteWrapper>
  );
};

export default HomePage;
