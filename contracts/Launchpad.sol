// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MemecoinLaunchpad is Ownable {
    constructor() Ownable(msg.sender) {}
    uint256 public feePercent = 1;
    uint256 public treasuryFee;
    uint256 public totalRaised;

    struct Launch {
        IERC20 token;
        address creator;
        uint256 supply;
        uint256 price;
        bool active;
    }

    Launch[] public launches;

    event LaunchCreated(uint256 indexed id, address indexed token, address creator);
    event TokensBought(uint256 indexed id, address buyer, uint256 amount, uint256 cost);

    function createLaunch(
        address tokenAddress,
        uint256 supply,
        uint256 pricePerToken
    ) external onlyOwner {
        require(pricePerToken > 0, "Price must be > 0");
        IERC20 token = IERC20(tokenAddress);
        require(token.balanceOf(msg.sender) >= supply, "Insufficient balance");
        require(token.allowance(msg.sender, address(this)) >= supply, "Allowance too low");

        token.transferFrom(msg.sender, address(this), supply);

        launches.push(Launch({
            token: token,
            creator: msg.sender,
            supply: supply,
            price: pricePerToken,
            active: true
        }));

        emit LaunchCreated(launches.length - 1, tokenAddress, msg.sender);
    }

    function buyTokens(uint256 launchId) external payable {
        Launch storage launch = launches[launchId];
        require(launch.active, "Launch not active");
        require(msg.value > 0, "Send ETH to buy");

        uint256 amount = msg.value / launch.price;
        require(amount > 0 && amount <= launch.supply, "Invalid amount");

        uint256 fee = msg.value * feePercent / 100;
        uint256 netAmount = msg.value - fee;

        treasuryFee += fee;
        totalRaised += netAmount;

        launch.supply -= amount;
        if (launch.supply == 0) {
            launch.active = false;
        }

        launch.token.transfer(msg.sender, amount);
        payable(launch.creator).transfer(netAmount);
        emit TokensBought(launchId, msg.sender, amount, msg.value);
    }

    function withdrawTreasury() external onlyOwner {
        payable(owner()).transfer(treasuryFee);
        treasuryFee = 0;
    }
}
