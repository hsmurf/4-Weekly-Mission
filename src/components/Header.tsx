import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className=" bg-blue-50 z-10">
      <nav className="flex justify-between items-center w-full max-w-[1920px] h-24 px-52 tablat:px-8">
        <Link href={'/'}>
          <Image src="/assets/icons/logo.svg" width={130} height={130} alt="로고" />
        </Link>
        <div className="flex justify-center items-center gap-1.5">
          <Image src={'/assets/icons/kakao.svg'} width={28} height={28} alt="프로필 이미지" />
          <span className=" text-[14px] text-[#373740]">sss</span>
        </div>
      </nav>
    </header>
  );
}
