
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  // Avoid hydration mismatch by only showing the toggle after mounting
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) {
    return <Button variant="ghost" size="icon" className="w-10 h-10 opacity-0" />;
  }

  return (
    <Button 
      variant="ghost" 
      size="icon" 
      onClick={toggleTheme} 
      className="w-10 h-10"
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 text-zafran-400" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </Button>
  );
}
