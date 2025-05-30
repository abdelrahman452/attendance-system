import { Button, Form, Input, InputNumber } from "antd";

const AddBranchForm = ({ onClick, onFinish }) => {
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
          label="Branch Name"
          name="name"
          rules={[{ required: true, message: "Please input Branch Name" }]}
        >
          <Input className=" border-[#d9d9d9] rounded-lg h-8 dark:bg-[#202a3f] dark:border-[#434343]" />
        </Form.Item>

        <Form.Item
          label="Branch Location"
          name="location"
          rules={[{ required: true, message: "Please input Branch Name" }]}
        >
          <Input className=" border-[#d9d9d9] rounded-lg h-8 dark:bg-[#202a3f] dark:border-[#434343]" />
        </Form.Item>

        <Form.Item
          label="Latitude"
          name="latitude"
          rules={[
            { required: true, message: "Please enter a valid latitude" },
            {
              type: "number",
              min: -90,
              max: 90,
              message: "Latitude must be between -90 and 90",
            },
          ]}
        >
          <InputNumber
            step={0.000001}
            placeholder="Enter latitude (-90 to 90)"
            style={{ width: "100%" }}
          />
        </Form.Item>
        <Form.Item
          label="Longitude"
          name="longitude"
          rules={[
            { required: true, message: "Please enter a valid longitude" },
            {
              type: "number",
              min: -180,
              max: 180,
              message: "Longitude must be between -180 and 180",
            },
          ]}
        >
          <InputNumber
            step={0.000001}
            placeholder="Enter longitude (-180 to 180)"
            style={{ width: "100%" }}
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

export default AddBranchForm;
