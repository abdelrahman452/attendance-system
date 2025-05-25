/**{


  "userName": "string",
  "password": "string",
  "roles": [
    "string"
  ]
} */
import { Button, Form, Input, Select, DatePicker, TreeSelect } from "antd";
import useDepartments from "../../hooks/useDepartments";
import useBranches from "../../hooks/useBranches";

const AddEmployeeForm = ({ onFinish, onClick, roles }) => {
  const { departments } = useDepartments();
  const { branches } = useBranches();

  const departmentOptions = departments.map((depart) => {
    return { label: depart.name, value: depart.id };
  });
  const banchesOptions = branches.map((branch) => {
    return { label: branch.name, value: branch.id };
  });
  const rolesOptions = roles.map((role) => {
    return { label: role.name, value: role.name };
  });

  return (
    <div className="mx-auto flex flex-col items-center  gap-8 bg-white rounded-2xl border border-gray-200 px-5 pb-5 pt-5 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6 sm:pt-6 ">
      <Button type="default" onClick={onClick} className="self-end ">
        X
      </Button>

      <Form
        name="basic"
        layout="vertical"
        onFinish={onFinish}
        //   onFinishFailed={onFinishFailed}
        autoComplete="off"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
          gap: "0 20px",
          minWidth: "800px",
        }}
      >
        <Form.Item
          label="First Name"
          name="firstName"
          rules={[{ required: true, message: "Please input First Name" }]}
        >
          <Input placeholder="Enter your first name" />
        </Form.Item>
        <Form.Item
          label="Last Name"
          name="lastName"
          rules={[{ required: true, message: "Please input Last Name" }]}
        >
          <Input placeholder="Enter your last name" />
        </Form.Item>
        <Form.Item
          label="Employee Code"
          name="employeeCode"
          rules={[{ required: true, message: "Please input Employee Code" }]}
        >
          <Input placeholder="Enter your employee code" />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          validateTrigger={["onSubmit"]}
          rules={[
            { required: true, message: "Please input email" },
            { type: "email", message: "Please valid email" },
          ]}
        >
          <Input placeholder="Enter your email" />
        </Form.Item>
        <Form.Item
          label="username"
          name="userName"
          rules={[{ required: true, message: "Please input username" }]}
        >
          <Input placeholder="Enter your username" />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          validateTrigger={["onSubmit", "onBlur"]}
          rules={[
            { required: true, message: "Please input your password" },
            { min: 6, message: "Password must be at least 6 characters" },
            {
              validator: (_, value) => {
                if (!value) return Promise.resolve(); // Let 'required' handle it

                const errors = [];
                if (!/[a-z]/.test(value)) errors.push("one lowercase letter");
                if (!/[A-Z]/.test(value)) errors.push("one uppercase letter");
                if (!/\d/.test(value)) errors.push("one digit");
                if (!/[^a-zA-Z0-9]/.test(value))
                  errors.push("one special character");

                return errors.length > 0
                  ? Promise.reject(
                      `Password must contain at least ${errors.join(", ")}.`
                    )
                  : Promise.resolve();
              },
            },
          ]}
        >
          <Input.Password placeholder="Enter your password" />
        </Form.Item>

        <Form.Item
          label="Department"
          name="departmentId"
          rules={[{ required: true, message: "Please select Department" }]}
        >
          <Select placeholder="select department" options={departmentOptions} />
        </Form.Item>
        <Form.Item
          label="Branch "
          name="branchId"
          rules={[{ required: true, message: "Please select branch" }]}
        >
          <Select placeholder="select branch" options={banchesOptions} />
        </Form.Item>
        <Form.Item
          label="Status "
          name="status"
          rules={[{ required: true, message: "Please select status" }]}
        >
          <Select
            placeholder="select status"
            options={[
              { label: "Active", value: "active" },
              { label: "InActive", value: "inActive" },
            ]}
          />
        </Form.Item>
        <Form.Item
          label="Hire Date"
          name="hireDate"
          rules={[{ required: true, message: "Please select Hire Date" }]}
        >
          <DatePicker style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item label="Role" name="roles">
          <Select
            mode="multiple"
            placeholder="select role"
            options={rolesOptions}
          />
        </Form.Item>
        <Form.Item
          style={{
            gridColumn: "1 / -1",
            textAlign: "center",
            marginTop: "20px",
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddEmployeeForm;
