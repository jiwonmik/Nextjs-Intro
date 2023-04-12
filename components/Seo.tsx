import Head from 'next/head';

type ComponentProps = {
  title: string;
};

export default function Seo({ title }: ComponentProps) {
  return (
    <Head>
      <title>{title} | Next Movies</title>
    </Head>
  );
}
