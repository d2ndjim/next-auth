import { signOut } from "@/auth";
import { Button } from "@/components/ui/button";

const Settings = async () => {
  return (
    <div>
      <h1>Settings</h1>
      <form action={async () => {
        "use server"
        await signOut()
      }}>
        <Button>Sign Out</Button>
      </form>
    </div>
  );
};

export default Settings;
