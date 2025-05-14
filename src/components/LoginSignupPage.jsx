// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Mail, Lock, User, ArrowRight, Github, Twitter } from "lucide-react";
// import { Button, Checkbox, Form, Input } from "antd";
// const LoginSignupPage = () => {
//   const [isLogin, setIsLogin] = useState(true);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [name, setName] = useState("");

//   const toggleMode = () => setIsLogin(!isLogin);

//   return (
//     <AnimatePresence mode="wait">
//       <motion.div
//         key={isLogin ? "login" : "signup"}
//         initial="hidden"
//         animate="visible"
//         exit="hidden"
//         // variants={formVariants}
//         transition={{ duration: 0.3 }}
//       >
//         <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">
//           {isLogin ? "Welcome back" : "Create account"}
//         </h1>
//         <div className="space-y-4">{!isLogin}</div>
//         <Form
//           name="basic"
//           labelCol={{ span: 8 }}
//           wrapperCol={{ span: 16 }}
//           style={{ maxWidth: 600 }}
//           initialValues={{ remember: true }}
//           // onFinish={onFinish}
//           // onFinishFailed={onFinishFailed}
//           autoComplete="off"
//         >
//           <Form.Item
//             label="Username"
//             name="username"
//             rules={[{ required: true, message: "Please input your username!" }]}
//           >
//             <Input />
//           </Form.Item>

//           <Form.Item
//             label="Password"
//             name="password"
//             rules={[{ required: true, message: "Please input your password!" }]}
//           >
//             <Input.Password />
//           </Form.Item>

//           <Form.Item name="remember" valuePropName="checked" label={null}>
//             <Checkbox>Remember me</Checkbox>
//           </Form.Item>

//           <Form.Item label={null}>
//             <Button type="primary" htmlType="submit">
//               Submit
//             </Button>
//           </Form.Item>
//         </Form>{" "}
//       </motion.div>
//     </AnimatePresence>
//   );
// };

// export default LoginSignupPage;
