import Image from 'next/image';

interface OptionProps {
  title: string;
  openModal: (modalName: string) => void;
  setModalFolderName: (folderName: string) => void;
}

export default function Option({ title, openModal, setModalFolderName }: OptionProps) {
  return (
    <div className="flex justify-between items-center">
      <h2 className="text-2xl font-semibold ">{title}</h2>

      {title !== '전체' && (
        <div className="flex justify-center items-center gap-3">
          <button
            onClick={() => {
              openModal('FolderSharedModal');
              setModalFolderName(title);
            }}
            className="flex justify-center items-center gap-1">
            <Image src={'/assets/icons/share.svg'} width={20} height={20} alt="공유 아이콘" />
            <p>공유</p>
          </button>
          <button
            onClick={() => {
              openModal('FolderNameChangeModal');
              setModalFolderName(title);
            }}
            className="flex justify-center items-center gap-1">
            <Image src={'/assets/icons/pen.svg'} width={20} height={20} alt="펜 아이콘" />
            <p>이름 변경</p>
          </button>
          <button
            onClick={() => {
              openModal('FolderDeleteModal');
              setModalFolderName(title);
            }}
            className="flex justify-center items-center gap-1">
            <Image src={'/assets/icons/delete.svg'} width={20} height={20} alt="휴지통 아이콘" />
            <p>삭제</p>
          </button>
        </div>
      )}
    </div>
  );
}
