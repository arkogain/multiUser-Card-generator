import UserCard from "@/components/Card/UserCard";
import getUserByNum from "@/lib/getUserByNum";

const page = async ({ params }: { params: Promise<{ num: string }> }) => {
  const { num } = await params;
  const datas = await getUserByNum(parseInt(num));

  // console.log(datas);

  return (
    <>
      <div className="grid grid-cols-3 gap-6 place-items-center">
        {datas.map((data) => {
          return <UserCard key={data.dob.date} info={data} />;
        })}
      </div>
    </>
  );
};

export default page;
