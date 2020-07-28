
export class ErrorHandler{

  // display server errors
  public errorCallback<Object>(error: any) {
    window.scroll(0, 0);
    var errorData =  {
        isAlert : true,
        type : 'danger',
        message : "Could not connect to server",

    };
    console.log(error);
    errorData.message = error.message ? error.message : errorData.message;
    return errorData;
  }
}