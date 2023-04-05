const { app, BrowserWindow, screen } = require("electron");

const createWindow = () => {
  const displays = screen.getAllDisplays();
  const externalDisplay = displays.find((display) => {
    return display.bounds.x !== 0 || display.bounds.y !== 0;
  });

  if (externalDisplay) {
    // Open on the secondary monitor
    const win = new BrowserWindow({
      x: externalDisplay.bounds.x + 0,
      y: externalDisplay.bounds.y + 0,
      fullscreen: true,
    });
  } else {
    // Open on the primary monitor
    const primaryDisplay = screen.getPrimaryDisplay();
    const { width, height } = primaryDisplay.workAreaSize;
    const win = new BrowserWindow({
      width,
      height,
    });
  }

  win.loadFile("index.html");
};

app.whenReady().then(() => {
  // console.log(screen.getAllDisplays());
  createWindow();
});
