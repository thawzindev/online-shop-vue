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
      getProducts(page = 1) {
          return instance.get('data'+'?_page='+page+'&_limit=20')
      },  
      getProduct(id) {
          return  instance.get('data/' +id )
      }
  }