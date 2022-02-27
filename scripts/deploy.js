const { ethers } = require("hardhat")

async function main() {
  const CryptoBeetles = await ethers.getContractFactory("CryptoBeetles")
  const cryptoBeetles = await CryptoBeetles.deploy("CryptoBeetles", "CBEET")

  await cryptoBeetles.deployed()
  console.log(`Contract successfully deployed to ${cryptoBeetles.address}`)

  const newItemId1 = await cryptoBeetles.mint("https://ipfs.io/ipfs/QmSgF5GanmEvZjQ3VYj9r83kvp5zeXe9UcihHxK4PKVzJ2")
  const newItemId2 = await cryptoBeetles.mint("https://ipfs.io/ipfs/QmQdB3Vp3k2nn2yqkReEWJEd6vkaDApofvGep9HXBfmLi9")
  const newItemId3 = await cryptoBeetles.mint("https://ipfs.io/ipfs/QmXqPBGe3vgy25fQPCM3GSsHZSysnsZ3ZcEjmcVHMNWqAu")
  console.log(`NFT minted successfully :: ${newItemId1}`)
  console.log(`NFT minted successfully :: ${newItemId2}`)
  console.log(`NFT minted successfully :: ${newItemId3}`)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });