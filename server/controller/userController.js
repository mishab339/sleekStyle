

module.exports = {    

    /**
     * GET /
     * Show Home page
     */
    homePage: async (req,res)=>{
        res.render('./user/index',{title: 'Sleek Styel - Home',isHome:true});
    },
    /**
     * GET /products
     * Show product Page
     */
    products: async (req,res)=>{
        res.render('./user/products',{title: 'Sleek Style - Products',isHome:false});
    },
    /**
     * GET /cart
     * Show My Cart
     */
    cart: async (req,res)=>{
        res.render('./user/shoping-cart',{title: 'Sleek Style - Shoping Cart',isHome:false});
    },
    /**
    * GET /blog
    * Show Blog page
    */
    blog: async (req,res)=>{
       res.render('./user/blog',{title: 'Sleek Style - Blog',isHome:false});
    },
    /**
     * GET /about
     * Show About page
     */
    about: async (req,res)=>{
        res.render('./user/about',{title: 'Sleek Style - About',isHome:false});
    },
    /**
     * GET /contact
     * Show contact page
     */
    contact: async (req,res)=>{
        res.render('./user/contact',{title: 'Sleek Style - Contact',isHome:false});
    }
    
    }