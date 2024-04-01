import Image from 'next/image';
import { getSampleFolder } from '@/services/api';

export default async function FolderOwner() {
  const data = await getSampleFolder();

  return (
    <section className="flex flex-col gap-5 w-full bg-[#edf7ff] pt-5 pb-14">
      <div className="flex flex-col items-center gap-3 ">
        <Image src={data.folder.owner.profileImageSource} width={60} height={60} alt="소유자 프로필 이미지" />
        <p>{data.folder.owner.name}</p>
      </div>
      <h1 className="text-center text-4xl font-semibold">{data.folder.name}</h1>
    </section>
  );
}
