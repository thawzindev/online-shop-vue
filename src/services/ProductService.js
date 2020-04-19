import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 1000,
    headers: {
        Accept: 'Application/json',
        'Content-Type': 'application/json'
    }
  });

  export default {
      getProducts() {
          return instance.get('data')
      },
      getProduct(id) {
          return  instance.get('data/' +id )
      }
  }