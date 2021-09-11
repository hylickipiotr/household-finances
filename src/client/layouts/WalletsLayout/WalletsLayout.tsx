import * as Dialog from "@radix-ui/react-dialog";
import * as React from "react";
import { BiPlus } from "react-icons/bi";
import { Layout } from "src/client/components/Layout";
import { DialogProvider, useDialog } from "src/client/contexts/Dialog";
import {
  WalletsContextValue,
  WalletsProvider,
} from "src/client/contexts/Wallets";
import { WalletsList } from "src/client/layouts/WalletsLayout/components/WalletsList";
import { WalletDialog } from "./components/WalletDialog";

type WalletsLayoutProps = WalletsContextValue;

const WalletsLayout: React.VFC<WalletsLayoutProps> = ({ wallets }) => {
  const dialogContext = useDialog();

  return (
    <WalletsProvider value={{ wallets }}>
      <Layout>
        <div className="space-y-8">
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <h1 className="text-3xl text-gray-900">Wallets</h1>
              <p className="text-gray-400">Overview of wallets</p>
            </div>
            <DialogProvider value={dialogContext}>
              <Dialog.Root {...dialogContext}>
                <Dialog.Trigger
                  type="button"
                  className="flex items-center space-x-3 px-6 py-3 bg-blue-600 font-semibold text-white rounded-lg shadow-md focus:outline-none focus:ring"
                >
                  <BiPlus className="w-5 h-5" />
                  <p className="text-base">Create new wallet</p>
                </Dialog.Trigger>
                <Dialog.Overlay className="dialog-overlay" />
                <Dialog.Content className="dialog-content w-full overflow-hidden">
                  <WalletDialog />
                </Dialog.Content>
              </Dialog.Root>
            </DialogProvider>
          </div>
          <WalletsList />
        </div>
      </Layout>
    </WalletsProvider>
  );
};

export { WalletsLayout };
