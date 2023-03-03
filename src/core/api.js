const BASE_URL = "https://dummyjson.com/products";

const options = {
  "Content-Type": "application/json",
};

const request = async (url) => {
  let response;
  try {
    response = await fetch(`${BASE_URL}${url}`, options);
  } catch (error) {
    console.log(error);
  }

  if (response?.ok) {
    return response.json();
  } else {
    console.log(`HTTP Response Code: ${response?.status}`);
  }
};

const api = {
  getList() {
    return request("/1");
  },
};

export default api;
