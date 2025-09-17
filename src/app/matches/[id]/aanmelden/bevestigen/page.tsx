import CompleteSignup from "@/components/Custom/CompleteSignup";

export default async function Confirm({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8">
      <CompleteSignup />
    </div>
  );
}
