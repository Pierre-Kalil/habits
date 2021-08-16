import { Container1, InputContainer1 } from "./styles";


const Input = ({label, icon: Icon, register, name, error = "", ...rest}) => {

  return (
    <Container1>
      <div>{label} {!!error && <span> - {error}</span>}</div>

      <InputContainer1 isErrored={!!error}>
      {Icon && <Icon size={20} />}
      {/* <input {...register(name)} {...rest} /> */}
      <input />
      {/* <input {...rest} /> */}
      </InputContainer1>
	</Container1>
  );
}
 export default Input;