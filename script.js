const addCharacter = (element, character) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      element.textContent = element.textContent + character;
      resolve();
    }, 100);
  });
};

const initialize = async (string, id) => {
  const element = document.getElementById(id);
  const length = string.length;
  element.textContent = "> ";
  for (let index = 0; index < length; index++) {
    await addCharacter(element, string[index]);
  }
  element.classList.remove("active");
};

const start = async () => {
  await initialize("Hey I am hacker...", "line-1");
  await initialize("Hacking Ashish's username...", "line-2");
  await initialize("Username found aashish17...", "line-3");
  await initialize("Connecting to facebook...", "line-4");
};
start();
