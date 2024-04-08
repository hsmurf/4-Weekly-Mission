import Image from 'next/image';
import Link from 'next/link';

import { PropsWithChildren } from 'react';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col justify-center items-center bg-[#F0F6FF] h-screen mobile:px-8">
      <Link href={'/'}>
        <Image src={'/assets/icons/logo.svg'} width={200} height={200} alt="로고" />
      </Link>
      {children}
    </div>
  );
}
