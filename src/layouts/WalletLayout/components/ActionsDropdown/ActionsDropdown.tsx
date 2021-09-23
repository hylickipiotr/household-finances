import * as Dialog from "@radix-ui/react-dialog";
import { useRouter } from "next/router";
import * as React from "react";
import { RiDeleteBinLine, RiEdit2Line } from "react-icons/ri";
import * as DropdownMenu from "src/components/DropdownMenu";
import { DialogProvider } from "src/contexts/Dialog";
import { useWalletContext } from "src/contexts/Wallet";
import { useDeleteWalletMutation } from "src/generated/graphql-urql";
import { useDialog } from "src/hooks/useDialog";
import { WalletDialog } from "src/layouts/WalletsLayout/components/WalletDialog";

const ActionsDropdown: React.VFC = () => {
  const { id, name, color, icon, initialBalance } = useWalletContext();
  const router = useRouter();
  const dialogContext = useDialog();
  const [, deleteWallet] = useDeleteWalletMutation();

  const handleDelete = async () => {
    const answer = window.confirm(`Are you sure to delete wallet ${name}`);
    if (!answer) return;

    try {
      await deleteWallet({
        id,
      });
      router.replace("/wallets");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <DropdownMenu.Content align="center" className="w-48">
      <DropdownMenu.Item
        asChild
        className="flex px-4 h-9 items-center space-x-3 bg-white font-light text-gray-900 cursor-pointer hover:bg-gray-200 focus:outline-none"
      >
        <DialogProvider value={dialogContext}>
          <Dialog.Root {...dialogContext}>
            <Dialog.Trigger className="w-full flex px-4 h-9 items-center space-x-3 bg-white font-light text-gray-900 cursor-pointer hover:bg-gray-200 focus:outline-none">
              <RiEdit2Line />
              <p>Edit wallet</p>
            </Dialog.Trigger>
            <Dialog.Overlay className="dialog-overlay" />
            <Dialog.Content className="dialog-content w-full overflow-hidden">
              <WalletDialog
                id={id}
                defaultValues={{
                  name,
                  color,
                  icon,
                  initialBalance: String(initialBalance),
                }}
              />
            </Dialog.Content>
          </Dialog.Root>
        </DialogProvider>
      </DropdownMenu.Item>
      <DropdownMenu.Separator className="w-11/12 h-px mx-auto my-1.5 bg-gray-300" />

      <DropdownMenu.Item
        className="flex px-4 h-9 items-center space-x-3 bg-white font-light text-gray-900 cursor-pointer hover:bg-gray-200 focus:outline-none"
        onSelect={handleDelete}
      >
        <RiDeleteBinLine />
        <p>Delete wallet</p>
      </DropdownMenu.Item>
    </DropdownMenu.Content>
  );
};

export { ActionsDropdown };
