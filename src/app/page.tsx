import UserCard from "@/components/Card/UserCard";
import getUserByNum from "@/lib/getUserByNum";

const page = async () => {
  const datas = await getUserByNum(3);
  console.log(datas);

  return (
    <>
      <div className="grid grid-cols-3 gap-12">
        {datas.map((data) => {
          return <UserCard key={data.dob.date} info={data} />;
        })}
      </div>
    </>
  );
};

export default page;
