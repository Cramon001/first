import React from "react";

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
  "Others",
];

//// to select wallet //
const handleSelect = (walletName) => {
  onWalletSelect(walletName);
  closeModal();
};
const FirstModal = ({ closeModal, openLoader }) => {
  return (
    <div className="bg-white p-6 rounded-lg max-h-[80vh] overflow-y-auto w-[90vw] max-w-2xl relative">
      <button
        onClick={closeModal}
        className="absolute top-2 right-2 text-gray-500 hover:text-black text-2xl font-bold"
      >
        &times;
      </button>

      <h2 className="text-2xl font-bold mb-4 text-center">Select a Wallet</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {wallets.map((wallet, index) => (
          <button
            key={wallet}
            onClick={openLoader}
            className="bg-gray-100 hover:bg-gray-200 text-sm text-gray-800 font-medium px-3 py-2 rounded shadow cursor-pointer"
          >
            {wallet}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FirstModal;
