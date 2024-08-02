import {
  screen,
  BrowserWindow,
  BrowserWindowConstructorOptions,
  Rectangle,
} from 'electron'
import Store from 'electron-store'
import * as path from 'path'


export const createWindow = (
  windowName: string,
  options: BrowserWindowConstructorOptions
): BrowserWindow => {
  const key = 'window-state'
  const name = `window-state-${windowName}`
  const store = new Store<Rectangle>({ name })
  const defaultSize: Rectangle = {
    width: options.width || 1193, // 기본 크기 지정
    height: options.height || 835, // 기본 크기 지정
    x: 0,
    y: 0,
  }
  
  let state: Rectangle = {} as Rectangle

  const restore = (): Rectangle => store.get(key, defaultSize)

  const getCurrentPosition = (): Rectangle => {
    const position = win.getPosition()
    const size = win.getSize()
    return {
      x: position[0],
      y: position[1],
      width: size[0],
      height: size[1],
    }
  }

  const windowWithinBounds = (windowState: Rectangle, bounds: Rectangle): boolean => {
    return (
      windowState.x >= bounds.x &&
      windowState.y >= bounds.y &&
      windowState.x + windowState.width <= bounds.x + bounds.width &&
      windowState.y + windowState.height <= bounds.y + bounds.height
    )
  }

  const resetToDefaults = (): Rectangle => {
    const bounds = screen.getPrimaryDisplay().bounds
    return {
      ...defaultSize,
      x: (bounds.width - defaultSize.width) / 2,
      y: (bounds.height - defaultSize.height) / 2,
    }
  }

  const ensureVisibleOnSomeDisplay = (windowState: Rectangle): Rectangle => {
    const visible = screen.getAllDisplays().some((display) => {
      return windowWithinBounds(windowState, display.bounds)
    })
    if (!visible) {
      // Window is partially or fully not visible now.
      // Reset it to safe defaults.
      return resetToDefaults()
    }
    return windowState
  }

  const saveState = (): void => {
    if (!win.isMinimized() && !win.isMaximized()) {
      Object.assign(state, getCurrentPosition())
    }
    store.set(key, state)
  }

  state = ensureVisibleOnSomeDisplay(restore())

  const iconPath = path.join(__dirname, '../../resources/logo.png'); // 아이콘 경로 설정
  console.log('Icon Path:', iconPath);

  const win = new BrowserWindow({
    ...state,
    ...options,
    autoHideMenuBar: true,
    icon: iconPath,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      ...options.webPreferences,
    },
  })

  win.on('close', saveState)

  return win
}
