interface ErrorScreenProps {
  message: string;
}

export function ErrorScreen({ message }: ErrorScreenProps) {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <p className="text-red-500 text-[18px]">{message}</p>
    </div>
  );
}
