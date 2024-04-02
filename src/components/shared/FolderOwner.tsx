import Image from 'next/image';
import { SampleFolder } from '@/app/shared/page';

export default function FolderOwner({ sampleFolder }: { sampleFolder: SampleFolder }) {
  return (
    <>
      <div className="flex flex-col items-center gap-3 ">
        <Image src={sampleFolder.folder.owner.profileImageSource} width={60} height={60} alt="소유자 프로필 이미지" />
        <p>{sampleFolder.folder.owner.name}</p>
      </div>
      <h1 className="text-center text-4xl font-semibold">{sampleFolder.folder.name}</h1>
    </>
  );
}
