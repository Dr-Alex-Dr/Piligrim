export {};

declare module "*.module.css";

declare global {
  interface Window {
    Telegram: any;
  }
}