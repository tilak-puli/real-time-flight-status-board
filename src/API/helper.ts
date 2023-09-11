export function promiseWrapper<T>(promise: Promise<T>): () => T {
  let status = "pending";
  let result: any;

  const s = promise.then(
    (value) => {
      status = "success";
      result = value;
    },
    (error) => {
      status = "error";
      result = error;
    },
  );

  return () => {
    switch (status) {
      case "pending":
        throw s;
      case "success":
        return { ...result, updatedOn: Date.now() };
      case "error":
        throw result;
      default:
        throw new Error("Unknown status");
    }
  };
}
