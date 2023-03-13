import { instance } from "../server.js"
import crypto from "crypto"

export const checkout = async (req,res)=>{
var options = {
  amount: Number(req.body.amount * 100), // amount in the smallest currency unit
  currency: "INR",
};
const order = await instance.orders.create(options);
res.status(200).json({
  success: true,
  order,
});
}
export const paymentVerification = async (req,res)=>{
console.log(req.body);
 const {razorpay_order_id,razorpay_payment_id,razorpay_signature} = req.body;
 const body=razorpay_order_id + "|" + razorpay_payment_id;
  var expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_API_SECRET)
    .update(body.toString())
    .digest("hex");
  if(expectedSignature=== razorpay_signature){
    res.redirect(
      `http://127.0.0.1:5173/paymentsuccess?reference=${razorpay_payment_id}`
    );
  }
  else{
    res.status(400).json({
      success: false,
    });
  }


}