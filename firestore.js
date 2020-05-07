const firebaseEmulator = require('@firebase/testing')
const firestore = firebaseEmulator.initializeTestApp({ projectId: "staging-bengal" }).firestore()
module.exports = firestore
