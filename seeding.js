  //user
  await connectToDB();
  const adminPassword = await bcrypt.hash('admin123', 10);
  const userPassword = await bcrypt.hash('user123', 10);

  const users = [
    {
      username: 'admin',
      email: 'admin@example.com',
      password: adminPassword,
      role: 'admin',
      walletAddress: '0xAdminWalletAddress123',
    },
    {
      username: 'user',
      email: 'user@example.com',
      password: userPassword,
      role: 'user',
      walletAddress: '0xUserWalletAddress456',
    },
  ];

  try {
    await User.deleteMany(); // Clear existing users
    const result = await User.insertMany(users);
    console.log('Users seeded successfully:', result);
  } catch (error) {
    console.error('Error seeding users:', error);
  }


  //investmentplan
  await connectDB();

  const plans = [
    { name: 'Starter Plan', minAmount: 200, maxAmount: 500, roi: 38, duration: '3 months' },
    { name: 'Standard Plan', minAmount: 501, maxAmount: 750, roi: 40, duration: '6 months' },
    { name: 'Premium Plan', minAmount: 751, maxAmount: 1000, roi: 42, duration: '12 months' },
  ];

  try {
    await InvestmentPlan.deleteMany(); // Clear existing data
    const result = await InvestmentPlan.insertMany(plans);
    console.log('Investment plans seeded successfully:', result);
  } catch (error) {
    console.error('Error seeding investment plans:', error);
  }