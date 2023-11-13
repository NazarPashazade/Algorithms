import { createWinstonLogger, mongouseConnect } from './utilities';

class ServerGlobal {
  private static _instance: ServerGlobal;
  private readonly _logger: Winston.Logger;

  private constructor() {
    mongouseConnect()                       // Init DB instance once
    this._logger = createWinstonLogger()    // Init Logger instance once
  }

  static getInstance() {
    if (!this._instance) {
      this._instance = new ServerGlobal();
    }
    return this._instance;
  }

  public get loggerInstance() {
    return this._logger;
  }
}


const ins = ServerGlobal.getInstance();   // Init global set up once

ServerGlobal.getInstance().loggerInstance.info(`Server is running on port: ${process.env.PORT}`);  // still will return same instance

