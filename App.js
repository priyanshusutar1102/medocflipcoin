function coinToss() {
    try {
        const randomNum = Math.floor(Math.random() * 2);
        return randomNum === 0 ? "heads" : "tails";
    } catch (error) {
        console.log(`Error: ${error}`);
        return null;
    }
}
