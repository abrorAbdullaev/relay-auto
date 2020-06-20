document.addEventListener('DOMContentLoaded', () => {
  introduceButton();
})

function introduceButton() {
  let customTest = document.getElementById('customTest');

  if (!customTest) {
    setTimeout(introduceButton, 250);
    return;
  }

  customTest.onclick = () => {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {getLoadsList: true}, function(response) {
        console.log(response.list);
      });
    });
  };
};