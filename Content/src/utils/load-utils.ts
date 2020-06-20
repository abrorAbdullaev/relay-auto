import { RelayResponse } from "../Models";

export function getLoads(): Promise<{loads: RelayResponse}> {
  return new Promise((resolve, reject) => {
    const params = {
      sortByField: 'startTime',
      sortOrder: 'asc',
      resultSize: 200,
      minPricePerDistance: 2.2,
      minPayout: 1900, // TODO Make dynamic within popup
    };

    var xhr = new XMLHttpRequest();
    xhr.open("GET", 'https://relay.amazon.com/api/tours/loadboard', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.withCredentials = true;

    try {
      xhr.send(JSON.stringify(params));
      xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          resolve({ loads: JSON.parse(xhr.response) });
        }
      }
    } catch (e) {
      reject(e);
    }
  });
}

function formatParams(params: object){
  return "?" + Object
        .keys(params)
        .map(function(key){
          return key+"="+encodeURIComponent(params[key])
        })
        .join("&");
}
