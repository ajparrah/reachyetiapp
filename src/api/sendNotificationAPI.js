const API_URL = 'https://reachyetitestback.herokuapp.com';
const getUrlSendNotification = name => {
  const resource = 'notifications';
  const action = 'send';
  const fullURL = `${API_URL}/${resource}/${action}/${name}`;
  return fullURL;
};

export const sendNotificationAPI = async name => {
  try {
    const url = getUrlSendNotification(name);
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    if (data.ok) {
      return true;
    } else {
      throw Error('It was not possible to send notification');
    }
  } catch (error) {
    console.log('Something went wrongs sending notification', error);
    throw error;
  }
};

const getUrlSendDeviceToken = () => {
  const resource = 'notifications';
  const action = 'register';
  const fullURL = `${API_URL}/${resource}/${action}`;
  return fullURL;
};

export const sendTokenDeviceAPI = async token => {
  try {
    const url = getUrlSendDeviceToken();
    const body = {
      deviceToken: token,
    };
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    if (data.ok) {
      return data;
    } else {
      throw Error('It was not possible to ve device token');
    }
  } catch (error) {
    console.log('Something went wrongs saving token on server', error);
    throw error;
  }
};
