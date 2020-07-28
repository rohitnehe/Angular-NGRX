
export class ErrorHandler{
  // display server errors
  public errorCallback<Object>(error: any) {
    window.scroll(0, 0);
    var errorData =  {
        isAlert : true,
        type : 'danger',
        message : "",

    };
    console.log(error);
      if(error.name == 'HttpErrorResponse'){
        errorData.message = "Could not connect to server";
      }else{
        errorData.message = error.error ? error.error : (error.message ? error.message : errorData.message);
      }
    return errorData;
  }
}