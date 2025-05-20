import { Button, Form, Input, Select } from "antd";
import { label } from "framer-motion/client";
const AddDepartmentForm = ({ onFinish, onClick }) => {
  /**Parent Department:
[▼ None (Top-level)       ] ← will send 0
[   Marketing             ]
[   IT                    ]
[   HR                    ] 
{
  "name": "string",
  "description": "string",
  "managerId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "parentDepartmentId": 0
}   
*/
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
          label="Department Name"
          name="name"
          rules={[{ required: true, message: "Please input Department Name" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Description"
          name="description"
          rules={[{ required: true, message: "Please input Description" }]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          label="Manager"
          name="managerId"
          rules={[{ required: true, message: "Please select Manager" }]}
        >
          <Select
            placeholder="Select Manager"
            options={[
              {
                label: "s",
                value: "s",
              },
            ]}
          />
        </Form.Item>
        <Form.Item
          label="Parent Department"
          name="parentDepartmentId"
          rules={[
            { required: true, message: "Please select Parent Department" },
          ]}
        >
          <Select
            placeholder="Select Parent Department"
            options={[
              {
                label: "None",
                value: "0",
              },
            ]}
          />
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

export default AddDepartmentForm;
