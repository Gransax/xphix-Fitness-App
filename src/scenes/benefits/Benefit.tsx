import { BenefitType, SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const childVariant = {
  hidden: {
    opcatity: 0,
    scale: 0.9,
  },
  visible: { opcatity: 1, scale: 1 },
};

type Props = {
  icon: JSX.Element;
  title: string;
  description: string;
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefit = ({ icon, title, description, setSelectedPage }: Props) => {
  return (
    <motion.div
      variants={childVariant}
      className="mt-5 flex flex-col items-center gap-3 rounded-md border-2 border-gray-100 px-5 py-16 text-center"
    >
      <div className="rounded-full border-2 border-gray-100 bg-primary-100 p-5">
        {icon}
      </div>
      <h4 className="font-bold">{title}</h4>
      <p> {description}</p>
      <AnchorLink
        className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
        onClick={() => setSelectedPage(SelectedPage.ContactUs)}
        href={`#${SelectedPage.ContactUs}`}
      >
        <p>Learn More</p>
      </AnchorLink>
    </motion.div>
  );
};

export default Benefit;
