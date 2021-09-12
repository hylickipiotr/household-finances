import { IdProvider } from "@radix-ui/react-id";
import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <IdProvider>
            <Main />
          </IdProvider>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
