const Tab = ({ tabData, field, setField }) => {
  return (
    <div
      style={{
        boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
      }}
      className="flex gap-x-1 max-w-max"
    >
      {tabData.map((tab) => (
        <div
          key={tab.id}
          onClick={() => setField(tab.type)}
          className={`cursor-pointer  ${
            field === tab.type
              ? "bg-gray-900 text-white text-sm"
              : "bg-transparen text-sm"
          } py-2 px-5 transition-all duration-200`}
        >
          {tab?.tabName}
        </div>
      ))}
    </div>
  );
};

export default Tab;
