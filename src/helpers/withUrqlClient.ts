import * as nextUrql from "next-urql";

const withUrqlClient = (Component: any) => {
  return nextUrql.withUrqlClient(
    () => ({ url: "http://localhost:3000/api/graphql" }),
    { ssr: false }
  )(Component);
};

export { withUrqlClient };
