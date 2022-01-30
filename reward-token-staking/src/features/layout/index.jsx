import Head from "next/head";
import Container from "@/ui/container";
import Header from "./header";
import Footer from "./footer";

export default function Layout({ children }) {
  const fonts = ["/fonts/lato-v20-latin-regular.woff2", "/fonts/sequel.woff"];
  return (
    <>
      <Head>
        {fonts.map((href) => (
          <link key={href} rel="preload" href={href} as="font" crossOrigin="" />
        ))}
      </Head>
      <Header />
      <div className="mt-40">
        <Container>
          <div className="flex items-center justify-center">{children}</div>
        </Container>
      </div>

      <hr className="border border-b border-pink-500 w-3/4 mx-auto my-24 " />

      <Footer />
    </>
  );
}
