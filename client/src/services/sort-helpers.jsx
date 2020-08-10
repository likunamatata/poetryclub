const newest = (a, b) => {
  if (Date.parse(a.updated_at) > Date.parse(b.updated_at)) {
    return -1;
  }
  if (Date.parse(a.updated_at) < Date.parse(b.updated_at)) {
    return 1;
  }
  return 0;
}

const oldest = (a, b) => {
  if (Date.parse(a.updated_at) < Date.parse(b.updated_at)) {
    return -1;
  }
  if (Date.parse(a.updated_at) > Date.parse(b.updated_at)) {
    return 1;
  }
  return 0;
}

const title = (a, b) => {
  if (a.title < b.title) {
    return -1;
  }
  if (a.title > b.title) {
    return 1;
  }
  return 0;
}

const username = (a, b) => {
  if (a.username < b.username) {
    return -1;
  }
  if (a.username > b.username) {
    return 1;
  }
  return 0;
}

export const sortBy = {
  'By Title': title,
  'By Author': username,
  'By Date - Newest': newest,
  'By Date - Oldest': oldest
}