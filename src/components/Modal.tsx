import { useState } from 'react';
import Image from 'next/image';

interface Folder {
  id: number;
  name: string;
  link: { count: number };
}
interface ModalProps {
  title: string;
  closeModal: () => void;
  folderName?: string | null;
  folderId?: number | null;
  categoryList?: Folder[] | null;
}

export default function Modal({ title, closeModal, folderName, folderId, categoryList }: ModalProps) {
  const [listActive, setListActive] = useState<number | null>(null);
  const sharedLink = `${window.location.origin}/shared?user=1&folder=/${folderId}`;

  const onFacebookShareHandle = () => {
    const facebook = encodeURIComponent(sharedLink);
    window.open(`http://www.facebook.com/sharer/sharer.php?u=${facebook}`);
  };

  const onLinkCopyHandle = () => {
    window.navigator.clipboard.writeText(sharedLink).then(() => alert('링크 복사 완료'));
  };

  return (
    <div className="flex justify-center items-center bg-[rgba(0,0,0,0.4)] fixed inset-0">
      <div className="relative flex flex-col justify-center items-center gap-6 w-[360px] py-8 px-10 m-auto bg-white rounded-2xl border-[1px] border-solid border-[#ccd5e3]">
        <button className="absolute top-4 right-4">
          <Image onClick={closeModal} src={'/assets/images/close.png'} width={30} height={30} alt="닫기" />
        </button>

        {/* 모달 타이틀 */}
        {folderName ? (
          <div className="flex flex-col items-center gap-2">
            <h2 className="text-center text-[#373740] text-xl font-bold">{title}</h2>
            <p className="text-[#9fa6b2] text-center text-sm">{folderName}</p>
          </div>
        ) : (
          <h2 className="text-center text-[#373740] text-xl font-bold">{title}</h2>
        )}

        {/* 공유 */}
        {folderId ? (
          <div className="flex gap-8">
            <button className="flex flex-col justify-center items-center gap-3">
              <div className={`flex justify-center items-center p-3 rounded-full bg-[#fee500]`}>
                <Image src={'/assets/icons/Kakao.svg'} width={20} height={20} alt="카카오톡에 공유" />
              </div>
              <p>카카오톡</p>
            </button>
            <button onClick={onFacebookShareHandle} className="flex flex-col justify-center items-center gap-3">
              <div className={`flex justify-center items-center p-3 rounded-full bg-[#1877f2]`}>
                <Image src={'/assets/icons/facebook.svg'} width={20} height={20} alt="페이스북에 공유" />
              </div>
              <p>페이스북</p>
            </button>
            <button onClick={onLinkCopyHandle} className="flex flex-col justify-center items-center gap-3">
              <div className={`flex justify-center items-center p-3 rounded-full bg-[#9d9d9d] bg-opacity-5`}>
                <Image src={'/assets/icons/link.svg'} width={20} height={20} alt="링크 복사" />
              </div>
              <p>링크 복사</p>
            </button>
          </div>
        ) : null}

        {/* 추가 */}
        {categoryList ? (
          <div className="flex flex-col gap-1 overflow-y-auto h-[172px]">
            {categoryList.map((list) => (
              <button
                key={list.id}
                onClick={() => setListActive(list.id)}
                className={`flex justify-start items-center gap-2 w-[264px] p-2 text-[#373740] hover:bg-[#f0f6ff] ${
                  listActive === list.id ? 'bg-[#f0f6ff] text-primary' : ''
                }`}>
                <h2>{list.name}</h2>
                <p className="text-[#9fa6b2] text-sm">{list.link.count}개 링크</p>
                {listActive === list.id && (
                  <Image src={'/assets/icons/check.svg'} width={20} height={20} alt="체크 아이콘" className="ml-auto" />
                )}
              </button>
            ))}
          </div>
        ) : null}

        <div className="flex flex-col gap-4">
          {(title === '폴더 이름 변경' || title === '폴더 추가') && (
            <input
              className="w-[280px] py-[18px] px-4 bg-white border-[1px] border-solid border-[#ccd5e3] rounded-lg focus:border-primary placeholder:text-[#9fa6b2]"
              placeholder="내용 입력"
            />
          )}

          {title === '폴더 공유' ? null : (
            <button
              className={`btn w-[280px] ${title === '폴더 삭제' || title === '링크삭제' ? 'bg-red' : 'bg-primary'}`}>
              {title === '폴더 삭제' || title === '링크삭제' ? '삭제하기' : `${title.slice(-2)}하기`}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
