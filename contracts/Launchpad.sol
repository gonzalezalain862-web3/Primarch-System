// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MemecoinLaunchpad is Ownable {
    uint256 public feePercent = 1; // 1%
    uint256 public treasuryFee;
    uint256 public totalRaised;

    struct TokenSale {
        address token;
        string symbol;
        address creator;
        uint256 supply;
        uint256 price; // en wei
        bool active;
    }

    TokenSale[] public sales;

    event TokenCreated(uint256 indexed id, address indexed token, string symbol, address creator);
    event TokensBought(uint256 indexed id, address buyer, uint256 amount, uint256 cost);

    constructor() Ownable(msg.sender) {}

    function createToken(
        string memory name,
        string memory symbol,
        uint256 initialSupply,
        uint256 pricePerToken
    ) external payable {
        require(pricePerToken > 0, "Price must be > 0");
        // Crear el token ERC20
        MyToken newToken = new MyToken(name, symbol, initialSupply);
        newToken.transferFrom(msg.sender, address(this), initialSupply);
        
        sales.push(TokenSale({
            token: address(newToken),
            symbol: symbol,
            creator: msg.sender,
            supply: initialSupply,
            price: pricePerToken,
            active: true
        }));
        
        emit TokenCreated(sales.length - 1, address(newToken), symbol, msg.sender);
    }

    function buyTokens(uint256 saleId) external payable {
        TokenSale storage sale = sales[saleId];
        require(sale.active, "Sale not active");
        uint256 amount = msg.value / sale.price;
        require(amount > 0 && amount <= sale.supply, "Invalid amount");
        
        uint256 fee = msg.value * feePercent / 100;
        treasuryFee += fee;
        uint256 netAmount = msg.value - fee;
        
        sale.supply -= amount;
        totalRaised += netAmount;
        
        // Transferir tokens al comprador
        IERC20(sale.token).transfer(msg.sender, amount);
        // Enviar ETH al creador
        payable(sale.creator).transfer(netAmount);
        
        emit TokensBought(saleId, msg.sender, amount, msg.value);
    }

    function withdrawFees() external onlyOwner {
        payable(owner()).transfer(treasuryFee);
        treasuryFee = 0;
    }
}

contract MyToken is ERC20 {
    constructor(string memory name, string memory symbol, uint256 initialSupply) ERC20(name, symbol) {
        _mint(msg.sender, initialSupply * 10**decimals());
    }
}

interface IERC20 {
    function transfer(address to, uint256 amount) external returns (bool);
}
