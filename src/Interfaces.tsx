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
    id?: string,
    image?: string,
    name?: string,
    balance_nano?: number
  }