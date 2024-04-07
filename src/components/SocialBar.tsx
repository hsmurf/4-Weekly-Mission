'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { PropsWithChildren } from 'react';

export default function SocialBar({ children }: PropsWithChildren) {
  const router = useRouter();
  return (
    <div className="flex justify-between items-center py-3 px-6 w-full border border-solid border-[#CCD5E3] rounded-lg bg-[#e7effb]">
      <div className="text-[#373740] text-sm">{children}</div>
      <div className="flex justify-center items-center gap-4 ">
        <button className="bg-white p-3 rounded-full" onClick={() => router.push('https://www.google.com')}>
          <Image src={'/assets/icons/google.svg'} width={22} height={22} alt="구글 아이콘" />
        </button>
        <button className="bg-[#f5e14b] p-3 rounded-full" onClick={() => router.push('https://www.kakaocorp.com/page')}>
          <Image src={'/assets/icons/Kakao.svg'} width={22} height={22} alt="카카오톡 아이콘" />
        </button>
      </div>
    </div>
  );
}
