document.addEventListener('DOMContentLoaded', () => {
  let customTest = document.getElementById('customTest');

  customTest.onclick = () => {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {getLoadsList: true}, function(response) {
        console.log(response.list);
      });
    });
  }
})
