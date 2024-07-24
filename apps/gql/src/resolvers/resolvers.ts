export const resolvers = {
  Query: {
    hello: (): string => 'Hello world!',
    user: (parent: any, args: { id: string }): { id: string; name: string; email: string } | null => {
      // Dummy user data
      const users = [
        { id: '01J389TGR4HCXY2N105HD4Y6AS', name: 'abc', email: 'abc@example.com' },
        { id: '01J389TNWGEQP3QCGES42H7ZWA', name: 'xyz', email: 'xyz@example.com' },
      ];

      // Find user by id
      return users.find(user => user.id === args.id) || null;
    },
  },
};
