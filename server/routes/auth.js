import express from 'express';
const router = express.Router();

import { signup, signin, forgotPassword, resetPassword, uploadImage } from '../controllers/auth';

router.get('/', (req, res) => {
    return res.json({
        data: 'hello world from the API'
    });
});

router.post('/signup', signup);
router.post('/signin', signin);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password', resetPassword);
router.post('/upload-image', uploadImage);

export default router;