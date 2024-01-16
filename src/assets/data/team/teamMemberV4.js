import { FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";

import avatarThumb1 from "../../images/team/f.png";
import avatarThumb2 from "../../images/team/v4_crew2.png";
import avatarThumb3 from "../../images/team/v4_crew3.png";
import avatarThumb4 from "../../images/team/v4_crew4.png";

const data = [
  {
    avatar: avatarThumb1,
    name: "Artsims",
    designation: "Founder",
    socialLinks: [
      {
        icon: <FaLinkedinIn />,
        url: "#",
      },
      {
        icon: <FaTwitter />,
        url: "#",
      },
      {
        icon: <FaInstagram />,
        url: "#",
      },
    ],
  }
];

export default data;
