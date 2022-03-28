import Head from "next/head";
const PageWrapper = ({ title, Component }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Component />
    </>
  );
};

export default PageWrapper;
