export const filterReducer = (state , action) => {
switch(action.type){
    case "LOAD_FILTER_PRODUCTS":
        let priceArr = action.payload.map((curr)=>{
                return curr.price
        })
        // firstway
        // console.log(Math.min.apply( Math , priceArr));
        // secondway
        // let maxPrice = priceArr.reduce(
        //     (initiaval , currval)=> Math.max(initiaval , currval),0)
        // console.log(maxPrice)
        // third wway
          let maxPrice = Math.max(...priceArr);
          console.log(maxPrice)
        return{
            ...state,
            filter_products :[ ...action.payload],
            all_products :[...action.payload],
            filters:{...state.filters , maxPrice :maxPrice , price : maxPrice}
        }

    case "SET_GRIDVIEW" :
        return{
            ...state,
            grid_view: true,
        }
    
    case "SET_LISTVIEW":
        return{
            ...state,
            grid_view:false,
        }

    
    case "SET_SORT":
        return{
            ...state,
            sorting_value: action.payload
        }

    case "SORTING_PRODUCTS":
        let newSortData=[];
        let tempSortProduct =action.payload;
        if(state.sorting_value=== "a-z"){
            newSortData = tempSortProduct.sort((a,b)=> a.name.localeCompare(b.name))
        }
        if(state.sorting_value ==="z-a"){
            newSortData = tempSortProduct.sort((a, b)=>b.name.localeCompare(a.name))
        }
        if(state.sorting_value ==="lowest"){
            newSortData = tempSortProduct.sort((a, b)=>a.price - b.price);
        }
        if(state.sorting_value ==="highest") { newSortData = tempSortProduct.sort((a, b)=>b.price - a.price);}
        return{
            ...state , 
            filter_products: newSortData,
        }

    case "UPDATE_FILTER_VALUE":
        const{name , value} = action.payload
        return{
            ...state,
            filters:{
                ...state.filters,
                [name] : value,
            }

        }
    
    case "FILTER_PRODUCTS":
        let {all_products} = state;
        let tempFilterProduct = [...all_products];
        const{text,category,company, color, price} = state.filters;
        if(text){
            tempFilterProduct = tempFilterProduct.filter((curre)=>{
                return curre.name.toLowerCase().includes(text);
            })
        }
        if(category!="all"){
            console.log(category);
            tempFilterProduct = tempFilterProduct.filter((currelement)=>{
                return currelement.category === category;
            })
        }
        if(company!="all"){
            tempFilterProduct = tempFilterProduct.filter((currelement)=>{
                return currelement.company === company;
            })
        }
        if(color !='all'){
            tempFilterProduct = tempFilterProduct.filter((currelement)=>{
                return currelement.colors.includes(color); 
            })
        }
        if(price){
            tempFilterProduct = tempFilterProduct.filter((currelement)=>{
                return price>=currelement.price;
            })
        }

        return {
            ...state,
            filter_products: tempFilterProduct,
        }
    
    case "CLEAR-FILTER":
        return {
            ...state,
            filters:{...state ,text:"",category:"all", company:"all",color:"all", maxPrice:0 , price:0  , minPrice:0,},
        }
        
    default:
        return state;
}
}
