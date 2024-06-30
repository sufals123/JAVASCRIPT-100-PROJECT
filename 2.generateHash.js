const generateHas = (str) => {
  str = str.split(" ");
  str = str.map((currentElement) => {
    return currentElement.replace(

      currentElement[0],
      currentElement[0].toUpperCase()
      
    );
  });

  console.log("#" + str.join(""));
};

generateHas("i am safu");
