const keyListeners: Record<string, Function> = {};

export function registerKeyListener(key: string, callback: Function): void {
  keyListeners[key] = callback;
}

export function unregisterKeyListener(key: string): void {
  delete keyListeners[key];
}

export function handleKeyEvent(event: KeyboardEvent): void {
  // キーイベント処理の実装
  const callback = keyListeners[event.key];
  if (callback) {
    callback(event);
  }
}

export function batchRegisterKeyListeners(listeners: Record<string, Function>): void {
  Object.keys(listeners).forEach(key => {
    registerKeyListener(key, listeners[key]);
  });
}