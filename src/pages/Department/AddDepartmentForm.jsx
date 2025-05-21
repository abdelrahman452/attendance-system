import { Button, Form, Input, Select } from "antd";
import useEmployees from "../../hooks/useEmployees";
const AddDepartmentForm = ({ onFinish, onClick }) => {
  const { employees } = useEmployees();
  /**Parent Department:
[▼ None (Top-level)       ] ← will send null
[   Marketing             ]
[   IT                    ]
[   HR                    ] 
{
  "name": "string",
  "description": "string",
  "managerId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "parentDepartmentId": null
}   
*/
  const employeesOptions = employees.map((employee) => {
    return {
      label: `${employee.firstName} ${employee.lastName}`,
      value: employee.userId,
    };
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
          <Select placeholder="Select Manager" options={employeesOptions} />
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
                value: "none (should be null for mosaad",
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
