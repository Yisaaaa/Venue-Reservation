const QueueAnnouncer = ({
  next,
  className,
}: {
  next: string;
  className?: string;
}) => {
  return (
    <div
      className={`${
        className ? className : ""
      } bg-white p-4 rounded-2xl w-[80%] mx-auto shadow`}
    >
      <p className="text-center text-xl font-medium">Next in queue: {next}</p>
    </div>
  );
};

export default QueueAnnouncer;
