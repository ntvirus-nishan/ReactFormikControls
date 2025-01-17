import Input from "./Input";
import Textarea from "./Textarea";
import Select from "./Select";
import RadioButton from "./RadioButton";
import CheckboxGroup from "./CheckboxGroup";
import DatePicker from "./DatePicker";

function FormikControl(props) {
  // console.log(props);
  const { control, ...rest } = props;

  // using switch case method
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
      return <Textarea {...rest} />;
    case "select":
      return <Select {...rest} />;
    case "radio":
      return <RadioButton {...rest} />;
    case "checkbox":
      return <CheckboxGroup {...rest} />;
    case "date":
      return <DatePicker {...rest} />;
    default:
      return null;
  }
}

export default FormikControl;
