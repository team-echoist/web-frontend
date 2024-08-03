declare module 'electron-push-receiver' {
    import { WebContents } from 'electron';
  
    export function setup(webContents: WebContents): void;
  }
  