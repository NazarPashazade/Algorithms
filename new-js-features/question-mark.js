

const obj = {
    name: "JS",
    frameworks: ['Vue', 'React', "Angular"],
    print: () => console.log("Javascript")
}

obj.print()                 //Javascript
obj.printValue?.()

obj.frameworks[2]           // Angular
obj.frameworks?.[22]
obj.frameworks?.[22]?.toLowerCase()