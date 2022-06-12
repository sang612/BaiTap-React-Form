const inittialState = {
  xucxacList: [],
  selected: "",
  win: 0,
  total: 0,
  result: "",
};

const xucxacReducer = (state = inittialState, action) => {
  switch (action.type) {
    case "CREATE_RANDOM":
      const xucxacList = [
        Math.floor(Math.random() * 6 + 1),
        Math.floor(Math.random() * 6 + 1),
        Math.floor(Math.random() * 6 + 1),
      ];
      console.log(xucxacList);
      return { ...state, xucxacList: xucxacList, total: state.total += 1};

    case "USER_SELECTED":
      console.log(action.selected);
      if (action.selected === "tai") return { ...state, selected: "Tài", result: "" };
      return { ...state, selected: "Xỉu", result: "" };

    case "CHECK_RESULT":
      let sum = 0;
      for (let item of state.xucxacList) {
        sum += item;
      }
      console.log("sum: ", sum, " select: " ,state.selected);
      if (sum >= 4 && sum <= 10 && state.selected === "Xỉu") {
        console.log("win");
        return { ...state, win: (state.win += 1), result: "Thắng" };
      }

      if (sum >= 11 && sum <= 17 && state.selected === "Tài") {
        console.log("win");
        return { ...state, win: (state.win += 1), result: "Thắng" };
      }

      return { ...state, result: "Thua"}

    default:
      return state;
  }
};

export default xucxacReducer;
