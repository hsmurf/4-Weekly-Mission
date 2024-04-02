'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useConvertDateFormat from '@/hooks/useConvertDateFormat';
import calcTimeAgo from '@/utils/calcTimeAgo';
import CardPopover from './CardPopover';
import { Linklist } from '@/app/shared/page';

interface CardProps {
  link: Linklist;
  openModal?: (modalType: string) => void;
  setModalFolderName?: React.Dispatch<React.SetStateAction<string>>;
}
export default function Card({ link, openModal, setModalFolderName }: CardProps) {
  const timeAgo = link.createdAt || link.created_at;
  const imgSrc = link.imageSource || link.image_source;
  const [popOver, setPopOver] = useState(false);
  const popOverRef = useRef<HTMLDivElement>(null);

  const onKebabButtonHandle = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setPopOver(!popOver);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popOverRef.current && !popOverRef.current.contains(event.target as Node)) {
        setPopOver(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <Link
      href={link.url}
      className="group rounded-2xl shadow-[0_5px_25px_0_rgba(0,0,0,0.08)] cursor-pointer transition-all hover:bg-[#f0f6ff] tablet:w-[340px] mobile:w-[325px]">
      <div className="overflow-hidden relative">
        {imgSrc ? (
          <Image
            className="h-[200px] w-full object-cover rounded-2xl group-hover:scale-125 transition-all"
            src={imgSrc}
            width={1000}
            height={1000}
            alt={link.title}
          />
        ) : (
          <Image
            className="h-[200px] w-full object-cover rounded-2xl group-hover:scale-125 transition-all"
            src={'/assets/images/no-image.png'}
            width={1080}
            height={635}
            alt={link.title}
          />
        )}
        <Image
          className="absolute top-[10px] right-[10px]"
          src={'/assets/icons/star.svg'}
          width={40}
          height={40}
          alt="별 아이콘"
        />
      </div>
      <div className="flex flex-col gap-2 py-4 px-5">
        <div className="flex justify-between items-center">
          <p className="text-[#666] text-sm">{calcTimeAgo(timeAgo)}</p>
          <div className="relative" onClick={onKebabButtonHandle} ref={popOverRef}>
            <Image src={'/assets/icons/kebab.svg'} width={30} height={30} alt="케밥 아이콘" />
            {popOver && <CardPopover link={link} openModal={openModal} setModalFolderName={setModalFolderName} />}
          </div>
        </div>
        <p className="h-12 overflow-hidden text-ellipsis ">{link.description}</p>
        <p className="h-5 text-[#333] text-sm">{useConvertDateFormat(timeAgo)}</p>
      </div>
    </Link>
  );
}
