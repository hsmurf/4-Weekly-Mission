import { getSampleFolder } from '@/services/api';
import Card from '@/components/Card';
import SearchBar from '@/components/SearchBar';
import FolderOwner from '@/components/shared/FolderOwner';

export interface Linklist {
  id: number;
  createdAt: string;
  created_at: string;
  url: string;
  title: string;
  description: string;
  imageSource: string;
  image_source: string;
}

interface Owner {
  id: number;
  name: string;
  profileImageSource: string;
}

export interface SampleFolder {
  folder: {
    id: number;
    name: string;
    owner: Owner;
    links: Linklist[];
    count: number;
  };
}
export default async function Page() {
  const sampleFolder: SampleFolder = await getSampleFolder();

  return (
    <>
      <section className="flex flex-col gap-5 w-full bg-[#edf7ff] pt-5 pb-14">
        <FolderOwner sampleFolder={sampleFolder} />
      </section>

      <section className="content-container tablet:px-8">
        <SearchBar />
        <div className="grid grid-cols-3 gap-x-5 gap-y-6 transition-all tablet:grid-cols-2 tablet:justify-items-center mobile:grid-cols-1 ">
          {sampleFolder.folder.links.map((link) => (
            <Card key={link.id} link={link} />
          ))}
        </div>
      </section>
    </>
  );
}
