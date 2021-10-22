export function sortFirstName(a, b) {
  const nameA = a.first_name.toUpperCase();
  const nameB = b.first_name.toUpperCase();

  return sortString(nameA, nameB);
}

export function sortSurName(a, b) {
  const nameA = a.sur_name.toUpperCase().split(" ");
  const nameB = b.sur_name.toUpperCase().split(" ");
  const indexA = nameA.length - 1;
  const indexB = nameB.length - 1;

  return sortString(nameA[indexA], nameB[indexB]);
}

export function sortIssueCount(a, b) {
  const countA = Number.parseInt(a.issue_count);
  const countB = Number.parseInt(b.issue_count);

  return sortNumber(countA, countB);
}

export function sortDateOfBirth(a, b) {
  const dateA = Date.parse(a.date_of_birth);
  const dateB = Date.parse(b.date_of_birth);

  return sortNumber(dateA, dateB);
}

function sortString(a, b) {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
}

function sortNumber(a, b) {
  return a - b;
}
