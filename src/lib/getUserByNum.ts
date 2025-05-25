import ky from "ky";
import { FetchListTYpe } from "./fetchType";

const getUserByNum = async (num?: number) => {
  const { results } = await ky
    .get("https://randomuser.me/api/", {
      searchParams: {
        noinfo: " ",
        inc: "gender,name,dob,email,picture,id",
        results: num || 3,
      },
    })
    .json<FetchListTYpe>();

  return results;
};

export default getUserByNum;
