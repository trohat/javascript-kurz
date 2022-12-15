let medaile = "stříbrná";

// if (medaile === "zlatá") {
//     console.log("Jsi nejlepší...")
// } else if (medaile === "stříbrná") {
//     console.log("Nejsi nejlepší, ale pořád dost dobrej výkon!!")
// } else if (medaile === "bronzová") {
//     console.log("Nejsi první ani druhý, ale pořád je to výborné umístění")
// } else if (medaile === "bramborová") {
//     console.log("Škoda, těsně ti uniklo stříbro...")
// } else {
//     console.log("Gratuluju ti že jsi doběhl do cíle.")
// }

switch (medaile) {
    case "zlatá":
        console.log("Jsi nejlepší...");
        break;
    case "stříbrná":
        console.log("Nejsi nejlepší, ale pořád dost dobrej výkon!!")
        break;
    case "bronzová":
        console.log("Nejsi první ani druhý, ale pořád je to výborné umístění")
        break;
    case "bramborová":
        console.log("Škoda, těsně ti uniklo stříbro...")
        break;
    default:
        console.log("Gratuluju ti že jsi doběhl do cíle.")
        break;
}

