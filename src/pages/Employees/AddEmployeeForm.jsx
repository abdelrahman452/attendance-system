/**{
  "firstName": "string",
  "lastName": "string",
  "employeeCode": "string",
  "departmentId": 0,
  "branchId": 0,
  "status": "string",
  "hireDate": "2025-05-20T10:53:49.619Z",
  "email": "user@example.com",
  "userName": "string",
  "password": "string",
  "roles": [
    "string"
  ]
} */
import { Button, Form, Input, Select } from "antd";
import useDepartments from "../../hooks/useDepartments";
import useBranches from "../../hooks/useBranches";

const AddEmployeeForm = ({ onFinish, onClick }) => {
  const { departments } = useDepartments();
  const { branches } = useBranches();
  console.log(branches);
  const departmentOptions = departments.map((depart) => {
    return { label: depart.name, value: depart.id };
  });
  return (
    <div className="mx-auto flex flex-col items-center w-[800px] gap-8 bg-white rounded-2xl border border-gray-200 px-5 pb-5 pt-5 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6 sm:pt-6 ">
      <Button type="default" onClick={onClick} className="self-end ">
        X
      </Button>

      <Form
        name="basic"
        layout="vertical"
        onFinish={onFinish}
        //   onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="First Name"
          name="firstName"
          rules={[{ required: true, message: "Please input First Name" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Last Name"
          name="lastName"
          rules={[{ required: true, message: "Please input Last Name" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Employee Code"
          name="employeeCode"
          rules={[{ required: true, message: "Please input Employee Code" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Department"
          name="departmentId"
          rules={[{ required: true, message: "Please input Employee Code" }]}
        >
          <Select options={departmentOptions} />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddEmployeeForm;
