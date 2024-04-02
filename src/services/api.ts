export const BASE_URL = 'https://bootcamp-api.codeit.kr/api';

export const getSampleUser = async () => {
  try {
    const response = await fetch(`${BASE_URL}/sample/user`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('샘플 유저 데이터를 불러오지 못 했습니다. 다시 시도해 주세요.', error);
    throw error;
  }
};

export const getSampleFolder = async () => {
  try {
    const response = await fetch(`${BASE_URL}/sample/folder`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('샘플 폴더 데이터를 불러오지 못 했습니다. 다시 시도해 주세요.', error);
    throw error;
  }
};

export const getUser = async () => {
  try {
    const response = await fetch(`${BASE_URL}/users/3`);
    const data = await response.json();
    return data.data[0];
  } catch (error) {
    console.log('유저 데이터를 불러오지 못 했습니다. 다시 시도해 주세요.', error);
    throw error;
  }
};

export const getCategoryList = async () => {
  try {
    const response = await fetch(`${BASE_URL}/users/3/folders`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('카테고리 목록을 불러오지 못 했습니다. 다시 시도해 주세요.', error);
    throw error;
  }
};

export const getCardList = async () => {
  try {
    const response = await fetch(`${BASE_URL}/users/3/links`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('카드 리스트를 불러오지 못 했습니다. 다시 시도해 주세요.', error);
    throw error;
  }
};

export const getCategoryCardList = async (folderId?: number) => {
  try {
    const response = await fetch(`${BASE_URL}/users/3/links?folderId=${folderId}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('카테고리 카드 리스트를 불러오지 못 했습니다. 다시 시도해 주세요.', error);
    throw error;
  }
};
