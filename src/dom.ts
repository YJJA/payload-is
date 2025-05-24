// file

export function isBlob(payload: unknown): payload is Blob {
  return payload instanceof Blob;
}

export function isFile(payload: unknown): payload is File {
  return payload instanceof File;
}
