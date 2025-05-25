export type FetchDataType = {
  id: {
       
        value: string
      },
  dob: { date: string; age: number };
  email: string;
  gender: string;
  name: {
    first: string;
    last: string;
    title: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
};

export type FetchListTYpe = {
  results: FetchDataType[];
};
