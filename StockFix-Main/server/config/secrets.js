module.exports = {

  db: process.env.MONGODB || process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost:27017/stripe-membership',

  sessionSecret: process.env.SESSION_SECRET || 'mawsom',

  mailgun: {
    user: process.env.MAILGUN_USER || '',
    password: process.env.MAILGUN_PASSWORD || ''
  },

  stripeOptions: {
    apiKey: process.env.STRIPE_KEY || 'sk_test_21C53Hm0pTF6G5wDp12HGX8W',
    stripePubKey: process.env.STRIPE_PUB_KEY || 'pk_test_MdwLnI420A1OSE8Iu22DqoKJ',
    defaultPlan: 'free',
    plans: ['free', 'silver', 'gold', 'platinum'],
    planData: {
      'free': {
        name: 'Free',
        price: 0
      },
      'silver': {
        name: 'Silver',
        price: 9
      },
      'gold': {
        name: 'Gold',
        price: 19
      },
      'platinum': {
        name: 'Platinum',
        price: 29
      }
    }
  },

  googleAnalytics: process.env.GOOGLE_ANALYTICS || ''
};
