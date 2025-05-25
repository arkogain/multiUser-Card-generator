import { FetchDataType } from "@/lib/fetchType";
import Image from "next/image";
import { NeonGradientCard } from "../magicui/neon-gradient-card";

type FetchPropsDataType = {
  info: FetchDataType;
};

const UserCard = ({ info }: FetchPropsDataType) => {
  return (
    <>
      <NeonGradientCard className="w-[350px]">
        <div className="bg-transparent w-[350px]  rounded-xl py-6">
          <div className="flex justify-center mb-8">
            <Image
              className="rounded-full"
              alt="#"
              src={info.picture.large}
              width={100}
              height={100}
            />
          </div>
          <div className="grid gap-3">
            <div className="flex gap-2">
              <span className="font-bold">Name: </span>
              <span>{info.name.first}</span>
              <span>{info.name.last}</span>
            </div>
            <div className="flex gap-2">
              <span className="font-bold">Age: </span>
              <span>{info.dob.age}</span>
            </div>
            <div className="flex gap-2">
              <span className="font-bold">Gender: </span>
              <span>{info.gender}</span>
            </div>
            <div className="flex gap-2">
              <span className="font-bold">Email: </span>
              <span>{info.email}</span>
            </div>
          </div>
        </div>
      </NeonGradientCard>
    </>
  );
};

export default UserCard;
