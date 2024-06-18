import AddNewList from "@/components/home/AddNewList";
import ProtectedRouteWrapper from "@/components/shared/ProtectedRouteWrapper";
import { RootState } from "@/store/store";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Button, Drawer } from "antd";
import { useState } from "react";
import { useSelector } from "react-redux";

const HomePage = () => {
  // const state = useSelector<RootState>((state) => state.usersSlice);
  const [selectedIcon, setSelectedIcon] = useState<string>("");
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  null;
  const handleSelectedIcon = (iconName: string) => setSelectedIcon(iconName);

  return (
    // <ProtectedRouteWrapper>
    <section className="w-full h-full bg-primary">
      <div className="flex flex-col items-center justify-center w-full h-full">
        {/* footer */}
        <footer className="fixed bottom-0 left-0 right-0 w-full">
          <div className="flex justify-between p-5">
            <Button className="text-space">Add Reminder</Button>
            <Button
              icon={<PlusCircleOutlined />}
              className="text-space"
              onClick={showDrawer}
            >
              Add List
            </Button>
          </div>
        </footer>
      </div>

      <Drawer
        // title="Drawer with extra actions"
        placement={"bottom"}
        width={500}
        height={"95vh"}
        style={{ backgroundColor: "var(--color-space)" }}
        onClose={onClose}
        closable={false}
        open={open}
        className="shadow-lg"
        headerStyle={{}}
        // extra={
        //   <Space>
        //     <Button onClick={onClose}>Cancel</Button>
        //     <Button type="primary" onClick={onClose}>
        //       OK
        //     </Button>
        //   </Space>
        // }
      >
        <AddNewList
          handleSelectedIcon={handleSelectedIcon}
          selectedIcon={selectedIcon}
        />
      </Drawer>
    </section>
    // </ProtectedRouteWrapper>
  );
};

export default HomePage;
