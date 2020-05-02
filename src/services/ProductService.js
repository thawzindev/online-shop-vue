import axios from 'axios';
import NProgress from 'nprogress';

const instance = axios.create({
    baseURL: 'http://localhost:8000/api',
    timeout: 5000,
    headers: {
        Accept: 'Application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    }
  });

  instance.interceptors.request.use(config => {
    NProgress.start()
    return config
  })

  instance.interceptors.response.use(response => {
      NProgress.done()
      return response
  })

  export default {
      getProducts(page) {
          return instance.get('products'+'?page='+page)
      },  
      getProduct(id) {
          return  instance.get('product/' + id )
      },
      getCategories() {
          return instance.get('categories')
      },
      getProductsByCategory(page, id) {
          return instance.get('category/' + id + '/all-products?page=' + page)
      }
  }