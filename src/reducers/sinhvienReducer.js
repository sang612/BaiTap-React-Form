const initialState = {
  svList: [],
  selectedSV: [],
  searchList: [],
};

const sinhvienReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_SV": {
      const svList = [...state.svList, action.sv];
      console.log(svList);
      return { ...state, svList };
    }

    case "REMOVE_SV": {
      const svList = state.svList.filter((sv) => sv.id !== action.id);
      return { ...state, svList };
    }

    case "SELECT_SV": {
      return { ...state, selectedSV: action.sv };
    }

    case "UPDATE_SV": {
      const svList = state.svList.map((svien) => {
        console.log("masv:", action.maSV);
        if (svien.id === action.maSV) {
          return { ...action.sv, id: action.maSV };
        }
        return svien;
      });
      return { ...state, svList, selectedSV: {} };
    }

    case "SEARCH_SV": {
      console.log(action.name);
      if (action.name) {
        let check = 0;
        action.name = action.name.toLowerCase().trim();
        const result = [];
        for (let i = 0; i < state.svList.length; i++) {
          let svName = state.svList[i].name.toLowerCase();
          if (svName.includes(action.name)) {
            result.push(state.svList[i]);
            check++;
          }
        }
        if (check === 0) {
          return { ...state, searchList: -1 };
        }
        return { ...state, searchList: result };
      }
      return { ...state, searchList: [] };
    }

    default:
      return state;
  }
};

export default sinhvienReducer;
