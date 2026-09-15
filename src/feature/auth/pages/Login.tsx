import { Button, Form, Input } from "antd";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import useLogin from "../../service/hooks/useLogin";

const Login = () => {
  const { isPending, login } = useLogin();

  // =========================================
  // LOGIN
  // =========================================

  const onFinish = (values: { email: string; password: string }) => {
    login(values);
  };

  // =========================================
  // JSX
  // =========================================

  return (
    <div
      className="
        min-h-screen
        flex
        items-center
        justify-center
        relative
        overflow-hidden
        select-none
        bg-[#020202]
      "
    >
      {/* =====================================
          LOGIN CARD
      ====================================== */}

      <div
        className="
          login-animation
          w-[400px]
          bg-white/20
          backdrop-blur-lg
          p-8
          rounded-2xl
          shadow-md
          border
          border-white/30
          relative
          z-20
        "
      >
        <h1
          className="
            text-3xl
            font-bold
            text-white
            text-center
            mb-8
          "
        >
          Login
        </h1>

        <Form layout="vertical" onFinish={onFinish}>
          {/* EMAIL */}

          <Form.Item
            name="email"
            label={<span className="text-white">Email</span>}
            rules={[
              {
                required: true,
                message: "Email kiriting",
              },
              {
                type: "email",
                message: "To'g'ri email kiriting",
              },
            ]}
          >
            <Input
              size="large"
              prefix={<MailOutlined />}
              placeholder="Email"
              className="
                !bg-gray-700
                !border-gray-600
                !text-white
              "
            />
          </Form.Item>

          {/* PASSWORD */}

          <Form.Item
            name="password"
            label={<span className="text-white">Password</span>}
            rules={[
              {
                required: true,
                message: "Password kiriting",
              },
              {
                min: 6,
                message: "Password kamida 6 ta belgidan iborat bo'lishi kerak",
              },
            ]}
          >
            <Input.Password
              size="large"
              prefix={<LockOutlined />}
              placeholder="Password"
              className="
                !bg-gray-700
                !border-gray-600
                !text-white
              "
            />
          </Form.Item>

          {/* LOGIN BUTTON */}

          <Form.Item className="mb-0">
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              block
              loading={isPending}
            >
              {isPending ? "Kirilmoqda..." : "Login"}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
