import { Button, Form, Input, Select, DatePicker } from "antd";
import useEmployees from "../../hooks/useEmployees";

const AddVacationForm = ({ onFinish, onClick }) => {
  //     {
  //   "employeeId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  //   "startDate": "2025-05-25T09:48:18.874Z",
  //   "endDate": "2025-05-25T09:48:18.874Z",
  //   "reason": "string"
  // }
  const { employees } = useEmployees();
  const employeesOptions = employees.map((employee) => {
    return {
      label: `${employee.firstName} ${employee.lastName}`,
      value: employee.userId,
    };
  });

  return (
    <div className="mx-auto flex flex-col items-center w-[800px] gap-8 bg-white rounded-2xl border border-gray-200 px-5 pb-5 pt-5 ">
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
          label="Employees"
          name="employeeId"
          rules={[{ required: true, message: "Please select Employees" }]}
        >
          <Select placeholder="select Employees" options={employeesOptions} />
        </Form.Item>

        <Form.Item
          label="Start Date"
          name="startDate"
          rules={[{ required: true, message: "Please select Start Date" }]}
        >
          <DatePicker style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          label="End Date"
          name="endDate"
          rules={[{ required: true, message: "Please select End Date" }]}
        >
          <DatePicker style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          style={{
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

export default AddVacationForm;
