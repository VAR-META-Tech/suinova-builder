import { Request } from "express";
import { Strategy } from "passport-strategy";

export interface SuiWalletStrategyOptions {
  passReqToCallback?: boolean;
}

export interface WalletVerifyOptions {
  address: string;
  signature: string;
  nonce: number;
  message?: string;
  nextPath?: string;
  appInfo?: {
    appName: string;
    authorizationPath: string;
  };
}

export interface VerifyCallback {
  (err: Error | null, user?: any, info?: any): void;
}

export interface VerifyFunction {
  (
    req: Request,
    options: WalletVerifyOptions,
    done: VerifyCallback
  ): Promise<void>;
}

export class SuiWalletStrategy extends Strategy {
  name = "sui-wallet";
  private _verify: VerifyFunction;
  private _passReqToCallback: boolean;

  constructor(options: SuiWalletStrategyOptions, verify: VerifyFunction) {
    super();
    this._verify = verify;
    this._passReqToCallback = options.passReqToCallback || false;
  }

  async authenticate(req: Request, options?: any) {
    try {
      const { address, signature, nonce, nextPath, appInfo } = req.body;

      if (!address || !signature || !nonce) {
        return this.fail({ message: "Missing credentials" }, 400);
      }

      const verifyOpts: WalletVerifyOptions = {
        address,
        signature,
        nonce,
        nextPath,
        appInfo,
      };

      await this._verify(req, verifyOpts, (err, user, info) => {
        if (err) {
          return this.error(err);
        }
        if (!user) {
          return this.fail(info);
        }
        this.success(user, info);
      });
    } catch (error) {
      this.error(error as Error);
    }
  }
}
