import tw from "tailwind-styled-components";

const Layout = tw.div`
  flex
  flex-col
  h-screen
  overflow-hidden
`;

const LayoutMain = tw.main`
  flex-1
  h-full
  px-6
  py-8
  overflow-y-auto
`;

const LayoutWrapper = tw.div`
  flex-1
  flex
  overflow-hidden
`;

export { Layout, LayoutMain, LayoutWrapper };
