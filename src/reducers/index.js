import {
  FILTERLIST,
  EMPTYBASKET,
  ADDLISTELEMENT,
  CHECKLISTELEMENT,
} from "../constants/index";

const initialState = {
  groceries_list: [
    "Strawberry",
    "Blueberry",
    "Orange",
    "Banana",
    "Apple",
    "Carrot",
    "Celery",
    "Mushroom",
    "Green Pepper",
    "Eggs",
    "Cheese",
    "Butter",
    "Chicken",
    "Beef",
    "Pork",
    "Fish",
    "Rice",
    "Pasta",
    "Bread",
  ],
  Cart_list: { Strawberry: 1, Carrot: 1, Eggs: 1, Chicken: 1, Rice: 1 },
  filter_String: "",
  checked: [],
};

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTERLIST:
      return { ...state, filter_String: action.payload };

    case EMPTYBASKET:
      return { ...state, Cart_list: {} , checked:[] };

    case ADDLISTELEMENT:
      const count =
        (state.Cart_list[action.payload]
          ? state.Cart_list[action.payload]
          : 0) + 1;
      return { ...state ,
        Cart_list: { ...state.Cart_list, [action.payload]: count },
      }

      case CHECKLISTELEMENT :  
      if (!state.checked.includes(action.payload)) {
        return{...state , 
          checked: [...state.checked, action.payload]
        }
      } else {
        const newCheckList = state.checked.filter((data) => {
          return data !== action.payload;
        });
        return {
          ...state , checked: newCheckList
        }
      }

    default:
      return state;
  }
};

export default listReducer;
