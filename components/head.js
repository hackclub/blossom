import Head from "next/head";

export default function HeadObject({ children }) {
  const title = "Blossom: Atlanta's Day of Service";
  const description =
    "Learn to code, build awesome projects, and share them with one another. March 16th, 2022. Atlanta, GA.";
  const keywords =
    "blossom, hack club blossom, blossom hack club, hack club days of service, hack club days of service blossom, blossom girl scouts, girl scouts coding event, girl scouts hackathon, blossom hackathon, hack club days of service atlanta, days of service atlanta, atlanta georgia girl scouts hackathon, atlanta blossom, georgia days of service";
  const author = "Hack Club";
  const twitter = "@hackclub";
  const url = "http://blossom.hackclub.com";
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      {url ? <meta property="og:url" content={url} /> : ""}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={twitter} />
      <meta name="twitter:creator" content={twitter} />
      {children}
    </Head>
  );
}
