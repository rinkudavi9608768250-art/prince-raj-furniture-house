import { Enquiry } from '../models/Enquiry.js';

export const createEnquiry = async (req, res, next) => {
  try {
    const enquiry = await Enquiry.create(req.body);
    res.status(201).json(enquiry);
  } catch (error) {
    next(error);
  }
};
