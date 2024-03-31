import Image from 'next/image';
import Link from 'next/link';

const sns = [
  { id: 1, link: 'https://www.facebook.com/', src: '/assets/icons/facebook.svg', alt: '페이스북으로 이동' },
  { id: 2, link: 'https://twitter.com/', src: '/assets/icons/twitter.svg', alt: '트위터으로 이동' },
  { id: 3, link: 'https://www.youtube.com/', src: '/assets/icons/youtube.svg', alt: '유튜브로 이동' },
  { id: 4, link: 'https://www.instagram.com/', src: '/assets/icons/instagram.svg', alt: '인스타그램으로 이동' },
];

export default function Footer() {
  return (
    <footer className="w-full h-40 pt-8 mt-24 bg-[#111322] mobile:mt-10">
      <div className="flex justify-between w-full max-w-[1920px] h-fit px-28 mobile:grid mobile:grid-cols-2 mobile:gap-y-14 mobile:items-center mobile:px-8">
        <span className="text-[#676767] mobile:col-span-2">©codeit - 2023</span>
        <div className="flex gap-8 text-[#cfcfcf]">
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/faq"> FAQ</Link>
        </div>
        <div className="flex gap-3 mobile:justify-center">
          {sns.map((list) => (
            <Link href={list.link} key={list.id}>
              <Image src={list.src} alt={list.alt} width={20} height={20} />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
