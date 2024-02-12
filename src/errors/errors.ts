export class HttpError {
  CODE: number;
  TITLE: string;
  MESSAGE: string;

  constructor(code: number, title: string, message: string) {
    this.CODE = code;
    this.TITLE = title;
    this.MESSAGE = message;
  }
  static readonly SUCCESS: HttpError = new HttpError(
    0,
    'SUCCESS',
    'The operation was successful',
  );
  static readonly ERROR: HttpError = new HttpError(
    1,
    'ERROR',
    'An unexpected error occurred',
  );

  static readonly BAD_REQUEST: HttpError = new HttpError(
    400,
    'BAD REQUEST',
    'Missing mandatory parameters',
  );

  static readonly UNAUTHORIZED: HttpError = new HttpError(
    401,
    'UNAUTHORIZED',
    'Invalid credentials',
  );

  static readonly SERVER_ERROR: HttpError = new HttpError(
    500,
    'SERVER ERROR',
    'Server is temporarily not available',
  );
}
