import '@/app/globals.css';

const CategoryList = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex flex-wrap gap-2">
        <button className="border-purple py-2 px-3 text-black hover:text-white hover:bg-primary">전체</button>
        {/* 데이터 받아서 넣어야 함 */}
      </div>
      <button className="text-primary font-medium whitespace-normal mobile:add-folder-btn">폴더 추가 +</button>
    </div>
  );
};
export default CategoryList;
