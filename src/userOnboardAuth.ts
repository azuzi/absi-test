import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

const token ='eyJhbGciOiJFUzI1NksiLCJ0eXAiOiJKV1QiLCJraWQiOiJodHRwczovL2FwaS50ZXN0LmludGVic2kueHl6L3RydXN0ZWQtYXBwcy1yZWdpc3RyeS92Mi9hcHBzLzB4MTlkMDA0ZTdmNmVjZjI2NDUyM2UxMzY5MjRjYjY4Nzk2Y2E5ZGJmYTI1YmNhMDUzYjJmNmFmMGZjNmZkZDg4YyJ9.eyJpYXQiOjE2MjEyNTQ0NzksImV4cCI6MTYyMTI1NDc3OSwiaXNzIjoiZGlkOmVic2k6NlFZSmMzdExSaGV5ODhXUEtDMmt2NTg4djF1WjFvaWQzeWZjNUxwNUFiWUQiLCJzY29wZSI6Im9wZW5pZCBkaWRfYXV0aG4iLCJyZXNwb25zZV90eXBlIjoiaWRfdG9rZW4iLCJjbGllbnRfaWQiOiJodHRwczovL2FwaS50ZXN0LmludGVic2kueHl6L3VzZXJzLW9uYm9hcmRpbmcvdjEvYXV0aGVudGljYXRpb24tcmVzcG9uc2VzIiwibm9uY2UiOiI5YTU0NzNlNy04MjQ4LTQ2YWYtYmJiMS03YTU4Y2JkMjcyZDIifQ.CuzBoqbEKym64LmRkg89Zl8ut10sZNnR4W3ycqpkUwUng603tQHUC_Zx6JkUReEDVUFDLEtyY4PNO_gGxDVOVw';

const walletSec='eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NksifQ.eyJpYXQiOjE2MjEyNTUwMTMsIm9uYm9hcmRpbmciOiJyZWNhcHRjaGEiLCJ2YWxpZGF0ZWRJbmZvIjp7InN1Y2Nlc3MiOnRydWUsImNoYWxsZW5nZV90cyI6IjIwMjEtMDUtMTdUMTI6MzY6NTJaIiwiaG9zdG5hbWUiOiJhcHAudGVzdC5pbnRlYnNpLnh5eiIsInNjb3JlIjowLjksImFjdGlvbiI6ImxvZ2luIn0sImlzcyI6ImRpZDplYnNpOjZRWUpjM3RMUmhleTg4V1BLQzJrdjU4OHYxdVoxb2lkM3lmYzVMcDVBYllEIn0.j8eTrBT7KivKTuNiR5ioMckxAIgpK5UJDezDS3cJydH79PK2KbOFZPrjMYrj2HmWp0kuEJSlQLuF_ApH3uz-JQ';



export const userOnBoardAuthReq = async (): Promise<{ key: object }> => {
  let response;
  try {
    await axios
      .post(
        'https://api.test.intebsi.xyz/users-onboarding/v1/authentication-requests',
        {
            'scope': 'ebsi users onboarding'
        }
      )
      .then((res) => {
        console.log(res.data);
        response = res.data;
      });
  } catch (err) {
    // Handle Error Here
    console.error("error");
    console.error(err);
  }
  return { key: response };
};

export const userOnBoardAuthRes = async (): Promise<{ key: object }> => {
  let response;
  try {
    await axios
      .post(
        'https://api.test.intebsi.xyz/users-onboarding/v1/authentication-responses',
        {
          'id_token':'https://api.test.intebsi.xyz/users-onboarding/v1/authentication-responses#id_token='+token
        }
      )
      .then((res) => {
        //console.log(res.data);
        response = res.data;
      });
  } catch (err) {
    // Handle Error Here
    console.error(err.message);
  }
  return { key: response };
};
