import AuthenticationCard from "../../components/Modules/AuthenticationCard/AuthenticationCard";
import RegisterForm from "../../components/Templates/Register/RegisterForm";

export default function Register() {
  return (
    <div>
      <AuthenticationCard>
        <RegisterForm />
      </AuthenticationCard>
    </div>
  );
}
