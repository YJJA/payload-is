import { getType } from "./utils.js";

// file

export function isBlob(payload: unknown): payload is Blob {
  return getType(payload) === "Blob";
}

export function isFile(payload: unknown): payload is File {
  return getType(payload) === "File";
}