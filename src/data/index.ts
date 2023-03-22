export type Props = {
  id: number,
  first_name: string,
  last_name: string,
  email: string,
  gender: string,
  ip_address: string,
  username: string,
}
// put json data into array 
export const loadData = (retrieve: (_data: Array<Props>) => any) => {
  const xhr = new XMLHttpRequest();
  const url = '/MOCK_DATA.json';
  xhr.open('GET', url);
  xhr.responseType = 'json';
  xhr.send();
  return xhr.onload = () => {
    if (xhr.status === 200) {
      const data = xhr.response;
      retrieve(data);
    }
  }
}

export const searchForUser = (_username: string, data: Array<Props>) => {
  // search through array
  const result: Props[] =  data.filter((user: Props) => user.username.toLowerCase().includes(_username.toLowerCase()))
  return result;
}
