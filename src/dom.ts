// dom
import { getTag } from "./type.ts";

// Blob
export function isBlob(payload: unknown): payload is Blob {
  const tag = getTag(payload);
  return tag === "Blob" || tag === "File" || payload instanceof Blob;
}

// File
export function isFile(payload: unknown): payload is File {
  return getTag(payload) === "File";
}

// FormData
export function isFormData(payload: unknown): payload is FormData {
  return getTag(payload) === "FormData";
}

// Headers
export function isHeaders(payload: unknown): payload is Headers {
  return getTag(payload) === "Headers";
}

// Request
export function isRequest(payload: unknown): payload is Request {
  return getTag(payload) === "Request";
}

// Response
export function isResponse(payload: unknown): payload is Response {
  return getTag(payload) === "Response";
}
