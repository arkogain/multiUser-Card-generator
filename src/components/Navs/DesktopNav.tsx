import Link from "next/link";
import UserForm from "../Form/UserForm";
import ModeBtn from "../ThemeMode/ModeBtn";
import { SparklesText } from "../magicui/sparkles-text";

const DesktopNav = () => {
  return (
    <>
      <div className=" bg-background/30 shadow-md dark:shadow-cyan-950 py-3 ">
        <div className="flex justify-between items-center max-w-screen-lg h-[30%] py-3 container mx-auto px-6">
          <Link href="/">
            <div className="text-xl font-bold italic">
              <SparklesText sparklesCount={3} className="text-xl">
                Multi-User-Card
              </SparklesText>
            </div>
          </Link>
          <div className="flex gap-3">
            <UserForm />

            <div className="">
              <ModeBtn />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopNav;
