"use client";

import { createContext, useContext, useEffect, useState } from "react";

type UnlockContextType = {
  unlocked: boolean;
  unlock: (pin: string) => boolean;
};

const UnlockContext = createContext<UnlockContextType>({
  unlocked: false,
  unlock: () => false,
});

const SESSION_KEY = "xp_unlocked";

export function UnlockProvider({ children }: { children: React.ReactNode }) {
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    setUnlocked(sessionStorage.getItem(SESSION_KEY) === "1");
  }, []);

  function unlock(pin: string): boolean {
    const correct = pin === process.env.NEXT_PUBLIC_UNLOCK_PIN;
    if (correct) {
      sessionStorage.setItem(SESSION_KEY, "1");
      setUnlocked(true);
    }
    return correct;
  }

  return (
    <UnlockContext.Provider value={{ unlocked, unlock }}>
      {children}
    </UnlockContext.Provider>
  );
}

export const useUnlock = () => useContext(UnlockContext);
