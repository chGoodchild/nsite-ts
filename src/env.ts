import "dotenv/config";
import xbytes from "xbytes";

const LOOKUP_RELAYS = process.env.LOOKUP_RELAYS?.split(",").map((u) => u.trim()) ?? [
  "wss://user.kindpag.es/",
  "wss://purplepag.es/",
];
const SUBSCRIPTION_RELAYS = process.env.SUBSCRIPTION_RELAYS?.split(",").map((u) => u.trim()) ?? [];
const BLOSSOM_SERVERS = process.env.BLOSSOM_SERVERS?.split(",").map((u) => u.trim()) ?? [];

const MAX_FILE_SIZE = process.env.MAX_FILE_SIZE ? xbytes.parseSize(process.env.MAX_FILE_SIZE) : Infinity;

const NGINX_CACHE_DIR = process.env.NGINX_CACHE_DIR;
const CACHE_PATH = process.env.CACHE_PATH;

const PAC_PROXY = process.env.PAC_PROXY;
const TOR_PROXY = process.env.TOR_PROXY;
const I2P_PROXY = process.env.I2P_PROXY;

export {
  SUBSCRIPTION_RELAYS,
  LOOKUP_RELAYS,
  BLOSSOM_SERVERS,
  MAX_FILE_SIZE,
  NGINX_CACHE_DIR,
  CACHE_PATH,
  PAC_PROXY,
  TOR_PROXY,
  I2P_PROXY,
};
