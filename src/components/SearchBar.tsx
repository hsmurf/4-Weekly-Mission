import Image from 'next/image';
import { ChangeEvent, Dispatch } from 'react';

interface SearchBarProps {
  searchValue: string;
  setSearchValue: Dispatch<string>;
}

export default function SearchBar({ searchValue, setSearchValue }: SearchBarProps) {
  return (
    <div className="flex gap-3 w-full rounded-xl bg-[#f5f5f5] p-4">
      <Image src={'/assets/icons/Search.svg'} width={20} height={20} alt="돋보기 아이콘" />
      <input
        className="w-full bg-[#f5f5f5] placeholder:text-[#666]"
        type="text"
        value={searchValue}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value)}
        placeholder="링크를 검색해 보세요."
      />
      <Image
        className="cursor-pointer"
        src={'/assets/images/close.png'}
        width={24}
        height={24}
        alt="돋보기 아이콘"
        onClick={() => setSearchValue('')}
      />
    </div>
  );
}
