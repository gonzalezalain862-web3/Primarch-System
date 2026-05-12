// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title MemecoinLaunchpad
 * @dev Plataforma simple para crear y comerciar memecoins.
 * Los usuarios pagan un fee (en ETH) para crear su token.
 * Un 1% de cada compra se destina al propietario del launchpad.
 */
contract MemecoinLaunchpad is Ownable {
    // Fee que paga el creador del token (en wei)
    uint256 public creationFee = 0.001 ether;
    // Porcentaje de fee por cada compra (1%)
    uint256 public tradingFeePercent = 1;
    // Contador de tokens creados
    uint256 public totalTokensCreated;

    struct TokenInfo {
        address tokenAddress;
        string name;
        string symbol;
        address creator;
        uint256 totalSupply;
    }

    // Mapeo de id => información del token
    mapping(uint256 => TokenInfo) public tokens;
    // Registro rápido para saber si un token está listado
    mapping(address => bool) public listedTokens;

    // Evento emitido al crear un token nuevo
    event TokenCreated(
        uint256 indexed id,
        address indexed tokenAddress,
        string name,
        string symbol,
        address creator
    );

    constructor() Ownable(msg.sender) {}

    /**
     * @dev Crea un nuevo token ERC20.
     * @param name Nombre del token
     * @param symbol Símbolo del token
     * @param totalSupply Suministro total inicial (se asigna al creador)
     */
    function createToken(
        string memory name,
        string memory symbol,
        uint256 totalSupply
    ) external payable returns (address) {
        require(msg.value >= creationFee, "Fee insuficiente");

        // Desplegar un token nuevo que asigna el suministro al creador
        Memecoin newToken = new Memecoin(name, symbol, totalSupply, msg.sender);

        uint256 id = ++totalTokensCreated;
        tokens[id] = TokenInfo({
            tokenAddress: address(newToken),
            name: name,
            symbol: symbol,
            creator: msg.sender,
            totalSupply: totalSupply
        });
        listedTokens[address(newToken)] = true;

        emit TokenCreated(id, address(newToken), name, symbol, msg.sender);
        return address(newToken);
    }

    /**
     * @dev Permite a un usuario comprar tokens de un memecoin listado.
     *      El 1% del monto enviado se transfiere al propietario del launchpad.
     *      (Versión simplificada; en un producto real se usaría una curva de bonding o AMM.)
     */
    function buyToken(address tokenAddress) external payable {
        require(listedTokens[tokenAddress], "Token no listado");
        uint256 fee = (msg.value * tradingFeePercent) / 100;
        uint256 amount = msg.value - fee;

        // Transferir el fee al dueño del launchpad
        payable(owner()).transfer(fee);

        // Transferir el resto al vendedor (en esta versión simple, asumimos que el contrato tiene liquidez)
        // En una implementación real, aquí interactuarías con un pool de liquidez.
        // Por ahora, solo emitimos un evento (puedes extenderlo después).
    }

    /**
     * @dev Permite al propietario retirar los fees acumulados en el contrato.
     */
    function withdrawFees() external onlyOwner {
        payable(owner()).transfer(address(this).balance);
    }
}

/**
 * @title Memecoin
 * @dev Contrato ERC20 simple que asigna todo el suministro inicial al creador.
 */
contract Memecoin is ERC20 {
    constructor(
        string memory name,
        string memory symbol,
        uint256 totalSupply,
        address creator
    ) ERC20(name, symbol) {
        _mint(creator, totalSupply);
    }
}
