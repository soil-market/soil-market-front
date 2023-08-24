function generateUniqueID(): string {
  const timestamp = Date.now(); // Get current timestamp in milliseconds
  const uniqueID = `${timestamp}${Math.random().toString()}`;
  return uniqueID;
}
