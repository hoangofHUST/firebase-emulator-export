const router = require('express').Router();
const firestore = require('../firestore');
const userCollection = firestore.collection('users');

// router.use(cors);
router.get('/get-all', async (req,res) =>{
    res.send((await userCollection.get()).docs.map(e => ({[e.id]: e.data()})))
}
)
router.get('/:docId', async (req,res) => {
    const { docId } = req.params;
    const user = await userCollection.doc(String(docId)).get();
    
    if (!user.exists) return res.status(404).json('NotFound!');
    res.send(user.data());
})

router.delete('/:docId', async(req,res) => {
    const { docId } = req.params;
    const user = await userCollection.doc(String(docId)).get();
    
    if (!user.exists) return res.status(404).json('NotFound!');
    await userCollection.doc(String(docId)).delete();

    res.status(204).json();
})

router.post('/', async (req,res) => {
    const newUser = await userCollection.add(req.body)
    res.status(200).json(newUser.id);
})

module.exports = router;
    