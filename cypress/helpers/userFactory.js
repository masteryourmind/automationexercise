
export function createRegistrationUser(defaults) {
  const uniqueId = `${Date.now()}${Math.floor(Math.random() * 10000)}`;

  return {
    ...defaults,
    name: `Test User ${uniqueId}`,
    email: `testuser${uniqueId}@example.com`,
  };
}
