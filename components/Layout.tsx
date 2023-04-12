import { ReactNode } from 'react';
import NavBar from './NavBar';

type ComponentProps = {
  children: ReactNode;
};

export default function Layout({ children }: ComponentProps) {
  return (
    <>
      <NavBar />
      <div></div>
    </>
  );
}
