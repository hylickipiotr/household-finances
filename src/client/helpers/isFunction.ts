type IsFunction = (object: unknown) => boolean;

const isFunction: IsFunction = (object) => object instanceof Function;

export { isFunction };
