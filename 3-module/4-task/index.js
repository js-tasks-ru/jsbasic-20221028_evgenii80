function showSalary(users, age) {
  let filteredUsers = users.filter(user => user.age <= age);

  let result = '';
  for (let i = 0; i < filteredUsers.length; i++) {
    let user = filteredUsers[i];

    let str = user.name + ', ' + user.balance;
    if (i < filteredUsers.length - 1) {
      str += '\n';
    }

    result += str;
  }

  return result;
}
