import React from "react";
import { FaQuestion } from "react-icons/fa";
import Card from "./Card.jsx";
import { BiMath } from "react-icons/bi";
import { FaUserFriends } from "react-icons/fa";

function Properties() {
  return (
    <div className="max-w-[90%] m-auto flex flex-col md:flex-row  gap-5 mt-10">
      <Card
        icon={<FaQuestion size={20} />}
        title="1k+ questions"
        description="Comprehensive quiz library for all skill levels"
        color="primary"
      />

      <Card
        icon={<BiMath size={20} />}
        title="12 thematics"
        description="From HTML basics to advanced web security"
        color="third"
      />

      <Card
        icon={<FaUserFriends size={20} />}
        title="100+ users"
        description="Join developers improving through daily practice"
        color="secondary"
      />
    </div>
  );
}

export default Properties;
