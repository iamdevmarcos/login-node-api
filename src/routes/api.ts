import { Router } from 'express';

const router = Router();

router.get('/admin', (req, res) => res.json({ success: true }));

export default router;