import { NextPage } from "next";
import { ChangeEvent, useState } from "react";

const HomePage: NextPage = () => {
  const [{ token, webhook }, setState] = useState<{
    token: string;
    webhook: string;
  }>({
    token: "",
    webhook: "",
  });

  return (
    <div>
      <nav className="border-b border-gray-300">
        <div className="container mx-auto p-4">Telegram</div>
      </nav>
      <main>
        <div className="container mx-auto p-4">
          <form
            onSubmit={(event) => {
              event.preventDefault();
            }}
            className="flex flex-col gap-y-4"
          >
            <input
              id="token"
              name="token"
              placeholder="Token"
              className="w-full border border-gray-300 rounded px-2 py-1"
              value={token}
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                setState((previous) => ({
                  ...previous,
                  token: event.target.value,
                }));
              }}
              required
            />
            <input
              id="webhook"
              name="webhook"
              placeholder="Webhook"
              className="w-full border border-gray-300 rounded px-2 py-1"
              value={webhook}
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                setState((previous) => ({
                  ...previous,
                  webhook: event.target.value,
                }));
              }}
              required
            />
            <button
              type="submit"
              className="text-white bg-blue-500 px-2 py-1 rounded"
            >
              Add Webhook
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
