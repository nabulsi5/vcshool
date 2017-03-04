var uuid = require("uuid");
var bounties = [
    {
        id: uuid.v4(),
        firstName: "jameel",
        lastName: "edlbi",
        living: true,
        bountyAmount: 50,
        type: "sith"
}
];
module.exports = bounties;