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

  instance.defaults.withCredentials = true;


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
      login(payload) {
        return instance.post('login', { 
          phone : payload.phone,
          password : payload.password
        }
        )
      },  
      addToWishList(productId, token) {
        return instance.post('add-wishlist', { 
          product_id : productId,
        },
        { headers: {"Authorization" : `Bearer ${token}`} }
        )
      },  
      wishlist() {
        const token = JSON.parse(localStorage.getItem('user')).token
        return instance.get('wishlist',
        { headers: {"Authorization" : `Bearer ${token}`} }
        )
      },  
      wishListDelete(id) {
        const token = JSON.parse(localStorage.getItem('user')).token
        return instance.post('wishlist/delete', { 
          id : id,
        },
        { headers: {"Authorization" : `Bearer ${token}`} }
        )
      },  
      getFeatureProducts() {
        return instance.get('feature-products')
      },  
      csrf() {
        return instance.get('csrf-cookie')
      },  
      getBlog(page) {
        return instance.get('blogs'+'?page='+page)
      },
      getBlogById(id) {
        return instance.get('blog/'+ id)
      },   
      getFeatureBlogs() {
        return instance.get('feature-blogs')
      }, 
      getProduct(id) {
          return  instance.get('product/' + id )
      },
      productCheck(id) {
        return  instance.get('product/' + id + '/check')
      },
      getCategories() {
          return instance.get('categories')
      },
      getProductsByCategory(page, id) {
          return instance.get('category/' + id + '/all-products?page=' + page)
      },
      checkOut(payload, products) {
        return instance.post('checkout', {
                name : payload.name,
                address : payload.address,
                apartment : payload.apartment,
                township : payload.township,
                phone : payload.phone,
                email : payload.email,
                create_account : payload.create_account,
                account_pw : payload.account_pw,
                notes : payload.notes,
                cash_on_delivery : payload.cash_on_delivery,
                products
        })
      }
  }