export interface ICoin {
    address: string;
    balance_nano: number;
    balance_ok: boolean;
    created_at: string;
    description: string;
    id: string;
    image: string;
    is_oem: boolean;
    is_self_writing: boolean;
    name: string;
    price_oem_nano: number;
    symbol: string;
    updated_at: string;
  }

export interface IBonus {
    id: string,
    image: string,
    name: string,
    balance_nano: number
  }

export const exampleCoin: ICoin = {
  address: "",
  balance_nano: 0,
  balance_ok: true,
  created_at: "",
  description: "",
  id: "",
  image: "",
  is_oem: false,
  is_self_writing: true,
  name: "",
  price_oem_nano: 0,
  symbol: "",
  updated_at: "",
};

export interface ICoinProps {
  coins: ICoin[] 
}

export interface History {
  date: string;
  quantity: string;
  type: string;
}
  
export interface HistoryProps {
  HistoryList: History[];
}

export interface ITransaction {
  type: string;
  success: boolean;
  amount_nano: number;
  from: string;
  from_wallet_data: IWalletData;
  to: string;
  to_wallet_data: IWalletData;
  comment: string;
  lt: number;
  time: string;
  tx: string;
}

export interface IWalletData {
  wallet_type: string;
  id: string;
}