const urlAPI = 'https://reachyetitestback.herokuapp.com';
const resource = 'shareablelinks';

export const getNamesAPI = async () => {
  try {
    const response = await fetch(`${urlAPI}/${resource}`);
    const data = await response.json();
    if (data.ok) {
      return data.shareableLinks;
    } else {
      throw Error(data.msg);
    }
  } catch (error) {
    console.log('An occurred error while getting data', error);
    throw error;
  }
};
