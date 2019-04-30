import { toast } from 'react-toastify';

const exceptionHandler = (error) => {
  const errorObject = JSON.parse(JSON.stringify(error));
  const { response } = errorObject;
  let responseError;
  if (response) {
    responseError = response.data.error;
    if (Array.isArray(responseError)) {
      responseError.forEach(errno => toast.error(errno.msg));
    } else toast.error(responseError);
  }
  return responseError;
};

export default exceptionHandler;
