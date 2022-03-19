import Document from "next/document";
//highlight-next-line
import { ServerStyleSheet } from "styled-components";
export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    //highlight-next-line
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =&gt;
        originalRenderPage({
          //highlight-next-line
          enhanceApp: App =&gt; props =&gt; sheet.collectStyles()
        });
      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          &lt;&gt;
            {initialProps.styles}
            //highlight-next-line               
            {sheet.getStyleElement()}
          
        )
      };
    } finally {
      sheet.seal();
    }
  }
}