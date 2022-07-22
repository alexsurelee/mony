import { Text, Title } from "@mantine/core";
import { MonyButton } from "app/components/button/MonyButton";

export default function Index() {
  return (
    <div>
      <Title>Welcome to Mony</Title>
      <Text>
        Mony is currently in development. The expected launch date is February
        2023.
      </Text>
      <div className="button-group">
        <MonyButton variant="link" to="/sign-up">
          Sign Up
        </MonyButton>
        <MonyButton variant="link" to="/sign-in">
          Sign In
        </MonyButton>
      </div>
    </div>
  );
}
