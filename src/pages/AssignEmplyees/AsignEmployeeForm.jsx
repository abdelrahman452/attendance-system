import { Button, Form, Select } from "antd";
import useEmployees from "../../hooks/useEmployees";

const AssignEmployeeForm = ({ onClick, onFinish, shifts }) => {
  const { employees } = useEmployees();
  const shiftsOption = shifts.map((shift) => ({
    label: `${shift.name}`,
    value: shift.id,
  }));
  const employeesoptions = employees.map((employee) => ({
    label: `${employee.firstName} ${employee.lastName}`,
    value: employee.userId,
  }));
  const daysOfWeek = [
    { label: "Thursday", value: 0 },
    { label: "Friday", value: 1 },
    { label: "Saturday", value: 2 },
    { label: "Sunday", value: 3 },
    { label: "Monday", value: 4 },
    { label: "Tuesday", value: 5 },
    { label: "Wednesday", value: 6 },
  ];
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
        style={{ width: "400px" }}
      >
        <Form.Item
          label="Shift"
          name="shiftId"
          rules={[{ required: true, message: "Please select shift" }]}
          style={{ width: "70%" }}
        >
          <Select placeholder="Select shift" options={shiftsOption} />
        </Form.Item>
        <Form.Item
          label="Day"
          name="day"
          style={{ width: "70%" }}
          rules={[{ required: true, message: "Please select day" }]}
        >
          <Select placeholder="select day" options={daysOfWeek} />
        </Form.Item>

        <Form.Item
          label="Employees"
          name="employeesIds"
          rules={[{ required: true, message: "Please select employees" }]}
        >
          <Select
            mode="multiple"
            placeholder="select Employees"
            options={employeesoptions}
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

export default AssignEmployeeForm;
