const Header = ({
  title,
  subtitle,
  rightContent,
}) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-10">

      <div>

        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          {title}
        </h1>

        <p className="text-slate-400 mt-3 text-base">
          {subtitle}
        </p>

      </div>

      {rightContent}

    </div>
  );
};

export default Header;