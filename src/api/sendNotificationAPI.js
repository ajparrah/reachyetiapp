const firebaseProject = 'reachyeti-319ea';
const urlAPIFirebase = `https://fcm.googleapis.com/v1/projects/${firebaseProject}/messages:send`;
const bearerToken =
  'ya29.a0AfH6SMBT61p6J3Mc23fIoNMfLtqSqg9fAP2IWbCOB-DWS_kDhsvqT34ZquTMt8knwSzHyd-niN2b4OTF91pdHHI4_IRcUFzufvstBcJW3CG_u-d6FDMZwK_VnL4ENQO1HVLGY7LCOWmaQUVqW9jMw7tt7zPZ';
const bearerTokenParsed = `Bearer ${bearerToken}`;

const parseBody = (name, tokenDevice) => {
  const bodyParsed = {
    message: {
      notification: {
        title: 'Reachyetiapp',
        body: `Notification from ${name}`,
      },
      token: tokenDevice,
    },
  };
  return bodyParsed;
};

export const sendNotificationAPI = async (name, tokenDevice) => {
  try {
    const bodyParsed = parseBody(name, tokenDevice);
    const response = await fetch(urlAPIFirebase, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: bearerTokenParsed,
      },
      body: JSON.stringify(bodyParsed),
    });
    const data = await response.json();
    if (data.name) {
      return true;
    } else {
      throw Error('It was not possible to send notification');
    }
  } catch (error) {
    console.log('Something went wrongs sending notification', error);
    throw error;
  }
};
