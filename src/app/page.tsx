import Link from 'next/link';

export default function Home() {
  return (
    <div className="grid grid-cols-2 justify-items-center items-center h-screen">
      <Link href={'/shared'} className="btn w-[128px]">
        공유 페이지
      </Link>
      <Link href={'/folder'} className="btn w-[128px]">
        폴더 페이지
      </Link>
    </div>
  );
}
