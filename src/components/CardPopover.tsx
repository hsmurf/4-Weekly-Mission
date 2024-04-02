import { Linklist } from '@/app/shared/page';

interface CardPopoverProps {
  link: Linklist;
  openModal?: (modalType: string) => void;
  setModalFolderName?: (url: string) => void;
}

export default function CardPopover({ link, openModal, setModalFolderName }: CardPopoverProps) {
  return (
    <div className="w-[100px] flex flex-col gap-0.5 absolute top-[25px] left-0 bg-white shadow-[0_2px_8px_0_rgba(51,50,54,0.1)]">
      <button
        onClick={() => {
          openModal?.('FolderDeleteModal');
          setModalFolderName?.(link.url);
        }}
        className="py-2 px-3 text-[#333236] text-sm hover:text-primary hover:bg-[#e7effb]">
        삭제하기
      </button>
      <button
        onClick={() => {
          openModal?.('AddToFolderModal');
          setModalFolderName?.(link.url);
        }}
        className="py-2 px-3 text-[#333236] text-sm hover:text-primary hover:bg-[#e7effb]">
        폴더에 추가
      </button>
    </div>
  );
}
