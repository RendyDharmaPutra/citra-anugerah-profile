import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { NAVIGATION } from "@/constants/navigation.constant";
import { SOCIAL_MEDIA } from "@/constants/social.constant";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

type MobileNavProps = {
  currentPath: string;
};

export const MobileNav: React.FC<MobileNavProps> = ({ currentPath }) => {
  return (
    <div className="md:hidden">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            aria-label="Buka navigasi"
            className="border-border bg-transparent"
          >
            <Menu className="h-5 w-5" aria-hidden="true" />
            <span className="sr-only">Buka menu</span>
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end" className="w-44">
          {NAVIGATION.map(({ name, path }) => {
            const isActive = currentPath === path;
            return (
              <DropdownMenuItem key={name} asChild>
                <a
                  href={path}
                  aria-current={isActive ? "page" : undefined}
                  className={`
                    ${
                      isActive
                        ? "font-medium text-foreground"
                        : "text-muted-foreground hover:bg-primary/20"
                    }`}
                >
                  {name}
                </a>
              </DropdownMenuItem>
            );
          })}

          <DropdownMenuSeparator />

          <DropdownMenuItem asChild>
            <a
              href={SOCIAL_MEDIA.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary"
            >
              <WhatsAppIcon color="#4DB97E" />
              WhatsApp
            </a>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
