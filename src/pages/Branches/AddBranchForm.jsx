import { Button, Form, Input } from "antd";

const AddBranchForm = ({ onClick, onFinish }) => {
  return (
    <div className="mx-auto flex flex-col items-center w-[800px] gap-8 bg-white rounded-2xl border border-gray-200 px-5 pb-5 pt-5 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6 sm:pt-6 ">
      <Button type="default" onClick={onClick} className="self-end ">
        Xs
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
          rules={[{ required: true, message: "Please input Branch Latitude" }]}
        >
          <Input className=" border-[#d9d9d9] rounded-lg h-8 dark:bg-[#202a3f] dark:border-[#434343]" />
        </Form.Item>
        <Form.Item
          label="Longitude"
          name="longitude"
          rules={[{ required: true, message: "Please input Branch Longitude" }]}
        >
          <Input className=" border-[#d9d9d9] rounded-lg h-8 dark:bg-[#202a3f] dark:border-[#434343]" />
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
