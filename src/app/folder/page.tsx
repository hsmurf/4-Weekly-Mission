'use client';
import { ChangeEvent, useEffect, useState } from 'react';
import SearchBar from '@/components/SearchBar';
import AddLinkInput from '@/components/folder/AddLinkInput';
import CategoryList from '@/components/folder/CategoryList';
import Option from '@/components/folder/Option';
import Card from '@/components/Card';
import { getCardList, getCategoryCardList, getCategoryList } from '@/services/api';
import { Linklist } from '@/app/shared/page';
import Modal from '@/components/Modal';

export interface Folder {
  id: number;
  name: string;
  link: { count: number };
}

export default function Page() {
  const [title, setTitle] = useState<string>('전체');
  const [userFolder, setUserFolder] = useState<Linklist[]>([]);
  const [categoryList, setCategoryList] = useState<Folder[] | null>(null);
  const [folderId, setFolderId] = useState<number>();
  const [modalFolderName, setModalFolderName] = useState<string>('전체');
  const [modalType, setModalType] = useState<string | null>(null);
  const [searchValue, setSearchValue] = useState<string>('');

  useEffect(() => {
    getCategoryList().then(({ data }) => setCategoryList(data));
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await (title === '전체' ? getCardList() : getCategoryCardList(folderId));
      setUserFolder(data);
    };
    fetchData();
  }, [title, folderId]);

  const searchFolder = userFolder.filter((card) => {
    return (
      card.url.toLowerCase().includes(searchValue.toLowerCase()) ||
      card.title.toLowerCase().includes(searchValue.toLowerCase()) ||
      card.description.toLowerCase().includes(searchValue.toLowerCase())
    );
  });

  const openModal = (modalType: string) => {
    setModalType(modalType);
  };

  const closeModal = () => {
    setModalType(null);
  };

  const renderModal = () => {
    switch (modalType) {
      case 'AddToFolderModal':
        return (
          <Modal closeModal={closeModal} title="폴더에 추가" categoryList={categoryList} folderName={modalFolderName} />
        );
      case 'FolderAddModal':
        return <Modal closeModal={closeModal} title="폴더 추가" />;
      case 'FolderSharedModal':
        return <Modal closeModal={closeModal} title="폴더 공유" folderId={folderId} folderName={modalFolderName} />;
      case 'FolderNameChangeModal':
        return <Modal closeModal={closeModal} title="폴더 이름 변경" />;
      case 'FolderDeleteModal':
        return <Modal closeModal={closeModal} title="폴더 삭제" folderName={modalFolderName} />;
      case 'LinkDeleteModal':
        return <Modal closeModal={closeModal} title="링크 삭제" folderName={modalFolderName} />;
      default:
        return null;
    }
  };

  return (
    <>
      <section className="pt-16 pb-24 bg-[#edf7ff] tablet:px-8">
        <AddLinkInput openModal={openModal} setModalFolderName={setModalFolderName} />
      </section>
      <section className="content-container tablet:px-8 tablet:justify-center">
        <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
        <div className="flex flex-col gap-6">
          <CategoryList
            categoryList={categoryList}
            title={title}
            setTitle={setTitle}
            setFolderId={setFolderId}
            openModal={openModal}
            setModalFolderName={setModalFolderName}
          />
          <Option title={title} openModal={openModal} setModalFolderName={setModalFolderName} />
          {userFolder && userFolder.length > 0 ? (
            <div className="grid grid-cols-3 gap-x-5 gap-y-6 transition-all tablet:grid-cols-2 tablet:justify-items-center mobile:grid-cols-1">
              {searchFolder.map((link) => (
                <Card key={link.id} link={link} openModal={openModal} setModalFolderName={setModalFolderName} />
              ))}
            </div>
          ) : (
            <h2 className="text-center pt-10 pb-9 h-52">저장된 링크가 없습니다.</h2>
          )}
        </div>
      </section>
      {renderModal()}
    </>
  );
}
