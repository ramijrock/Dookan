import {sendGetAuthRequest, sendGetRequest, sendPostData, sendAuthPostData} from '../../utils/requestHelper';
import Configs from '../../Configs/config';


export const getCategoryData = () => {
    let url = Configs.BASE_URL + "categories";
    return sendGetAuthRequest(url);
};

export const getSubCategoryData = (catId) => {
    let url = Configs.BASE_URL + `subcategory/getSubCategoryByid?catid=${catId}`;
    return sendGetRequest(url);
};

export const getProductByCatId = (catId) => {
    let url = Configs.BASE_URL + `products/BycategoryID?categoryid=${catId}`;
    return sendGetAuthRequest(url);
};

export const getProductBySubCatId = (subCatId) => {
    let url = Configs.BASE_URL + `products/BysubcategoryID?subcatid=${subCatId}`;
    return sendGetAuthRequest(url);
};

export const getProductByProId = (productId) => {
    let url = Configs.BASE_URL + `products/ByproductID?productid=${productId}`;
    return sendGetAuthRequest(url);
};

export const addFavourite = (requestObj) => {
    let url = Configs.BASE_URL + `favourite/addtofavourite`;
    return sendPostData(url, requestObj);
}

export const getAllFavourite = (userId) => {
    let url = Configs.BASE_URL + `favourite/gatallfavourite?userid=${userId}`;
    return sendGetRequest(url);
}

export const removeFromFavourite = ( requestObj, productId ) => {
    let url = Configs.BASE_URL + `favourite/removefromfavourite?productid=${productId}`;
    return sendPostData(url, requestObj);
}

export const changePassword = ( requestObj ) => {
    let url = Configs.BASE_URL + `changePassword`;
    return sendAuthPostData(url, requestObj);
}
