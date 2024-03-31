import Image from 'next/image';

const CurrentTitle = () => {
  return (
    <div className="flex justify-between items-center">
      <p className="text-2xl font-semibold ">zz</p>

      <div className="flex justify-center items-center gap-3">
        <button className="flex justify-center items-center gap-1">
          <Image src={'/assets/icons/share.svg'} width={20} height={20} alt="공유 아이콘" />
          <p>공유</p>
        </button>
        <button className="flex justify-center items-center gap-1">
          <Image src={'/assets/icons/pen.svg'} width={20} height={20} alt="펜 아이콘" />
          <p>이름 변경</p>
        </button>
        <button className="flex justify-center items-center gap-1">
          <Image src={'/assets/icons/delete.svg'} width={20} height={20} alt="휴지통 아이콘" />
          <p>삭제</p>
        </button>
      </div>
    </div>
  );
};
export default CurrentTitle;
