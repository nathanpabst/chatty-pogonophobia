const outputDiv = document.getElementById('messages');

const buildDomString = (messages) =>
{
  let domString = '';
  messages.forEach((message, index) => {
    domString += `<div data-message-id='${index}' class='messages'>`;
    domString +=  `<p>${message.message}</p>`;

    domString +=  `<button class='edit btn btn-default'>Edit</button>`;

    domString +=  `<button class='deleteBtn btn btn-default''>Delete</button>`;
    domString += `</div>`;
  });
  return domString;
};

const printToDom = (string) => {
  outputDiv.innerHTML = buildDomString(string);
};

module.exports =
  {
    printToDom,
    buildDomString,
  };
