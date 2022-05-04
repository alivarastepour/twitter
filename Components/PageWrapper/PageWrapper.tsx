import Head from "next/head";
const PageWrapper = ({ title, Component, props }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Component {...props}/>
    </>
  );
};

export default PageWrapper;
