'use client';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getSampleUser, getUser } from '@/services/api';

interface User {
  email: string;
  profileImageSource: string;
  image_source: string;
}

export default function Header() {
  const pathname = usePathname();
  const isSharedPath = pathname === '/shared';

  const [user, setUser] = useState<User | null>(null);
  const [profileImage, setProfileImage] = useState<string>('');

  useEffect(() => {
    const userData = isSharedPath
      ? getSampleUser().then((data) => setUser(data))
      : getUser().then((data) => setUser(data));
  }, [isSharedPath]);

  useEffect(() => {
    if (user) {
      const imageSource = user.profileImageSource || user.image_source;
      setProfileImage(imageSource);
    }
  }, [user]);
  return (
    <header className=" bg-blue-50 z-10">
      <nav className="flex justify-between items-center w-full max-w-[1920px] h-24 px-52 tablet:px-8">
        <Link href={'/'}>
          <Image src="/assets/icons/logo.svg" width={130} height={130} alt="로고" />
        </Link>
        {user ? (
          <div className="flex justify-center items-center gap-1.5">
            <Image className="rounded-full" src={profileImage} width={28} height={28} alt="프로필 이미지" />
            <span className=" text-[14px] text-[#373740]">{user.email}</span>
          </div>
        ) : (
          <Link href={'/signin'} className="btn w-[128px]">
            로그인
          </Link>
        )}
      </nav>
    </header>
  );
}
