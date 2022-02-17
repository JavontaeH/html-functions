const computer = {
  id: 1,
  manufacturer: "Apple",
  make: "Macbook",
  model: "Pro",
  specs: {
    memory: 32,
    hardDrive: "500 GB",
    processor: 2.4,
  },
};

const computerHTMLMaker = (computerObject) => {
  const computerHTMLSection = `<section> your ${computerObject.manufacturer} ${computerObject.make} ${computerObject.model} has the specs of memory: ${computerObject.specs.memory} GBS, processor: ${computerObject.specs.processor} Ghz and storage: ${computerObject.specs.hardDrive}`;
  return computerHTMLSection;
};

let compHTML = computerHTMLMaker(computer);

console.log(compHTML);
