import React from "react";

const WalletModal = ({ onSelect, onClose }) => {
  const wallets = [
    "Binance Wallet",
    "Safepal",
    "Wallet Connect",
    "Trust Wallet",
    "Metamask",
    "Liquality",
    "Phantom Wallet",
    "Polygon Wallet",
    "Rainbow",
    "Bitpay",
    "Walleth",
    "Argent",
    "Huobi Wallet",
    "Encrypted Ink",
    "Compound",
    "Polkadot",
    "Iotex",
    "Petra wallet",
    "Pera Algo Wallet",
    "Defly wallet",
    "Coin98",
    "Coinbase",
    "Crypto.com | Defi Wallet",
    "Token Pocket",
    "Math Wallet",
    "Ledger Live",
    "1Inch",
    "Dharma",
    "Trust Vault",
    "MYKEY",
    "Atomic",
    "CoolWallet S",
    "Nash",
    "Coinomi",
    "Eternl",
    "GridPlus",
    "Tokenary",
    "SafePal",
    "Infinito",
    "Wallet.io",
    "Ownbit",
    "EasyPocket",
    "Bridge Wallet",
    "ViaWallet",
    "BitKeep",
    "Unstoppable Wallet",
    "HaloDefi Wallet",
    "Dok Wallet",
    "Cello Wallet",
    "CoinUs",
    "Valora",
    "Trustee Wallet",
    "Gaurda Wallet",
    "Jade Wallet",
    "PlasmaPay",
    "O3Wallet",
    "HashKey Me",
    "RWallet",
    "Flare Wallet",
    "KyberSwap",
    "AToken Wallet",
    "Tongue Wallet",
    "XinFin XDC Network",
    "Talken Wallet",
    "KEYRING PRO",
    "Midas Wallet",
    "AT.Wallet",
    "imToken",
    "Solflare",
    "Nova",
    "Braavos",
    "Brave",
    "Xverse",
    "Leather",
    "Keplr",
    "Thor",
    "Rabby",
    "Backpack Wallet",
    "Sui Wallet",
    "OKX Wallet",
    "Glow Wallet",
    "Blockchain Wallet",
    "Nami",
    "Trezor",
    "Pera",
    "Leap",
    "Sei",
    "Stacks",
    "Internet identity",
    "Other",
  ];

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-4 rounded shadow-md w-ful max-h-[80vh] overflow-y-auto">
        <div className="">
          <h3 className="mb-4  font-semibold">Chose Your Wallet</h3>
        </div>

        {/* 2-Column Grid Layout with scrollable container */}
        <div className="grid grid-cols-2 gap-2">
          {wallets.map((wallet) => (
            <button
              key={wallet}
              onClick={() => {
                onSelect(wallet);
                onClose();
              }}
              className="w-full text-left px-4 py-2 bg-gray-100 rounded hover:bg-gray-200"
            >
              {wallet}
            </button>
          ))}
        </div>

        <button
          onClick={onClose}
          className="mt-4 w-full text-sm text-blue-500 hover:underline"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default WalletModal;
