import Head from 'next/head';

type ComponentProps = {
  title: string;
};

export default function Seo({ title }: ComponentProps) {
  const message = `${title} | Next Movies`;
  return (
    <Head>
      <title>{message}</title>
    </Head>
  );
}
