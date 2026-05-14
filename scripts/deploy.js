const hre = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Desplegando con la cuenta:", deployer.address);
  console.log("Saldo de la cuenta:", (await deployer.provider.getBalance(deployer.address)).toString());

  const MemecoinLaunchpad = await ethers.getContractFactory("MemecoinLaunchpad");
  const contract = await MemecoinLaunchpad.deploy();
  await contract.waitForDeployment();

  const contractAddress = await contract.getAddress();
  console.log("✅ Contrato MemecoinLaunchpad desplegado en:", contractAddress);
  console.log("📋 Guarda esta dirección para Vercel:");
  console.log("NEXT_PUBLIC_CONTRACT_ADDRESS=" + contractAddress);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
