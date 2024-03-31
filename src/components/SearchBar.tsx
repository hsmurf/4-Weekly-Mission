import Image from 'next/image';

export default function SearchBar() {
  return (
    <div className="flex gap-3 w-full rounded-xl bg-[#f5f5f5] p-4">
      <Image src={'/assets/icons/Search.svg'} width={20} height={20} alt="돋보기 아이콘" />
      <input className="w-full bg-[#f5f5f5] placeholder:text-[#666]" type="text" placeholder="링크를 검색해 보세요." />
    </div>
  );
}
