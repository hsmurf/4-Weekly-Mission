import { Folder } from '@/app/folder/page';
import '@/app/globals.css';

interface CategoryListProps {
  categoryList: Folder[] | null;
  setTitle: React.Dispatch<string>;
  title: string;
  setFolderId: React.Dispatch<number>;
  openModal: (modalType: string) => void;
  setModalFolderName: (title: string) => void;
}

export default function CategoryList({
  categoryList,
  title,
  setTitle,
  setFolderId,
  openModal,
  setModalFolderName,
}: CategoryListProps) {
  return (
    <div className="flex justify-between items-center">
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setTitle('전체')}
          className="border-purple py-2 px-3 text-black hover:text-white hover:bg-primary">
          전체
        </button>
        {categoryList?.map((list) => (
          <button
            key={list.id}
            className={`border-purple py-2 px-3 text-black hover:text-white hover:bg-primary `}
            onClick={() => {
              setTitle(list.name);
              setFolderId(list.id);
            }}>
            {list.name}
          </button>
        ))}
      </div>
      <button
        onClick={() => {
          openModal('FolderAddModal');
          setModalFolderName(title);
        }}
        className="text-primary font-medium whitespace-normal mobile:add-folder-btn">
        폴더 추가 +
      </button>
    </div>
  );
}
