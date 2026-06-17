import { Request, Response } from 'express';
import prisma from '../utils/prisma';

export const createOrder = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = (req as any).user.id;
    const { items, shippingAddressId, couponId } = req.body;

    if (!items || items.length === 0) {
      res.status(400).json({ message: 'Order items cannot be empty' });
      return;
    }

    let total = 0;
    const orderItemsData = items.map((item: any) => {
      total += item.price * item.quantity;
      return {
        productId: item.productId,
        quantity: item.quantity,
        price: item.price,
      };
    });

    const order = await prisma.order.create({
      data: {
        userId,
        total,
        shippingAddressId,
        couponId,
        status: 'PENDING',
        items: {
          create: orderItemsData,
        },
      },
    });

    // Mock Razorpay Order Generation
    const mockRazorpayOrderId = `order_${Math.random().toString(36).substr(2, 9)}`;
    
    await prisma.order.update({
      where: { id: order.id },
      data: { razorpayOrderId: mockRazorpayOrderId },
    });

    res.status(201).json({
      message: 'Order created successfully',
      orderId: order.id,
      razorpayOrderId: mockRazorpayOrderId,
      amount: total,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error creating order' });
  }
};

export const verifyPayment = async (req: Request, res: Response): Promise<void> => {
  try {
    const { orderId, razorpayPaymentId, razorpaySignature } = req.body;

    if (!orderId || !razorpayPaymentId || !razorpaySignature) {
      res.status(400).json({ message: 'Missing payment details' });
      return;
    }

    // In a real app, verify signature here using razorpay sdk
    // const isValid = validateSignature(...)

    await prisma.order.update({
      where: { id: orderId },
      data: {
        status: 'PAID',
        razorpayPaymentId,
        razorpaySignature,
      },
    });

    res.status(200).json({ message: 'Payment verified successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error verifying payment' });
  }
};

export const getMyOrders = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = (req as any).user.id;
    const orders = await prisma.order.findMany({
      where: { userId },
      include: { items: { include: { product: true } } },
      orderBy: { createdAt: 'desc' },
    });

    res.status(200).json({ orders });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error fetching orders' });
  }
};
