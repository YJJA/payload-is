// Error

export function isError(payload: unknown): payload is Error {
  return payload instanceof Error;
}

export function isEvalError(payload: unknown): payload is EvalError {
  return payload instanceof EvalError;
}

export function isRangeError(payload: unknown): payload is RangeError {
  return payload instanceof RangeError;
}

export function isReferenceError(payload: unknown): payload is ReferenceError {
  return payload instanceof ReferenceError;
}

export function isSyntaxError(payload: unknown): payload is SyntaxError {
  return payload instanceof SyntaxError;
}

export function isTypeError(payload: unknown): payload is TypeError {
  return payload instanceof TypeError;
}

export function isURIError(payload: unknown): payload is URIError {
  return payload instanceof URIError;
}

export function isNativeError(
  payload: unknown
): payload is
  | EvalError
  | RangeError
  | ReferenceError
  | SyntaxError
  | TypeError
  | URIError {
  return (
    isEvalError(payload) ||
    isRangeError(payload) ||
    isReferenceError(payload) ||
    isSyntaxError(payload) ||
    isTypeError(payload) ||
    isURIError(payload)
  );
}
