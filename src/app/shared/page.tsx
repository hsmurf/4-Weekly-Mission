import { getSampleFolder } from '@/services/api';
import Card from '@/components/Card';
import SearchBar from '@/components/SearchBar';
import FolderOwner from '@/components/shared/FolderOwner';
import { useState } from 'react';

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
  id: number;
  name: string;
  owner: Owner;
  links: Linklist[];
  count: number;
}
export default async function Page() {
  const sampleFolder = await getSampleFolder();
  const [searchValue, setSearchValue] = useState<string>('');

  const searchFolder: SampleFolder = sampleFolder.links.filter((card: Linklist) => {
    return (
      card.url.toLowerCase().includes(searchValue.toLowerCase()) ||
      card.title.toLowerCase().includes(searchValue.toLowerCase()) ||
      card.description.toLowerCase().includes(searchValue.toLowerCase())
    );
  });
  return (
    <>
      <section className="flex flex-col gap-5 w-full bg-[#edf7ff] pt-5 pb-14">
        <FolderOwner sampleFolder={sampleFolder} />
      </section>

      <section className="content-container tablet:px-8">
        <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
        <div className="grid grid-cols-3 gap-x-5 gap-y-6 transition-all tablet:grid-cols-2 tablet:justify-items-center mobile:grid-cols-1 ">
          {searchFolder.links.map((link) => (
            <Card key={link.id} link={link} />
          ))}
        </div>
      </section>
    </>
  );
}
