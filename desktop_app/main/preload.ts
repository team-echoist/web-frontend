import { contextBridge, ipcRenderer, IpcRendererEvent } from 'electron'


window.addEventListener('DOMContentLoaded', () => {
  const minButton = document.getElementById('min-button');
  const maxButton = document.getElementById('max-button');
  const restoreButton = document.getElementById('restore-button');
  const closeButton = document.getElementById('close-button');

  minButton?.addEventListener('click', () => {
    ipcRenderer.send('minimize-window');
  });

  maxButton?.addEventListener('click', () => {
    ipcRenderer.send('maximize-window');
  });

  restoreButton?.addEventListener('click', () => {
    ipcRenderer.send('restore-window');
  });

  closeButton?.addEventListener('click', () => {
    ipcRenderer.send('close-window');
  });

  ipcRenderer.on('window-maximized', () => {
    if (restoreButton && maxButton) {
      restoreButton.style.display = 'block';
      maxButton.style.display = 'none';
    }
  });

  ipcRenderer.on('window-unmaximized', () => {
    if (restoreButton && maxButton) {
      restoreButton.style.display = 'none';
      maxButton.style.display = 'block';
    }
  });
});
const handler = {
  send(channel: string, value: unknown) {
    ipcRenderer.send(channel, value)
  },
  
  on(channel: string, callback: (...args: unknown[]) => void) {
    const subscription = (_event: IpcRendererEvent, ...args: unknown[]) =>
      callback(...args)
    ipcRenderer.on(channel, subscription)

    return () => {
      ipcRenderer.removeListener(channel, subscription)
    }
  },
}

contextBridge.exposeInMainWorld('ipc', handler)

export type IpcHandler = typeof handler
