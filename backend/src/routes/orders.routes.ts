import { Router } from 'express';
import { createOrder, verifyPayment, getMyOrders } from '../controllers/orders.controller';
import { authenticate } from '../middleware/auth.middleware';

const router = Router();

router.use(authenticate);

router.post('/checkout', createOrder);
router.post('/verify', verifyPayment);
router.get('/my-orders', getMyOrders);

export default router;
