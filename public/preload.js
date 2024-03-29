// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
const { contextBridge, ipcRenderer } = require('electron')

// As an example, here we use the exposeInMainWorld API to expose the browsers
// and node versions to the main window.
// They'll be accessible at "window.versions".
process.once('loaded', () => {
  contextBridge.exposeInMainWorld('versions', process.versions)
  contextBridge.exposeInMainWorld('easyjson', {
    getEasyJson: setWords => {
      ipcRenderer.on('easyjson', (event, arg) => {
        setWords(arg)
      })
    },
    request: () => {
      ipcRenderer.send('get-easy-json')
    }
  })
  contextBridge.exposeInMainWorld('hardjson', {
    getHardJson: setWords => {
      ipcRenderer.on('hardjson', (event, arg) => {
        setWords(arg)
      })
    },
    request: () => {
      ipcRenderer.send('get-hard-json')
    }
  })
})
