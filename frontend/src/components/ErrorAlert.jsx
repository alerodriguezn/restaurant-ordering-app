import { Alert, AlertIcon, AlertTitle, AlertDescription } from "@chakra-ui/react";

const ErrorAlert = ({description}) => {
  return (
    <Alert status="error" font marginTop={2}>
      <AlertIcon />
      <AlertDescription>
        {description}
      </AlertDescription>
    </Alert>
  );
};

export default ErrorAlert;
