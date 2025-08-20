let fruit={
    oranges:{
        type: "sweet",
        quan: 10,
    },
    plum:{
        cond:"good",
    }
};
fruit.message = `I have ${fruit.oranges.quan} ${fruit.oranges.type} oranges. And some ${fruit.plum.cond} plums.`

exports.fruit=fruit;

