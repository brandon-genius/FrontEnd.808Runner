import axios from 'axios';
let mockCatalog = [
  {
    _id: "qwerasdfzxcv",
    title: "Carbon Plate Shoes",
    category: "shoes",
    price: 300.0,
    image: "alphafly.nike.jpg",
  },
  {
    _id: "qwerzxcvasdf",
    title: "Foam Shoes",
    category: "shoes",
    price: 250.0,
    image: "Addidas.Boston.jpg",
  },
  {
    _id: "qwertyuighjk",
    title: "Zoom Shoes",
    category: "shoes",
    price: 259.0,
    image: "nike.zoom.jpg",
  },
  {
    _id: "qwerasdfokmn",
    title: "Clif Shot",
    category: "fuel",
    price: 2.99,
    image: "Clif.shot.jpg",
  },
  {
    _id: "qwertgbnhyuj",
    title: "Gu Shot",
    category: "fuel",
    price: 1.99,
    image: "Gu.shot.jpg",
  },
  {
    _id: "qwersdfghjkg",
    title: "SIS Sampler",
    category: "fuel",
    price: 20.99,
    image: "Sis.sampler.jpg",
  },
  {
    _id: "qwerrfvtgbyh",
    title: "Shoe Laces",
    category: "accessory",
    price: 5.99,
    image: "laces.jpg",
  },
  {
    _id: "qwertyujghnb",
    title: "Body Glide",
    category: "accessory",
    price: 6.99,
    image: "glide.jpg",
  },
  {
    _id: "qwertgbncvsf",
    title: "Garmin Watch",
    category: "accessory",
    price: 300.0,
    image: "garmin.jpg",
  },
];

class DataService {
  async getCatelog() {
    //get catelog from server
    //return list of products
    let response = await axios.get("http://127.0.0.1:5000/api/catalog");
    return response.data;
    //return mockCatalog;
  };

  async getCoupons() {

    let response = await axios.get("http://127.0.0.1:5000/api/couponCodes");
    return response.data;
  }
}

export default DataService;
