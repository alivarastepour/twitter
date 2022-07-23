import Head from "next/head";

import { TPageWrapper } from "./Handlers/TPageWrapper";

const PageWrapper = ({ title, Component, props }: TPageWrapper) => (
  <>
    <Head>
      <title>{title}</title>
    </Head>
    <Component {...props} />
  </>
);

export default PageWrapper;
