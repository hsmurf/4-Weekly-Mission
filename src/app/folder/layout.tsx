import { PropsWithChildren } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
