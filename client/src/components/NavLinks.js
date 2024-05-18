import NavLink from "./NavLink";
function NavLinks() {
  const links = [
    { type: "router", linkName: "LawyerAI", link: "/about" },
    { type: "router", linkName: "Login", link: "/login" },
    { type: "router", linkName: "Signup", link: "/signup" },
  ];
  return (
    <div className="flex gap-6 max-sm:justify-center">
      {links.map(({ type, linkName, link }, index) => {
        return (
          <NavLink type={type} linkName={linkName} link={link} key={index} />
        );
      })}
    </div>
  );
}

export default NavLinks;
