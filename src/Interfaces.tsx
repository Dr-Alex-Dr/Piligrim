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