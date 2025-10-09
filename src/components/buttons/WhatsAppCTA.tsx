import { WhatsAppIcon } from "../icons/WhatsAppIcon";
import { Button } from "../ui/button";
import { SOCIAL_MEDIA } from "@/constants/social.constant";

export const WhatsAppCTA = () => {
  const whatsappMedia = SOCIAL_MEDIA.whatsapp;
  return (
    <a href={whatsappMedia} target="_blank" rel="noopener noreferrer">
      <Button className="flex items-center gap-2 cursor-pointer">
        <WhatsAppIcon color="#fff" />
        WhatsApp
      </Button>
    </a>
  );
};
