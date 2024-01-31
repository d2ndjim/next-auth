"use client";
import { useSession } from 'next-auth/react';
import { Button } from "@/components/ui/button";
import { logout } from '@/actions/logout';

const Settings =  () => {
  const session = useSession();
  const handleClick = () => {
    logout();
  };

  return (
    <div>
      <h1>{JSON.stringify(session)}</h1>
      
        <Button onClick={handleClick}>Sign Out</Button>
    </div>
  );
};

export default Settings;
