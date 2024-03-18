import { Input, InputGroup, InputRightElement, Button,Alert,AlertIcon} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { useLogin } from "../../hooks/useLogin.js";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [inputs, setInputs] = useState({
    email: "",
    passowrd: "",
  });
  const { loading, error, login } = useLogin();
  return (
    <>
      <Input
        placeholder="Enter email address"
        fontSize={14}
        cursor={"pointer"}
        value={inputs.email}
        type="email"
        size={"md"}
        onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
      ></Input>
      <InputGroup>
				<Input
					placeholder='Password'
					fontSize={14}
					type={showPassword ? "text" : "password"}
					value={inputs.password}
					size={"sm"}
					onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
				/>
				<InputRightElement h='full'>
					<Button variant={"ghost"} size={"sm"} onClick={() => setShowPassword(!showPassword)}>
						{showPassword ? <ViewIcon /> : <ViewOffIcon />}
					</Button>
				</InputRightElement>
			</InputGroup>

      {error && (
        <Alert status="error" fontSize={13} p={2} borderRadius={4}>
          <AlertIcon fontSize={12} />
          {error.message}
        </Alert>
      )}
      <Button
        w={"full"}
        colorScheme="blue"
        size={"sm"}
        fontSize={14}
        isLoading={loading}
        onClick={() => login(inputs)}
      >
        Log In
      </Button>
    </>
  );
};

export default Login;
