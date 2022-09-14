export {};

declare global {
  interface MyNavigator extends Navigator {
    msSaveBlob?: (blob: any, defaultName?: string) => boolean;
  }
}
