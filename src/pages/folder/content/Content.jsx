import { useEffect, useState } from 'react';
import { getFolderId, getUserFolder, getUserLink } from '../../../apis/api';
import Card from '../../../components/ui/card/Card';
import SearchBar from '../../../components/ui/search-bar/SearchBar';
import * as S from './Content.style';
import shareIcon from '../../../assets/folder/share.svg';
import penIcon from '../../../assets/folder/pen.svg';
import deleteIcon from '../../../assets/folder/delete.svg';

const Content = () => {
  const [folderList, setFolderList] = useState([]);
  const [title, setTitle] = useState('전체');
  const [folderId, setFolderId] = useState(null);
  const [folderData, setFolderData] = useState(null);
  const [userFolder, setUserFolder] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (title === '전체') {
          const folderIdData = await getUserLink();
          setFolderData(folderIdData);
          setUserFolder(folderIdData);
        } else {
          const folderIdData = await getFolderId(folderId);
          setFolderData(folderIdData);
          setUserFolder(folderIdData);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [folderId, title]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const folderListData = await getUserFolder();
        setFolderList(folderListData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <S.Container>
      <SearchBar />
      <div className="folder-list-box">
        <S.folderButtonList>
          <div className="folder-btn-box">
            <button className={`folder-btn ${title === '전체' ? 'active' : ''}`} onClick={() => setTitle('전체')}>
              전체
            </button>
            {folderList &&
              folderList?.map((list) => (
                <button
                  className={`folder-btn ${title === list.name ? 'active' : ''}`}
                  key={list.id}
                  onClick={() => {
                    setTitle(list.name);
                    setFolderId(list.id);
                  }}
                >
                  {list.name}
                </button>
              ))}
          </div>
          <div className="add-folder-btn">
            <button>폴더 추가</button>
            <S.addPlusSvg />
          </div>
        </S.folderButtonList>

        <S.currentName>
          <p className="title">{title}</p>
          {title !== '전체' && (
            <div className="folder-controls">
              <button className="control-btn">
                <img src={shareIcon} alt="공유 아이콘" />
                <p>공유</p>
              </button>
              <button className="control-btn">
                <img src={penIcon} alt="펜 아이콘" />
                <p>이름 변경</p>
              </button>
              <button className="control-btn">
                <img src={deleteIcon} alt="휴지통(삭제) 아이콘" />
                <p>삭제</p>
              </button>
            </div>
          )}
        </S.currentName>

        {folderData?.length > 0 ? (
          <S.CardContainer>
            {userFolder?.map((link) => (
              <Card key={link.id} link={link} />
            ))}
          </S.CardContainer>
        ) : (
          <S.NoFolderLink>저장된 링크가 없습니다.</S.NoFolderLink>
        )}
      </div>
    </S.Container>
  );
};

export default Content;