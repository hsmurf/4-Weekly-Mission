import Image from 'next/image';
import '@/app/globals.css';

interface AddLinkInputProps {
  openModal: (modalType: string) => void;
  setModalFolderName: (name: string) => void;
}
export default function AddLinkInput({ openModal, setModalFolderName }: AddLinkInputProps) {
  return (
    <form className="flex justify-center items-center max-w-[800px] mx-auto py-4 px-5 bg-white border-purple  rounded-2xl">
      <div className="flex justify-center items-center gap-3 flex-grow">
        <Image src={'/assets/icons/link.svg'} width={20} height={20} alt="폴더 추가 인풋 아이콘" />
        <input
          className="flex-grow border-none leading-6 placeholder:text-[#9fa6b2]"
          type="text"
          placeholder="링크를 추가해 보세요."
        />
      </div>
      <button
        className="btn w-20 py-2 px-4 text-sm"
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
          e.preventDefault();
          openModal('AddToFolderModal');
          setModalFolderName('');
        }}>
        추가하기
      </button>
    </form>
  );
}
