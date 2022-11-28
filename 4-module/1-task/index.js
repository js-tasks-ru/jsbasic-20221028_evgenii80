function makeFriendsList(friends) {
  let str = '';

  for (let i = 0; i < friends.length; i++) {
    str += `<li>${friends[i].firstName} ${friends[i].lastName}</li>`;
  }

  let ulElement = document.createElement('UL');

  ulElement.innerHTML = str;

  return ulElement;
}


