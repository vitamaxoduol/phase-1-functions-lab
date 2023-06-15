// Code your solution in this file!
function distanceFromHqInBlocks(blockNumber) {
    if (blockNumber >= 42) {
        return blockNumber - 42
    } else {
        return 42 - blockNumber
    };
}

function distanceFromHqInFeet(blockNumber) {
    const blocks = distanceFromHqInBlocks(blockNumber);
    const feetPerBlock = 264;
    return blocks * feetPerBlock
    }

function distanceTravelledInFeet(destinationBlock, startBlock)  {

    // const startBlock = 43;
    // const destinationBlock = 48;
    // const resultBlocks = destinationBlock - startBlock;
    // const FeetPerBlock = 264;
    // // const differenceInBlock = distanceTravelledInFeet(destinationBlock - startBlock);
    // return resultBlocks * FeetPerBlock;
    const differenceInBlock =  destinationBlock >= startBlock ? destinationBlock - startBlock : startBlock - destinationBlock;
    const feetPerBlock = 264;
    return differenceInBlock * feetPerBlock;

}

function calculatesFarePrice(start, destination) {
    const feetPerBlock = 264;
    const blockCoverage = destination >= start ? destination - start : start - destination;
    const freeFeet = 400;
    const farePricePerFoot= 0.02
    const maximumFeet = 2500;

    if (blockCoverage <= freeFeet) {
        return 0
    } else if (blockCoverage > freefeet && blockCoverage <= 2000) {
        const paidFeet = blockCoverage - freeFeet;
        const farePrice = paidFeet * farePricePerFoot;
        return parseFloat(farePrice.toFixed(2));
    } else if (blockCoverage > 2000 && blockCoverage <= maximumFeet) {
        return 25
    } else {
        return "cannot travel that far";
    }

}


