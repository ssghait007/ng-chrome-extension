chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color: '#3aa757' });
    chrome.webNavigation.onCompleted.addListener(() => {
      chrome.tabs.query({ active: true, currentWindow: true }, ([{ id }]) => {
        console.log(chrome.tabs,id)
        chrome.pageAction.show(id);
      });
    }, { url: [{ urlMatches: 'google.com' }] });
  });